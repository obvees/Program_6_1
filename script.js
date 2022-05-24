(function () {
  const ex1 = document.getElementById('ex1_button')
  const ex2 = document.getElementById('ex1_content')
  
  ex1.addEventListener("click", function (){
    var data = "0, 1, 2, 3, 4, 5, 6, 7, 8, 9";


    ex2.innerHTML = data;
  })
})();