
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
}

let oLastModif = new Date(document.lastModified);
document.getElementById("lastModified").innerHTML = oLastModif;
