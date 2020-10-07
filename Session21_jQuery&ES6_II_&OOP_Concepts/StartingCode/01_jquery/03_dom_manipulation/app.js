// $("#myDiv").text("Hello"); nu putem sa punem un element, doar text
// $("#myDiv").html("<h4>Hello world!</h4>"); diferit de .txt
// $("#myDiv").text("<h4>Hello world!</h4>"); o sa ne afiseze si tagurile
// $("#list").append("<li>List Item 5</li>"); adaugam un li la finalul ul-ului
// $("#list").prepend("<li>List Item 0</li>"); adauga un element li la inceputul listei
// $("#list").empty(); sterge toate elementele din elementul selectat
// $("#list").detach(); sterge elementul selectat
$("#newItem").keyup(function(e) {
    // console.log(e.target.value);
    let code = e.which;
    // console.log(code); arata codul tastei care s-a apasat
    if (code == 13) {
        $("#list").append(`<li>${e.target.value}</li>`); //adaugam in lista ce e in input cand apasam enter
    }

})