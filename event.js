function show(msg) {
    document.getElementById("output").innerHTML = msg;
}

// Mouse Events
function clickEvent() {
    show("Button Clicked");
}

function mouseOverEvent() {
    show("Mouse Over");
}

function mouseOutEvent() {
    show("Mouse Out");
}

function mouseDownEvent() {
    show("Mouse Down");
}

function mouseUpEvent() {
    show("Mouse Up");
}

function mouseMoveEvent() {
    show("Mouse Moving");
}

// Keyboard Events
function keyDownEvent(e) {
    show("Key Down: " + e.key);
}

function keyUpEvent(e) {
    show("Key Up: " + e.key);
}

// Focus / Blur
function focusEvent() {
    show("Input Focused");
}

function blurEvent() {
    show("Input Lost Focus");
}

// Change Event
function changeEvent() {
    show("Value Changed");
}

// Submit Event
function submitEvent(e) {
    e.preventDefault();
    show("Form Submitted");
}

// Page Load
function pageLoaded() {
    show("Page Loaded");
}