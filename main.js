// Creates an 'x' at the end of list elements
var myNodelist = document.getElementsByTagName("LI");  // Selects <li> tags
var i;
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");  // Creates a <span> element
    var txt = document.createTextNode("\u00D7")  // Creates the 'x' button
    span.className = "close";  // Gives the <span> element a class name 'close'
    span.appendChild(txt);  // Attaches the 'x' to the <span> element
    myNodelist[i].appendChild(span);  // Attaches <span> element to a <li> element
}

// Makes the close button ('x') hide the current list item
var close = document.getElementsByClassName("close");  // Selects elements with the 'close' class
var i;
for (i = 0; i < close.length; i++) {  // Selects ALL elements with the 'close' class
    close[i].onclick = function() {  // Creates a function that occurs when clicked
        var div = this.parentElement;  // Selects the parent element
        div.style.display = "none";  // Changes the display CSS code to 'none'
    }
}

// Adds a checkmark symbol when a list item is clicked
var list = document.querySelector('ul'); // Selects the first <ul> element
list.addEventListener('click', function(ev) {  // Creates an 'onclick' function
    if (ev.target.tagName === 'LI') {  // If it is a <li> element, select it
        ev.target.classList.toggle('checked');  // Adds or removes the class 'checked' to the selected element
    }
}, false);

// Create a new list item when the "Add" button is clicked
function newElement() {
    var li = document.createElement("li");  // Creates a new <li> element
    var inputValue = document.getElementById("myInput").value;  // Takes the text in input box
    var t = document.createTextNode(inputValue);  // Assigns text in value to the variable 't'
    li.appendChild(t);  // Attaches text in variable 't' to the <li> element
    if (inputValue === "") {  // Checks to see if input is blank
        alert("You must write something");
    } else {
        document.getElementById("myUL").appendChild(li);  // Attaches new <li> to <ul> with id 'myUL'
    }
    document.getElementById("myInput").value = ""; // Empties text input box after adding

    var span = document.createElement("SPAN");  // Creates a <span> element
    var txt = document.createTextNode("\u00D7")  // Creates the 'x' button
    span.className = "close";  // Gives the <span> element a class name 'close'
    span.appendChild(txt);  // Attaches the 'x' to the <span> element
    li.appendChild(span);  // Attaches <span> to new <li> element

    for (i = 0; i < close.length; i++) {  // Selects ALL elements with the 'close' class
    close[i].onclick = function() {  // Creates a function that occurs when clicked
        var div = this.parentElement;  // Selects the parent element
        div.style.display = "none";  // Changes the display CSS code to 'none'
        }
    }
}