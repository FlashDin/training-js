'use strict'
import {posts} from "./array.js";

const frAdd = document.getElementById("frAdd");
const titleName = document.getElementsByName("title")[0];
const bodyName = document.getElementsByName("body")[0];
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
    table.childNodes[3].innerHTML = tr;
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
    document.getElementsByName("edit").forEach(t => {
        t.onclick = (e) => {
            editData(e.target.value);
        };
    });
}

frAdd.onsubmit = (e) => {
    e.preventDefault();
    saveData(e);
}

function saveData(e) {
    if (e.submitter.value === "") {
        posts.push({
            id: "",
            title: titleName.value,
            body: bodyName.value,
        });
    } else {
        // posts.splice()
    }
    renderTableRow();
    btnKembali.click();
}

function editData(id) {
    let data = {};
    for (let i = 0; i < posts.length; i++) {
        if (posts[i].id.toString() === id) {
            data = posts[i];
        }
    }
    btnShow.click();
    titleName.value = data.title;
    bodyName.value = data.body;
}

function deleteData(id) {
    let text;
    if (confirm("Apakah anda yakin akan hapus data?")) {
        for (let i = 0; i < posts.length; i++) {
            if (posts[i].id.toString() === id) {
                posts.splice(i, 1);
            }
        }
        text = "Terhapus";
        renderTableRow();
    } else {
        text = "Batal";
    }
    alert(id + " " + text);
}