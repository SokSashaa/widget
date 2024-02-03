import {rootW} from "./widget/exp.js";

window.onload = () => {
    const root = document.querySelector('#rootWidget');
    const rootWidth = root.getAttribute('data-width');
    const frame = document.createElement('iframe');
    frame.setAttribute('width', rootWidth);
    frame.setAttribute('height','200px');
    frame.setAttribute('src', './widget/widget.html');
    root.insertAdjacentElement('beforeend', frame);

    //console.log(rootW);
};


