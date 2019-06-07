var message = 'hello';
function saySomething(message) {
    if (message === void 0) { message = 'whats up'; }
    console.log(message);
}
saySomething(message);
