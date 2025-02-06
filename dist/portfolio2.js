/************************  navbar  *************************/
const showbar = document.getElementById("showbar");
const sidebar = document.getElementById("sidebar");
const hidebar = document.getElementById("hidebar");

showbar.addEventListener("click", function() {
    sidebar.style.display = "block";
})

hidebar.addEventListener("click", function() {
    sidebar.style.display = "none";
})
