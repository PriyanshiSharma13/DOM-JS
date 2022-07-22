console.log("working");

// Write the code to access element which is having id as "text"

const elementOne = document.getElementById("text");
console.log(elementOne.innerHTML);
elementOne.style.color = "blue";

// Write the code to access element which is having tag as "h1"

const elementTwo = document.getElementsByTagName("h1");
console.log(elementTwo[0].innerText);
elementTwo[0].style.color = "green";

// Write the code to access element which is having class as "box"

const box = document.getElementsByClassName("box");
console.log(box[0].innerHTML);
box[0].style.backgroundColor = "Pink";

// Change the heading from ""Hello"" to ""Hello World"" using DOM functions"

console.log(elementTwo[0].innerText);
elementTwo[0].innerText = "Hello World";

// Create three cards on HTML page and arrange them using flex property in row or horizontal direction and also create button at the bottom named "Change Flex direction". When user clicks on this button, the cards arrangement should be changed to vertical direction.

function changeFlexDirection() {
    const cardsBox = document.getElementById("cardsBox");
    cardsBox.style.flexDirection = "column";
}

// What’s the difference between window vs document?
           
// -------------DOCUMENT----------------
// 1. It represents any HTML document or web page that is loaded in the browser.
// 2. It is loaded inside the window.
// 3. It is the object of window property.
// 4. All the tags, elements with attributes in HTML are part of the document.
// 5. We can access the document from a window using the window. document.
// 6. The document is part of BOM (browser object model) and dom (Document object model)
// 7. Properties of document objects such as title, body, cookies, etc can also be accessed by a window like this window. document.title
// 8. syntax: document.propertyname;
// 9. example: document.title :  will return the title of the document

//---------------WINDOW------------------
// 1. It represents a browser window or frame that displays the contents of the webpage.   
// 2. It is the very first object that is loaded in the browser.
// 3. It is the object of the browser.
// 4. Global objects, functions, and variables of JavaScript are members of the window object.
// 5. We can access the window from the window only. i.e. window.window
// 6. The window is part of BOM, not DOM.
// 7. Properties of the window object cannot be accessed by the document object.
// 8. syntax: window.propertyname;
// 9. example: window.innerHeight : will return the height of the content area of the browser

// Add one style attribute and give text color as red and id attribute and give the id value as ""heading"" in the above given h1 tag using DOM functions"

elementTwo[0].style.color = "red";
elementTwo[0].id = "heading";
console.log(elementTwo[0].outerHTML);

// Create an HTML page having content as Hello world and a button named Replace Text. When user will click on this button page content should be changed to "Welcome to Elevation academy"

function replaceText() {
    const helloText = document.getElementById("helloText");
    helloText.innerText = "Welcome to Elevation Academy";
}

// Write code to implement timer clock using JS -- display HH:MM:SS -- the time should keep updating every second

function showTime() {
    var date = new Date();
    var hr = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var amPm = "AM";
 
    if (hr > 12) {
        hr = hr - 12;
        amPm = "PM";
    }
    if (hr == 0) {
        hr = 12;
        amPm = "AM";
    }
 
    hr = hr < 10 ? "0" + hr : hr;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
 
    let currentTime = hr + ":" + min + ":" + sec + amPm;
 
    document.getElementById("timer").innerHTML = currentTime;
}
setInterval(showTime,1000);
showTime();


// Create a select drop down for selecting Year 20-21, 21-22 etc. Print the item text selected.

function getOption() {
    year = document.querySelector('#year');
    output = year.options[year.selectedIndex].value;
    document.querySelector('#output').textContent = output;
}


// "Create a form having name ,email, phone no. , birth year

// Add validations - phone no. should start with 91 , it should be 10 digits

// email should be domain prepbytes.com

// birth year should be > 95"