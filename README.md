messageCenter
=============

Javascript + CSS plugin to display messages and warnings.


Instructions
----------
You can use it as a jQuery plugin or as a namespaced object. Both requires jQuery to work.

- messageCenter.jquery.js is setup as a jQuery plugin and messageCenter.js as a namespaced object
- Place both Css(or Less if you prefer) and Javascript files in your project(choose one)
- Call messageCenter

```javascript
NAMESPACE.MessageCenter.displayMessage({
	message: 'My beautiful message',
	status: 'success',
	dismiss: 'time',
	callback: function() { console.log('callback'); },
	breaklines: true,
	close: true
});

$('#yourElement').messageCenter({
	message: 'My beautiful message',
	status: 'success',
	dismiss: 'time',
	callback: function() { console.log('callback'); },
	breaklines: true,
	close: true
});
```
- message: String or Array. Example: 'Wrong password' or ['Wrong password', 'User name taken']
- status: Name of the Css Class added to the element. Example: 'warning', 'error', 'success'. Actually corresponds to yellow, red and green right now
- dismiss(optional): Option 1: Id or Class from element that when clicked will close the messageCenter(example: '.input', '#name') or Array ['.input', '#name']. Option 2: 'time' to close by itself after a few seconds.
- callback(optional): Function. Executed when messageCenter is completely shown
- breaklines(optional): Bool. If it's true the spacer between messages will break lines. Use together with 'messages' as Array
- close(optional): Bool. If false it will not close the messageCenter unless you want to display another message