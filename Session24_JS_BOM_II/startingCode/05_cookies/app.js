let storeBtn = document.getElementById('store-btn');
let getBtn = document.getElementById('get-btn');

storeBtn.addEventListener('click', () => {
    const name = 'Costel';
    document.cookie = `user=${name}`;
    const userID = 333;
    document.cookie = `userID=${userID}`;
    const userNickName = 'Costelus';
    document.cookie = `userNickName=${userNickName}`;
})


getBtn.addEventListener('click', () => {
    let cookies = document.cookie.split(';');
    cookies = cookies.map(cookie => cookie.trim());
    console.log(cookies);
})

let options = document.querySelectorAll('input[type=radio]');
options.forEach(option => option.addEventListener('change', () => {
    document.cookie = `lang=${option.value}`;
}));
// document.cookie = 'lang=RO';

window.onload = (() => {
    let cookies = document.cookie.split(';');
    cookies = cookies.map(cookie => cookie.trim());
    // console.log(cookies);
    cookies.forEach(coockie => {
        if (coockie.split('=')[0] == 'lang' && coockie.split('=')[1] == 'RO') {
            document.getElementById('ro').checked = true;
        } else if (coockie.split('=')[0] == 'lang' && coockie.split('=')[1] == 'EN') {
            document.getElementById('en').checked = true;
        }

    })

});

//salvam in coockie o informatie care sa puna preselectat una dintre optiuni