document.getElementById('get-text-btn').addEventListener('click', getText);
document.getElementById('get-json-btn').addEventListener('click', getJson);
document.getElementById('get-api-btn').addEventListener('click,', getApi);

function getText() {
    fetch('data.txt')
        .then(function(res) {
            return res.text();
        })
        .then(function(data) {
            document.getElementById('output').innerHTML = data;
        })
        .catch(function(err) {
            console.log(err);
        })
}

function getJson() {
    fetch('posts.json')
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {
            let output = ``;
            data.forEach(post => {
                output += `<p>${post.title}</p>
                `
            });
            document.getElementById('output').innerHTML = data;
        })
        .catch(function(err) {
            console.log(err);
        })
}


function getApi() {
    fetch('https://api.github.com/users')
        .then(function(response) {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Network response was not ok.');
        })
        .then(function(jsonResp) {
            console.log(jsonResp);
        })
        .catch(function(error) {
            console.log("There was a network error", error);
        });
}