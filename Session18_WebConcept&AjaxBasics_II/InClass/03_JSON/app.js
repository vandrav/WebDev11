// JSON - JS object notation

let loadUser = (e) =>{
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'user.json', true);

    xhr.onload = ()=>{
        console.log(xhr.status)
        if(xhr.status === 200){
            console.log(xhr.responseText);
            const user = JSON.parse(xhr.responseText);
            console.log(user);
            const output = `
                <ul>
                    <li>Name:${user.name}</li>
                    <li>Age:${user.age}</li>
                    <li>Email:${user.email}</li>
                </ul>
            `;
            document.getElementById('user').innerHTML = output;
        }
    }
    xhr.send();
}

let loadUsers = (e) =>{
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'users.json', true);
    xhr.onload = function(){
        if(xhr.status === 200){
            console.log(xhr.responseText);
            const users = JSON.parse(xhr.responseText);
            console.log(users);

            let output = '';
            
            users.forEach(user => {
                output += `
                <ul>
                    <li>Name:${user.name}</li>
                    <li>Age:${user.age}</li>
                    <li>Email:${user.email}</li>
                </ul>
            `;
            });
            document.getElementById('users').innerHTML = output;
        }
    }
    xhr.send();
}

let getUserBtn = document.getElementById('get-user');
getUserBtn.addEventListener('click', loadUser);

let getUsersBtn = document.getElementById('get-users');
getUsersBtn.addEventListener('click', loadUsers);

