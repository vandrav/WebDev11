var taskTitle = document.getElementById('task-title'); //cerem elementul h5 din html

taskTitle.style.background = 'black'; //pentru elementul selectat schimbam atributul style, pentru proprietatea background culoarea
taskTitle.style.color = 'white'; //am schimbat culoarea pentru text in alb
taskTitle.style.padding = '10px';

taskTitle.textContent = 'Todos'; //trebuie neaparat text
taskTitle.innerHTML = '<span style="background:blue">Todos</span>'; //stie sa puna cod html

console.log(taskTitle)

console.log(document.querySelector('#task-title'));

document.querySelector('li').style.background = 'red'; //ia doar primul li

document.querySelector('ul li').style.background = 'red'; //ia tot primul li

document.querySelector('ul li:nth-child(3)').style.background = 'green'; //selecteaza al3-lea li din ul

document.querySelector('ul li:nth-child(even)').style.background = 'green'; //il face pe al2-lea pt ca il ia doar pe primul