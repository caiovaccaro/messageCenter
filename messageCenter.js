;(function() {

    MessageCenter = function() {

        this.messageCenter = '#messageCenter';
        this.timeToClose = 6000;

        return {

            // params: message, status, dismiss, callback, breaklines, close
            // message: Message to be shown
            // status: 'success' or 'error'
            // dismiss: class or id of element to trigger closing when clicked, or string 'time' to close by itself
            // callback after showing up
            // breaklines, if true add <br> between itens of messages array
            // close, if false don't show close link

            messageCenter: this.messageCenter,
            timeToClose: this.timeToClose

            , toOpen: function(params) {

                var message = params.message,
                    status = params.status,
                    dismiss = params.dismiss,
                    callback = params.callback,
                    breaklines = params.breaklines,
                    close = params.close,
                    messagesFromArray = '',
                    spacer = breaklines === true ? '<br/>' : ' ';

                if($(this.messageCenter).is(':visible')) {

                    this.toClose(true, params);

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

                    if(typeof close !== 'undefined' && close === false) {

                        $(this.messageCenter).find('.close').hide();

                    }

                    $(this.messageCenter).append('<p>' + message + '</p>').addClass(status).slideDown(function() {

                        if(typeof callback !== 'undefined' && typeof callback === 'function') {
                            callback();
                        }

                    });

                }

            }

            , toClose: function(open, params) {

                var obj = this;

                $(this.messageCenter).slideUp(function() {

                    $(this).find('p').remove();
                    $(this).removeClass();

                    if(open === true) {
                        obj.toOpen(params);
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

            , displayMessage: function(params) {

                var obj = this;

                if(typeof params.message === 'undefined' || typeof params.status === 'undefined') {
                    throw new Error('MessageCenter: You need to pass the message and status parameter');
                }

                obj.toOpen(params);

                $(obj.messageCenter).find('.close').click(function() {
                    obj.toClose();
                });
                  
            }

        };

    };

}).call(this);