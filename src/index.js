"use strict";
import {addition} from './calculator';

document.onreadystatechange = () => {
    if (document.readyState === "complete") {
        form();
    }
}

const form = () =>{
    const form = document.getElementsByName("calculatorForm");
    form[0].onsubmit = (e) => {
        e.preventDefault();
        additional();
        subtractional();
        multiplicational();
        exponenal();
        divisional();
        modulusal();
        percental();
        lastPriceOfDiscountal();
        isPrimeal();
        factorialal();
    }
}

const additional = () => {
    let a = document.getElementsByName("a");
    let b = document.getElementsByName("b");
    let hasil = document.getElementById("hasil");
    hasil.innerText = addition(parseInt(a[0].value), parseInt(b[0].value));
}
const subtractional = () => {

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