"use strict";
import {toUpper} from './stringFunction';

let a = null;
let hasil = null;
document.onreadystatechange = () => {
    if (document.readyState === "complete") {
        a = document.getElementsByName("a");
        hasil = document.getElementById("hasil");
        form();
    }
}

const form = () =>{
    const formNames = document.getElementsByName("calculatorForm");
    formNames[0].onsubmit = (e) => {
        e.preventDefault();
        console.log(e.submitter.id);
        switch(e.submitter.id) {
            case "toUpper":
                toUpperal();
                break;
            case "toLower":
                toLoweral();
                break;
            case "toCamel":
                toCamelal();
                break;
            case "toPascal":
                toPascalal();
                break;
            case "toSnake":
                toSnakeal();
                break;
            case "toKebab":
                toKebabal();
                break;
            case "toHuman":
                toHumanal();
                break;
            case "toTitle":
                toTitleal();
                break;
            case "isLetter":
                isLetteral();
                break;
            default:
                toUpperal();
                break;
        }
    }
}

const toUpperal = () => {
    hasil.innerText = toUpper(a[0].value);
}

const toLoweral = () => {
}

const toCamelal = () => {
}

const toPascalal = () => {
}

const toSnakeal = () => {
}

const toKebabal = () => {
}

const toHumanal = () => {
}

const toTitleal = () => {
}

const isLetteral = () => {
}