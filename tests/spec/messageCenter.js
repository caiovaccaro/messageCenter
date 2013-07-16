'use strict';

var should = chai.should(),
	msg = new MessageCenter();
	
describe('MessageCenter', function() {
	it('should be an function', function() {
		MessageCenter.should.be.an('function');
	});

	describe('New object', function() {
		it('should be an object', function() {
			msg.should.be.an('object');
		});
		it('should be instance of MessageCenter', function() {
			msg.should.be.an.instanceOf(MessageCenter);
		});
	});

	describe('Default settings', function() {
		it('messageCenter should be a string', function() {
			msg.messageCenter.should.be.a('string');
		});
		it('timeToClose should be a number', function() {
			msg.timeToClose.should.be.a('number');
		});
	});

	describe('methods', function() {
		describe('displayMessage', function() {
			beforeEach(function() {
				spyOn(msg, 'toOpen');
			});
			it('should throw error when message or status are undefined', function() {
				function message() {
					msg.displayMessage({ status: 'success' });
				}
				function status() {
					msg.displayMessage({ message: 'Hello!' });
				}
				message.should.throw(/MessageCenter: You need to pass the message and status parameter/);
				status.should.throw(/MessageCenter: You need to pass the message and status parameter/);
			});
			it('should call toOpen when required parameters are defined', function() {
				var params = { message: 'Hello!', status: 'success' };
				msg.displayMessage(params);
				expect(msg.toOpen).toHaveBeenCalledWith(params);
				msg.toClose();
			});
		});

		describe('toOpen', function() {
			beforeEach(function() {
				spyOn(msg, 'toClose');
				spyOn(msg, 'dismiss');
			});
			afterEach(function() {
				setTimeout(function() {
					msg.toClose();
				}, 500);
			});
			it('should call toClose when MessageCenter is visible and call dismiss when it is defined', function() {
				msg.displayMessage({ message: 'Hello!', status: 'success', dismiss: 'time' });
				msg.displayMessage({ message: 'Hello!', status: 'success', dismiss: 'time' });
				expect(msg.toClose).toHaveBeenCalled();
				expect(msg.dismiss).toHaveBeenCalled();
			});
		});
	});
});