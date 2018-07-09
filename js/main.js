//Nav bar function
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
};
// prevent reload
$("#prospects_form").submit(function(e) {
    e.preventDefault();
});
