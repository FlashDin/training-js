"use strict";
import {addition, subtraction} from './calculator';

let a = null;
let b = null;
let hasil = null;
document.onreadystatechange = () => {
    if (document.readyState === "complete") {
        a = document.getElementsByName("a");
        b = document.getElementsByName("b");
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
            case "addition":
                additional();
                break;
            case "subtraction":
                subtractional();
                break;
            case "multiplication":
                multiplicational();
                break;
            case "exponen":
                exponenal();
                break;
            case "division":
                divisional();
                break;
            case "modulus":
                modulusal();
                break;
            case "percent":
                percental();
                break;
            case "lastPriceOfDiscount":
                lastPriceOfDiscountal();
                break;
            case "isPrime":
                isPrimeal();
                break;
            case "factorial":
                factorialal();
                break;
            default:
                additional();
                break;
        }
    }
}

const additional = () => {
    hasil.innerText = addition(parseInt(a[0].value), parseInt(b[0].value));
}
const subtractional = () => {
    hasil.innerText = subtraction(parseInt(a[0].value), parseInt(b[0].value));
}
const multiplicational = () => {

}
const exponenal = () => {

}
const divisional = () => {

}
const modulusal = () => {

}
const percental = () => {

}
const lastPriceOfDiscountal = () => {

}
const isPrimeal = () => {

}
const factorialal = () => {

}