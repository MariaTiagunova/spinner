const characters = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   '];

const spinner = function(characters) {
  for (let i = 0; i < characters.length; i++) {
    setTimeout(() => {
      process.stdout.write(characters[i]);
    }, i * 200);
  }
  setTimeout(() => {
    process.stdout.write('\n');
  }, characters.length * 200);
};

spinner(characters);