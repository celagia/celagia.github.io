function newLink(text, href) {
  const link = ReactDOM.element('a', { href })
  link.textContent = text
  return link
}

document.addEventListener('DOMContentLoaded', function() {
  const inputLine = document.querySelector('.input-line');
  const outputLine = document.querySelector('.output-line');

  inputLine.focus(); // Automatically focus on the input field

  inputLine.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      const command = inputLine.value.trim(); // Get the entered command
      inputLine.value = ''; // Clear the input field

      executeCommand(command.toLowerCase()); // Call the executeCommand function with the entered command
    }
  });

  // Process the command and generate output
  function executeCommand(command) {
    
    let output = '';

    switch(command) {
      case 'help':
        output = 'Available commands: help, about, contact, cv, projects';
        terminalOutput(command, output);
        break;
      case 'about':
        output = 'Hi, my name is Jack. I am a data engineer looking to get into the world of web dev! I graduated from Falmouth University in Games Development, working with C# and Unity. I have been teaching myself web development and have experience using HTML, CSS, Javascript, PHP, and Laravel. I am keen and excited to learn and get hands on!';
        terminalOutput(command, output);
        break;
      case 'contact':
        output = "You can email me at jack.ryan.howarth@gmail.com or visit my LinkedIn ";
        terminalOutput(command, output);
        break;
      case 'cv':
        output = 'Feel free to download my CV as a pdf ';
        terminalOutput(command, output);
        break;
      case 'clear':
        terminalOutput(command, output);
        break;
      case 'projects':
        output = 'I have a couple of projects in the works. Check my github for any uploads! My current main project is an Instagram clone using Laravel!';
        terminalOutput(command, output);
        break;
      default:
        output = 'Command not found. Type "help" for a list of available commands.';
        terminalOutput(command, output);
        break;
    }

  // Display the output in the terminal
  function terminalOutput(command, output) {
    switch(command) {
      case 'contact':
        stdOutput(command, output);
        outputLine.innerHTML = outputLine.innerHTML + '<a href="https://www.linkedin.com/in/jackrhowarth/">here</a>';
        break;
      case 'cv': 
        stdOutput(command, output);
        outputLine.innerHTML = outputLine.innerHTML + '<a href="https://drive.google.com/file/d/1XT2VBaMQJDYbPehAFCB2NDr4hugqm1Pl/view?usp=sharing">here</a>';
        break;
      case 'clear':
        outputLine.innerHTML = "Welcome! Where would you like to go? Use 'help' for options.";
        break;
      default:
        stdOutput(command, output);
        break;
      }
    }

    // Scroll to the bottom of the terminal
    outputLine.scrollTop = outputLine.scrollHeight;
  }

  function stdOutput(command, output) {
    outputLine.innerHTML = outputLine.innerHTML + '<br>' + '> ' + command;
    outputLine.innerHTML = outputLine.innerHTML + '<br>' + output;
  }
});

