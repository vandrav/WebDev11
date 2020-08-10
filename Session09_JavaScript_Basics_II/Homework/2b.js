function max(list) {
    var max = 0;
    for (var i = 0; i < list.length; i++) {
        if (list[i] > max) {
            max = list[i];
        }
    }
    console.log(max);
}
console.log('\n 2b');
var list = [2, 3, 5, 7, 5, 3];
max(list);