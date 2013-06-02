var NAMESPACE = NAMESPACE || {};

NAMESPACE.MessageCenter = {

	// message: Message to be shown
	// status: 'success' or 'error'
	// dismiss: class or id of element to trigger closing when clicked, or string 'time' to close by itself

	messageCenter: '#messageCenter',
	timeToClose: 6000

	, toOpen: function(message, status, dismiss, callback, breaklines) {

        var messagesFromArray = '',
            spacer = breaklines === true ? '<br/>' : ' ';

        if($(this.messageCenter).is(':visible')) {

            this.toClose(true, message, status, dismiss, callback, breaklines);

        } else {

            if(typeof dismiss !== 'undefined') {
                
                this.dismiss(dismiss);

            }

            if(message instanceof Array) {
                for (var i = 0; i <= message.length - 1; i++) {
                    messagesFromArray += spacer + message[i];
                };

                message = messagesFromArray.replace(spacer, ''); // Remove first spacer;
            }
            
            $(this.messageCenter).append('<p>' + message + '</p>').addClass(status).slideDown(function() {

                if(typeof callback !== 'undefined' && typeof callback === 'function') {
                    callback();
                }
            });

        }

    }

    , toClose: function(open, message, status, dismiss, callback, breaklines) {

        var obj = this;

        $(this.messageCenter).slideUp(function() {
            $(this).find('p').remove();
            $(this).removeClass();

            if(open === true) {
                obj.toOpen(message, status, dismiss, callback, breaklines);
            }
        });

    }

    , dismiss: function(dismiss) {

        var obj = this;

        if(dismiss === 'time') {

            setTimeout(function() {
                obj.toClose();
            }, obj.timeToClose)

        } else if(dismiss instanceof Array) {

            for (var i = dismiss.length - 1; i >= 0; i--) {

                $(dismiss[i]).click(function() {
                    obj.toClose();
                });

            };

        } else {

            $(dismiss).click(function() {
                obj.toClose();
            });

        }
    }

    , displayMessage: function(message, status, dismiss, callback, breaklines) {

        var obj = this;

        if(typeof message === 'undefined' || typeof status === 'undefined') {
            throw new Error('MessageCenter: You need to pass the message and status parameter');
        }

        obj.toOpen(message, status, dismiss, callback, breaklines);
        
        $(obj.messageCenter).find('.close').click(function() {
            obj.toClose();
        });
        
    }

};