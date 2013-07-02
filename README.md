messageCenter
=============

Javascript + CSS plugin to display messages and warnings.


Setup
----------
Requires jQuery 1.8+

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