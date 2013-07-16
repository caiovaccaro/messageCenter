messageCenter
=============

Javascript + CSS plugin to display messages and warnings.


Setup
----------
**Requires jQuery 1.8+**

- Place both Javascript and CSS files in your project
- Paste the index.html file content after your opening body tag

Usage
-----

```javascript
var messageCenter = new MessageCenter();

messageCenter.displayMessage({
	message: 'My beautiful message',
	status: 'success', // Corresponds to the CSS class added to the element
	dismiss: 'time', // optional (How to dismiss the message, instructions below. Defaults to not dismiss)
	callback: function() { console.log('callback'); }, // optional (Optional callback)
	breaklines: true, // optional(Breakline after each message or not, default to false)
	close: true // optional(Show or hide close button. Defaults to false)
});
```
- message: String or Array. Example: 'Wrong password' or ['Wrong password', 'User name taken'].
- status: Name of the Css Class added to the element. Example: 'warning', 'error', 'success'. Actually corresponds to yellow, red and green right now.
- dismiss(optional): Option 1: Id or Class from element that when clicked will close the messageCenter(example: '.input', '#name') or Array ['.input', '#name']. Option 2: 'time' to close by itself after a few seconds.
- callback(optional): Function. Executed when messageCenter is completely shown.
- breaklines(optional): true/false. If it's true the spacer between messages will break lines. Use together with 'messages' as Array.
- close(optional): true/false. If false it will not show the close button.

Options
-------
You can change the html element for the MessageCenter and the time to close the display.  
```javascript
var messages = new MessageCenter({ element: '#messages', timeToClose: 3000 });

messages.displayMessage({ message: 'My beautiful message', status: 'success', dismiss: 'time' });
```  

License
-------
The MIT License (MIT)  
  
Copyright (c) 2013 Caio Abib Ramos Vaccaro Mora  
  
Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:  
  
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.  
  
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.  