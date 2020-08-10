function sum(list) {
    var sum = 0;
    for (var i = 0; i < list.length; i++) {
        sum += list[i];
    }
    console.log(sum);
}
console.log('\n 2a');
var list = [2, 3, 5, 7, 5, 3];
sum(list);