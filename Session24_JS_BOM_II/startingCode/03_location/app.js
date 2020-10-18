let val;
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;

window.onload = () => {
    if (window.location.search !== '') {
        const id = window.location.search.split('=')[1];
        // console.log(id);
        const h1 = document.createElement('h1');
        h1.innerHTML = "Details info for product id=" + id;
        document.body.appendChild(h1);
    }
}


console.log(val);