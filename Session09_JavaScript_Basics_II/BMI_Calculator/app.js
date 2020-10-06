function calculateBMI() {
    var weight = Number(document.getElementById('weight').value);
    var height = Number(document.getElementById('height').value);
    console.log(weight);
    console.log(height);
    var BMI = weight / (height * height);
    BMI = BMI.toFixed(3); //pune maxim 3 zecimale dupa virgula

    // console.log(BMI);
    // console.log(getBodyType(BMI));

    var output = document.getElementById('output');
    output.style.color = getColor(getBodyType(BMI)); //schimbam culoarea in functie de BMI => ca s facem doar cuvintele tipului de body cu culoare folosim span
    output.style.fontWeight = 'bold';
    output.innerHTML = 'Your BMI is ' + BMI + ' and you are ' + getBodyType(BMI) + '.';

}

function getBodyType(BMI) {
    var bodyType = '';
    if (BMI <= 18.5) {
        bodyType = 'underweight'
    } else if (BMI > 18.5 && BMI < 25) {
        bodyType = 'normal'
    } else if (BMI => 25 && BMI <= 30) {
        bodyType = 'overweight'
    } else if (BMI > 30) {
        bodyType = 'obese'
    }
    return bodyType;
}

function getColor(bodyType) {

    var color = 'black';

    switch (bodyType) {
        case 'underweight':
            color = 'blue';
            break;
        case 'normal':
            color = 'green';
            break;
        case 'overweight':
            color = 'orange';
            break;
        case 'obese':
            color = 'red';
            break;
    }
    return color;
}