console.log("Script started")

function changeColor() {
    console.log("click");

    let color = prompt("Enter a new color for the poem");
    if (color) {
        document.getElementById("poem").style.color = color;
    }
}

function changeTextSize() {
    console.log("click");

    let fontSize = prompt("Enter a new font size for the poem");
    if (fontSize) {
        document.getElementById("poem").style.fontSize = fontSize;
    }
}

function changepoem() {
    console.log("click");

    let newTitle = prompt("Enter a new title:");
    if (newTitle) {
        document.getElementById("title").innerHTML = newTitle;
    }

     let newPoem = prompt("Enter a new poem:");
     if (newPoem) {
        document.getElementById("poem").innerHTML = newPoem;
    }
}