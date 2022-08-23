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
                    <button name="edit" value="${posts[i]["id"]}">Edit</button>
                    <button name="delete" value="${posts[i]["id"]}">Hapus</button>
                </td>
            </tr>`;
    }
    table.childNodes[3].innerHTML = tr;
    document.getElementsByName("delete").forEach(t => {
        t.onclick = (e) => {
            deleteData(e.target.value);
        };
    });
}

function editData(data) {
    console.log(data);
}

function deleteData(id) {
    let text;
    if (confirm("Apakah anda yakin akan hapus data?")) {
        text = "Terhapus";
    } else {
        text = "Batal";
    }
    console.log(id, text);
}