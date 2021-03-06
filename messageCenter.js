;(function() {

    /**
     * Constructor
     * @param  {object} options:
     * {
     *   @param {string} element
     *   @param {number} timeToClose
     * }
     * @return {void}
     */
    MessageCenter = function(options) {

        this.messageCenter = typeof options !== 'undefined' && typeof options.element !== 'undefined' ? options.element : '#messageCenter';
        this.timeToClose = typeof options !== 'undefined' && typeof options.timeToClose !== 'undefined' ? options.timeToClose : 6000;

    };

    MessageCenter.prototype = {

        /**
         * Delegate action
         * @param {object} params:
         * { 
         *   @param {string|array} message: message to be shown
         *   @param {string} status: css class added, can be 'success', 'warning', 'error' depending on the theme
         *   @param {string|array} dismiss: class or id of element to trigger closing when clicked, or array of classes/ids, or string 'time' to close by itself. Optional
         *   @param {function} callback: function executed after showing up. Optional
         *   @param {boolean} breaklines: if true add <br> between itens of messages array. Optional
         *   @param {boolean} close, if false don't show close link. Optional
         * }
         * @return {void}
         */
        displayMessage: function(params) {

            var obj = this;

            if(typeof params.message === 'undefined' || typeof params.status === 'undefined') {
                throw new Error('MessageCenter: You need to pass the message and status parameter');
            }

            obj.toOpen(params);

            $(obj.messageCenter).find('.close').click(function() {
                obj.toClose();
            });
              
        },

        /**
         * Open MessageCenter
         * @param  {object} params (from displayMessage)
         * @return {void}
         */
        toOpen: function(params) {

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

        },

        /**
         * Close MessageCenter
         * @param  {bool} open
         * @param  {object} params (from displayMessage)
         * @return {void}
         */
        toClose: function(open, params) {

            var obj = this;

            $(this.messageCenter).slideUp(function() {

                $(this).find('p').remove().end().removeClass();

                if(open) {
                    obj.toOpen(params);
                }

            });

        },

        /**
         * Trigger dismiss(close event)
         * @param  {string or array} dismiss
         * @return {void}
         */
        dismiss: function(dismiss) {

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

    };

}).call(this);