import {Array} from './array.js';

class ArrayOfObject {

    arr = null;

    constructor() {
        this.arr = new Array("Toyota");
        console.log(this.arr.getCarName());
    }
}

const aoo = new ArrayOfObject();

