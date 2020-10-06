const MENU_SERVER_URL = "https://restaurant-menu-v1.firebaseio.com/.json";
const MENU_ITEM_SERVER_URL = "https://restaurant-menu-v1.firebaseio.com/menu/";

const menu = document.querySelector(".menu-table");

window.onload = showMenu;

function showMenu() {
    fetch(MENU_SERVER_URL)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            for (const key of Object.keys(data.menu)) {
                let menus = data.menu[key];
                // console.log(menus);
                menu.innerHTML += `
                                    <tr>
                                        <td id="preparat">${menus.nume} <img src="${menus.imagine}"></td>
                                        <td>${menus.ingrediente}</td>
                                        <td><button class="prep-details">Details</button></td>
                                    </tr>
                                    `
            }



        })

}