var numbers = [22, 44, 444, 12, -15, 55];
numbers[2] = 55;
numbers[3] = 'my string';
numbers[5] = true;

//add to the end
numbers.push(230);
numbers.push(230);
//remove from the end
numbers.pop();
//add to head
numbers.unshift(122);
//remove from head
numbers.shift();
numbers.shift();

console.log(numbers.length);
console.log(numbers[numbers.length - 1]);

//output
console.log(numbers);