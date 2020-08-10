function fibonacci(number) {
    var fibo = [0, 1];

    for (var i = 2; i < number; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }

    // take the paragraph
    var output = document.getElementById('p3');
    output.innerHTML = fibo;
}

fibonacci(50);