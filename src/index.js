"use strict";
import _ from 'lodash';

function component() {
    const el = document.createElement("h2");
    el.innerHTML = _.join(["hehe", "banget"]);
    return el;
}

document.body.appendChild(component());