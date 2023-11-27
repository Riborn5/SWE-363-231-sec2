// Create a Node.js program that acts as a simple chatbot, responding to user input and
// providing predefined responses. In particular:
// 1. Implement a chatbot program that accepts user input via standard input (stdin)
// and responds to it.
// 2. Predefine a set of questions and answers for the chatbot to use.3. The chatbot should continuously prompt the user for input and respond with an
// appropriate answer based on the predefined questions.
// 4. The chatbot should terminate gracefully when the user enters a specific exit
// command (e.g., "exit" or "quit").


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const responses = {
  'hello': 'Hello! How can I assist you?',
  'how are you': 'I am just a computer program, so I don\'t have feelings, but thanks for asking!',
  'exit': 'Goodbye! Have a great day.',
  'quit': 'Goodbye! See you later.',
};

function chat() {
  rl.question('You: ', (userInput) => {
    userInput = userInput.toLowerCase().trim();
    
    if (responses[userInput]) {
      console.log(`Chatbot: ${responses[userInput]}`);
      
      if (userInput === 'exit' || userInput === 'quit') {
        rl.close();
      }
    } else {
      console.log('Chatbot: I\'m not sure how to respond to that.');
    }
    
    chat();
  });
}

console.log('Chatbot: Hello! Ask me anything or type "exit" to quit.');
chat();
