"use strict";

document.onreadystatechange = () => {
    if (document.readyState === "complete") {
        debugNode();
    }
}

const debugNode = () => {
    const btn = document.getElementById("btnDebug");
    btn.onclick = () => {
        btn.parentNode.childNodes[1].style.backgroundColor = "red";
        console.log("parent of button", btn.parentNode.childNodes);
        console.log("children of button", btn.childNodes);
    }
}