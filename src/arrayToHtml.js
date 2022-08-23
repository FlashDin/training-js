'use strict'
import {posts} from "./array.js";

const frAdd = document.getElementById("frAdd");
const formDiv = document.getElementById("formDiv");
const tableDiv = document.getElementById("tableDiv");
const btnShow = document.getElementById("btnShow");
const btnKembali = document.getElementById("btnKembali");
formDiv.style.display = 'none';
btnShow.onclick = () => {
    tableDiv.style.display = 'none';
    formDiv.style.display = 'block';
};
btnKembali.onclick = () => {
    formDiv.style.display = 'none';
    tableDiv.style.display = 'block';
};