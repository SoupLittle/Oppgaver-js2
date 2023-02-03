//Oppgave 1

for (var i = 0; i <= 50; i +=1) {
    console.log(i);
}

//Oppgave 2

for (var i = 0; i <= 50; i +=2) {
    console.log(i);
}


//Oppgave 3

for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(i);
    }
  }
  

//Oppgave 4

for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      console.log(i);
    }
  }

//Oppgave 5

var userInput = prompt("Please enter a text to enlarge: ");
let headings = ["h1", "h2", "h3", "h4", "h5", "h6"];

 headings.forEach(function(heading, index) {
 document.write(`<${heading}>${userInput}</${heading}>`);
});
