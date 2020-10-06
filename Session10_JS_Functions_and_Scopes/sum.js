function sum() {
    // 1 take inputs
    var a = Number(document.getElementById('texta').value);
    var b = Number(document.getElementById('textb').value);

    // check 2 inputs
    console.log(a);
    console.log(b);

    // 3 process the output
    var sum = a + b;

    // 4 add the output to pharagraph
    // take the paragraph
    var output = document.getElementById('p3');

    output.innerHTML = a + '+' + b + '=' + sum;
}