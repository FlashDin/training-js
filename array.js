// tambah awal unshift()
// tambah akhir push()
// tambah di index splice()
// edit di index arrr[index]
// edit dengan index splice()
// hapus awal shift()
// hapus akhir pop()
// hapus dengan range slice(), splice()
// hapus dengan index splice()
let arr1 = [];

// array function
function addOnEnd(arr) {
    return arr.push("Kiwi");
}
// array function

// array logic
function addOnEndWithLogic(arr, value) {
    return arr[arr.length - 1] = value;
}
// array logic

// OOP: pembagian perobject / pembungkus object
// class
// method / function
class Array {

    arr = [
        "Anggur Merah",
        "Melon",
        "Semangka Kuning"
    ];

    addFirst() {
        return this.arr;
    }

    addLast = () => {
        return arr1;
    }

}