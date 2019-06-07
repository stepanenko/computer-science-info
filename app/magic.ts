
const message = 'hello';

function saySomething(message: string = 'whats up') {
  console.log(message);
}

saySomething(message);
