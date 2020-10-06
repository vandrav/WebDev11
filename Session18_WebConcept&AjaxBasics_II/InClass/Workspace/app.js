const numberOfUsers = document.getElementById('usernumbers');



let loadUsers = (e) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.github.com/users ', true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            console.log(xhr.responseText);
            const users = JSON.parse(xhr.responseText);
            console.log(users);

            let output = '';


            for (let i = 0; i < numberOfUsers.value; i++) {
                output += `  
                    <div>   
                        <h2> Name: ${users[i].number} </h2>
                        <img src="${users[i].avatar_url}"> 
                    </div>
                `;
            }

            document.getElementById('users').innerHTML = output;
        }
    }
    xhr.send();
}



let getUsersBtn = document.getElementById('get-users');
getUsersBtn.addEventListener('click', loadUsers);