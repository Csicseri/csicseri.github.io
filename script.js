var robotkepek = [
    "robotok/humanoid-robot.jpg",
    "robotok/Honda.jpg",
    "robotok/cimon.jpg",
    "robotok/sophia.jpg",
    "robotok/robotallatok.jpg",
    "robotok/enarobot.jpg",
    "robotok/tancolorobotok.png"
];
var kepIndex = 0;
var fo_kep = document.getElementById("fo-kep");

function indexBeallítasa(index) {
    kepIndex = index;
    kepBeallítasa();
}

function kovetkezo() {
    if (kepIndex < 6) {
        kepIndex++;
    } else {
        kepIndex = 0;
    }

kepBeallítasa();
}

function elozo() {
    if (kepIndex > 0) {
        kepIndex--;
    } else { 
        kepIndex = 6;
    }

kepBeallítasa(fo-kep);

}
function kepBeallítasa() {
    fo_kep.setAttribute("src", robotkepek[kepIndex]);
}
