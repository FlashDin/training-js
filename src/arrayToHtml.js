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

renderTableRow();

function renderTableRow() {
    const table = tableDiv.childNodes[3];
    let tr = '';
    // bisa pakai ini -> for (const post of posts)
    for (let i = 0; i < posts.length; i++) {
        tr += `<tr>
                <td>${posts[i]["id"]}</td>
                <td>${posts[i]["title"]}</td>
                <td>${posts[i]["body"]}</td>
                <td>
                    <button name="edit">Edit</button>
                    <button name="delete">Hapus</button>
                </td>
            </tr>`;
    }
    table.childNodes[3].innerHTML = tr;
}