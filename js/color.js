const picker = document.getElementsByClassName('picker')[0];
const colorHex = document.getElementsByClassName('output')[0];
const header = document.getElementsByClassName('header')[0];
const textPicker = document.getElementsByClassName('text__cta')[0];
const copyBtn = document.getElementsByClassName('btn')[0];
const body = document.querySelector('body');

picker.addEventListener('input', ()=> {
    const colorValue = picker.value;

    colorHex.innerHTML = colorValue;
    body.style.background = colorValue;
    textPicker.style.color = colorValue;

    if(colorValue < "#A8A8A8") {
        header.classList.add('header--contrast');
        picker.classList.remove('picker--contrast');
        picker.parentElement.parentElement.classList.remove('main--contrast');
    }else {
        header.classList.remove('header--contrast');
        picker.classList.add('picker--contrast');
        picker.parentElement.parentElement.classList.add('main--contrast');
    }
});

copyBtn.addEventListener('click', ()=> {
    navigator.clipboard.writeText(picker.value);

    copyBtn.innerHTML = "✔ Done";
    copyBtn.classList.add('btn--done');
    
    let delay= setTimeout(()=> {
        copyBtn.innerHTML = "Copy this";
        copyBtn.classList.remove('btn--done');
    }, 1000);

});