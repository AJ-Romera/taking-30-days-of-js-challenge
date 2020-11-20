// 1. Generating the keyboard code code using even listener. The image below.

let body = document.querySelector('body');
let section = document.querySelector('section');
let keyName = document.querySelector('.key');
let keyCode = document.querySelector('.key-code');

keyName.innerHTML = '<h1>Press any keyboard key<h1>';
keyCode.innerHTML = '<h1>...<h1>';

// Event on keydown
body.addEventListener('keydown', function (e) {
    let keyMessage = `<h1>You pressed <span id="hola">${e.key}</span></h1>`;
    keyName.innerHTML = keyMessage;

    // e.keyCode is deprecated, so now I use e.code instead
    let keyCodeMessage = `<h1><span>${e.code}</span></h1>`;
    keyCode.innerHTML = keyCodeMessage;

    // span style
    let span1 = keyName.querySelector('span');
    let span2 = keyCode.querySelector('span');
    span1.style.color = 'blue';
    span2.style.color = 'blue';
});

// Styles
body.style.fontFamily = 'Arial, Helvetica, sans-serif';
body.style.width = '99%';
body.style.height = '95vh';

section.style.display = 'flex';
section.style.flexFlow = 'column wrap';
section.style.justifyContent = 'center';
section.style.alignItems = 'center';
section.style.width = '100%';
section.style.height = '100%';
section.style.textAlign = 'center';
section.style.textShadow = '1px 2px 2px gray';

keyName.style.width = '500px';
keyName.style.boxShadow = '3px 3px 6px 4px rgba(125,125,125,0.4)';
keyName.style.marginBottom = '40px';
keyName.style.fontSize = '23px';
keyName.style.borderRadius = '5px';

keyCode.style.width = '200px';
keyCode.style.boxShadow = '0px 0px 5px 2px rgba(125,125,125,0.4)';
keyCode.style.borderRadius = '10px';
