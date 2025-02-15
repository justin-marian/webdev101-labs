/**
 * TODO - Add an alert to be displayed
 *        when the page is _loaded_
 * 
 * > Hint - EventListener()
 */
 window.addEventListener('load', (event) => {
    alert("LOADING PAGE");
 });

/**
 * TODO - Replace the text of the <h1 /> header
 * 
 * > Hint - use the _id_ associated with it
 */
 var H1 = document.getElementById('header_1');
 H1.textContent = 'NEW TEXT HEADER';


/**
 * TODO - Display a message when the button with the id = "btn"
 *        is clicked
 *  - you can either display it as an alert, or as a text in the page
 */
 const BTN = document.getElementById('btn');
 BTN.addEventListener('click', function handleClick() {
    alert ("BUTTON with id='btn' was pushed");
 });

/**
 * Don't change
 */

let curr = ``;
let ids = [];

for (let i = 0; i < 10; i++) {
    let aux = "d_" + i;
    ids.push(aux);

    curr += `<div class="ex2" id = ${ids[i]}> </div>`;
}

// use console.log() to check the content of ids
console.log(ids);

document.getElementById('res').innerHTML = curr;

for (let i = 0; i < 10; i++) {
    randColor = Math.floor(Math.random() * 16777215).toString(16);
    document.getElementById(ids[i]).style.backgroundColor = "#" + randColor;
}

/**
 * TODO - For each element having the id "d_<even_number>"
 *        remove the "ex2" class and replace it with "ex" class
 * 
 *      - Also, for each of these elements, add some text
 * 
 * > Hint - classList()
 */
 
 for (let i = 0; i < 10; i++) 
    if ( document.getElementById(ids[i]).classList.contains('ex2') ) {
        document.getElementById(ids[i]).classList.remove('ex2');
        document.getElementById(ids[i]).classList.toggle('ex');
    }

/**
 * TODO - For each element having the class "ex2"
 *        add a border
 * 
 * > Hint - getElementsByClassName()
 */
let elems = document.getElementsByClassName("ex2");

 for ( let i = 0; i < elems.length; i++ ) 
    if ( elems[i].classList.contains('ex2') )
        elems[i].style.border = "thick solid #0000FF";
