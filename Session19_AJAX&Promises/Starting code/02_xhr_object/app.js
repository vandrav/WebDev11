// xhr request - part of the browser
// the server will respons as json file or xml file or plane text
// we parse and use that data in our application
// that magic happens without any refresh, the ajax engine is responsile for this
// we can send receive request from something on our local machine or from a public api(google maps, github api, weather apis)
// some apis requires authentication
// xhr - all browser have this api

let btn = document.getElementById('btn');
// console.log(btn);
btn.addEventListener('click', () => {
    //create and xhr object
    const xhr = new XMLHttpRequest();

    // open 
    // method, resource, true for async
    xhr.open('GET','data.txt', true);
    xhr.onload = ()=>{
        // xhr property
        if(xhr.status === 200){
            console.log(xhr.responseText);
        }
    }

    xhr.send();

    // HTTP Statuses
    // 200: "OK"
    // 403: "Forbiden"
    // 404: "Not found"
});




