const depDateBut = new Datepicker('#depDate',{
    toValue: (date)=>{
        const input = document.querySelector('#forDepDate');
        input.value = date
    }
});

const retDateBut = new Datepicker('#retDate',{
    toValue: (date)=>{
        const input = document.querySelector('#forRetDate');
        input.value = date
    }
});



