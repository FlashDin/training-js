"use strict";

function addition(a, b) {
    return a + b;
}

function subtraction(a, b) {
    return a - b;
}

function multiplication(a, b) {
    return a * b;
}

function exponen(a, b) {
    return a ** b;
}

function division(a, b) {
    return a / b;
}

function modulus(a, b) {
    return a % b;
}

function percent(num) {
    return num / 100;
}

function discount(price, num) {
    return price * num / 100;
}

function lastPriceOfDiscount(price, num) {
    return price - (price * num / 100);
}

// prime = angka inputan hanya bisa dibagi dirinya sendiri
function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function isPrime1(num) {
    for (let i = num; i >= 2; i--) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// recursive function example
function isPrime2(realNum, num) {
    let decNum = num - 1;
    if (decNum === 2) {
        return true;
    }
    if (realNum % decNum === 0) {
        return false;
    }
    return isPrime2(realNum, decNum);
}

function factorial(num) {
    let factorial = num;
    for (let i = 1; i < num; i++) {
        factorial = factorial * i;
    }
    return factorial;
}

function factorial1(num) {
    let i = 1;
    let factorial = num;
    while (i < num) {
        factorial *= i;
        i++;
    }
    return factorial;
}


function sum(num) {
    for (let i = 1; i <= num; i++) {
        console.log("before", i);
        let res = i;
        res += i;
        console.log("after", i);
        // res = res + i;
        // 1 = 1 + 1;
        // 2 = 2 + 2;
        // 3 = 3 + 3;
        if (i === num) {
            return res;
        }
    }
}

// jumlahkan input dalam array
function sumArray(arrNum) {
    // output penjumlahan array
    // misal: [1, 2, 3, 4, 4] = 6
    // deklarasi variable sum di isi 0
    // lakukan perulangan sejumlah array
    // dalam perulangan lakukan penjumlahan pada array ke index dengan memasukkan ke variable sum
    // kembalikan nilai ke sum
    let sum = 0;
    for (let i = 0; i < arrNum.length; i++) {
        sum += arrNum[i];
        // sum = sum + arrNum[i];
    }
    return sum;
}

function person(name) {
    return name;
}

const person1 = (name) => {
    const person = {
        address: "yogyakarta"
    };
    return person;
};

const person2 = (name) => {
    return name;
};

export {
    addition,
    subtraction
}