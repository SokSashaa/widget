const rootElementWidget = (classForm) => {
    return `
    <h1>Where does it come from? Why do we use it?</h1>
    <form class="${classForm}">
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking
            at its layout</p>
        <div class="inputWithIcon"><input type="text" placeholder="Depart date" id="forDepDate">
            <button type="button" id="depDate"></button>
        </div>
        <div class="inputWithIcon"><input type="text" placeholder="Return date" id="forRetDate">
            <button type="button" id="retDate"></button>
        </div>
        <button class="formButton">Search</button>
    </form>`
}

const checkSize = (size) => {
    return size > 299 && size < 1025;
};
const switchClassWidget = (size) => {
    if (size > 299 && size < 701) return 'M700'
    else return 'M900'
}

window.onload = () => {
    const root = document.querySelector('#rootWidget');

    const elWidget = document.createElement('div');
    elWidget.id = 'mainWidget';
    let classForm;

    if (root.hasAttribute('data-width') && checkSize(root.getAttribute('data-width'))) {
        const gAttribute = root.getAttribute('data-width');
        elWidget.style.width = gAttribute + 'px';
        classForm = switchClassWidget(gAttribute);
    } else {
        elWidget.style.width = '1024px';
        classForm = 'formWidget'
    }

    elWidget.innerHTML = rootElementWidget(classForm);


    root.insertAdjacentElement('beforeend', elWidget);

    const depDateBut = new Datepicker('#depDate', {
        toValue: (date) => {
            const input = document.querySelector('#forDepDate');
            input.value = date
        }
    });

    const retDateBut = new Datepicker('#retDate', {
        toValue: (date) => {
            const input = document.querySelector('#forRetDate');
            input.value = date
        }
    });
};






