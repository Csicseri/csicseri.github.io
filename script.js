var robotkepek = [
    "humanoid-robot.jpg",
    "honda.jpg",
    "cimon.jpg",
    "sophia.jpg",
    "robotallatok.jpg",
    "robot.jpg",
    "tancol.jpg"
];
var kepIndex = 0;
var fo_kep = document.getElementById("fo-kep");

function indexBeallitasa(index) {
    kepIndex = index;
    kepBeallitasa();
}

function kovetkezo() {
    if (kepIndex < 6) {
        kepIndex++;
    } else {
        kepIndex = 0;
    }

kepBeallitasa();
}

function elozo() {
    if (kepIndex > 0) {
        kepIndex--;
    } else { 
        kepIndex = 6;
    }

kepBeallitasa();

}
function kepBeallitasa() {
    fo_kep.setAttribute("src", robotkepek[kepIndex]);
}
