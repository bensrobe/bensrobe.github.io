function responsiveNav() {
    var x = document.getElementById("navjs");
    if (x.className === "navi") {
        x.className += " responsive";
    } else {
        x.className = "navi";
    }
}