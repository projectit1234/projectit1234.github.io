alert("Welcome"); 
function myFunction() {
  // document.getElementById("myUL").style.display="block";
  // // document.getElementById("myUL").style.marginTop="320px";
  // document.getElementById("pizza").style.display="block";
  // document.getElementById("mojito").style.display="block";
  // document.getElementById("sushi").style.display="block";
  // document.getElementById("fried-chiecken").style.display="block";
  // document.getElementById("lasagna").style.display="block";
  // document.getElementById("tacos").style.display="block";
  // document.getElementById("guacamole").style.display="block";
  // document.getElementById("basbousa").style.display="block";
  // document.getElementById("burger").style.display="block";
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName("li");
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

function goLog() {
  if (confirm("Are You Sure? ")) {
    window.location.href = "login.html";
  }
}
function goReg() {
  if (confirm("Are You Sure? ")) {
    window.location.href = "reg.html";
  }
}
function showli(){
  document.getElementById("list").style.display="block";
  document.getElementById("btnnull").style.display="none";
  document.getElementById("conli").style.border=' 3px black solid';
  document.getElementById("body").style.margin= "30px 0 0 0"
  document.getElementById("image").style.marginTop="320px";
}
function savedata(){
  const username = document.getElementById("UserName").value;
  const gender = document.getElementsByName("gender").value;
  const Email = document.getElementById("e-mail").value;
  const pass1 = document.getElementById("pass1").value;
  const pass2 = document.getElementById("pass2").value;
  window.localStorage.setItem('username', username);
  window.localStorage.setItem('gender', gender);
  window.localStorage.setItem('Email', Email);
  window.localStorage.setItem('password', pass1);
  console.log(localStorage.setItem('username', username));
}