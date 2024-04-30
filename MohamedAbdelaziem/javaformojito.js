alert("welcome to the taste of nations")
function toggleTable() {
    var table = document.getElementById("myTable");
    var button = document.querySelector("button");
    if (table.style.display === "none") {
        table.style.display = "table"; 
        button.innerHTML = "HIDE CALORIES";
    } else {
        table.style.display = "none"; 
        button.innerHTML = "SHOW CALORIES";
    }
}