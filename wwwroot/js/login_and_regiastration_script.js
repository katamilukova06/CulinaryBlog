document.addEventListener('DOMContentLoaded', function () {
    function hiddenOpen_Closelick() {
        let x = document.querySelector(".container-login-registration");
        if (x.style.display == "none") {
            x.style.display == "grid";
        } else {
            x.style.display == "none";
        }
    }
    document.getElementById("click-to-hide").addEventListener("click", hiddenOpen_Closelick);
    document.querySelector(".overlay").addEventListener("click", hiddenOpen_Closelick);
});