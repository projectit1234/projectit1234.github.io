
m = confirm("Are you sure continue?");
if (m === false){
    location.href = "index.html"
}
 

function showlin(){
    document.getElementById('b').style.display="block";
    document.getElementById('btnnull').style.display="none";
    document.getElementsByClassName('k').style.border='3px black solid'
  }



  
   
function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');
  
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }
  