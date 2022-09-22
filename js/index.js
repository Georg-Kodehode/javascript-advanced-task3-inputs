// instructions

// create an <input> field inside the div tag with the id input-fields
// you can either create it in the index.html file, or create it with javascript (in the latter case you can use .innerHTML or the document.createElement() )

// (DONE)task #1: see if you can capture the text of the input field live
//      and either display it in the console.log or display on the webpage.
// you can use either the addEventListener() or one of the *.on* methods (we've used .onclick, but this is an input so it has a different name)

// (DONE)task #2: either create a new <input> field with a different name or comment out code from task #1 to avoid errors and:
//      create a button, and set its text to "Add"
//      add an event listener, again either using .onclick or addEventListener
//      when the button is clicked, it should display the text from the input field in a new line on the webpage
//      for example, this could be a <p> tag or whatever you choose
//      important that this text doesn't replace the old text, but instead adds a new line of text

// (DONE)part II of task #2
// see if you can clear the text on the input field after you've clicked the "Add" button

// (DONE)task #3: so far its possible to add new text but no way to delete it,
//      would be nice if there was a "Delete" button created dynamically next to each <p> tag that gets created
//      add and eventListener to that delete button, so when its clicked that <p> tag together with its button dissapears

// Task 1:
// Creates the elements needed for Task 1, with attributes
const inputField = document.createElement("input");
inputField.type = "text";
inputField.name = "live-text";
inputField.id = "live-text";
const textArea = document.createElement("textarea");
textArea.name = "textarea";
textArea.id = "textarea";
textArea.rows = 40;
textArea.cols = 100;
const br = document.createElement("br");

// Appends the created elements to the "input-fields" element
document.getElementById("input-fields").appendChild(inputField);
document.getElementById("input-fields").appendChild(br);
document.getElementById("input-fields").appendChild(textArea);

// On keyup, the text content of the textarea is set equal to the value of the input field
inputField.addEventListener("keyup", () => {
  textArea.textContent = inputField.value;
});

// Tasks 2 and 3:
// Creates the button element needed for task 2
const btn = document.createElement("button");
btn.textContent = "Add";
// num variable used for wrapper id's
let num = 0;
// Appends the btn element to the "input-fields" element
document.getElementById("input-fields").appendChild(btn);

// Adds a click event listener to the button
btn.addEventListener("click", () => {
  // Creates a div to use as a wrapper for the paragraph and its delete button. Then gives the wrapper a unique id.
  const wrapper = document.createElement("div");
  wrapper.id = `wrapper${num}`;
  // Creates "p" and "button" (deleteBtn) elements each time the button is clicked
  const paragraph = document.createElement("p");
  const deleteBtn = document.createElement("button");
  paragraph.style.display = "inline";
  const br = document.createElement("br");

  // The paragraph is set equal to the value of the input field
  paragraph.textContent = inputField.value;
  // Adds text content to the delete button
  deleteBtn.textContent = "X";

  // Appends the paragraph element to the "input-fields" element
  document.getElementById("input-fields").appendChild(wrapper);
  document.getElementById(`wrapper${num}`).appendChild(paragraph);
  document.getElementById(`wrapper${num}`).appendChild(deleteBtn);
  document.getElementById(`wrapper${num}`).appendChild(br);
  // Adds a click event listener to the delete button
  deleteBtn.addEventListener("click", (event) => {
    event.target.parentElement.remove();
  });
  // Increments the num variable used for the wrapper id's
  num++;
  // Clears the input field
  inputField.value = "";
});
