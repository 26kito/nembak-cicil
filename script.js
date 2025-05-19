$(window).on("load", function () {
    $(".preload").fadeOut("slow");
});
let audio = new Audio(musik);
audio.autoplay = true;
audio.loop = true;

if (window.location.hash) {
    window.location.replace(window.location.origin + window.location.pathname);
}

document.querySelector(".bg").style = 'background-image: url("' + background + '")';

let opening = document.querySelector(".opening");

function ilang() {
    audio.play();
    opening.style = "transition: 1.5s ease-out all; opacity: 0; transform: scale(100) translateY(-20px); filter: brightness(0);";
    setTimeout(function () {
        opening.style.display = "none";
    }, 1500);
}

// Lope
function buatLope() {
    let w = window.innerWidth;
    for (let i = 0; i < w / 40; i++) {
        const para = document.createElement("span");
        const element = document.querySelector(".lopeBg");
        element.appendChild(para);
    }
}
function makan() {
    let titik = document.querySelectorAll("span");
    for (let i = 0; i < titik.length; i++) {
        titik[i].innerHTML = '<i class="love material-icons-sharp"> favorite </i>';
        titik[i].style = "animation-duration:" + 40 / (Math.random() * (20 - 10) + 10) + "s; animation-delay:" + (Math.random() * 3 + 0) + "s;";
    }
}

let btnPrev = document.querySelector(".back-slider-btn");
let btnNext = document.querySelector(".next-slider-btn");

// btnPrev.setAttribute("onclick", "prev()");
// btnNext.setAttribute("onclick", "next()");

btnPrev.addEventListener("click", prev);
btnNext.addEventListener("click", next);

let btnGamau = document.querySelector(".btn-gamau");
let btnMau = document.querySelector(".btn-mau");
let vGamau = btnGamau.textContent;
let vMau = btnMau.textContent;

// btnGamau.setAttribute("onclick", "gamau(this)");
// btnMau.setAttribute("onclick", "mau()");

btnGamau.addEventListener("click", gamau);
btnMau.addEventListener("click", mau);

let btnPesan = document.querySelector(".button").children[2].children[0];
// btnPesan.setAttribute("onclick", "modalPesan()");

btnPesan.addEventListener("click", modalPesan);

let ucapanz = document.querySelector(".ucapan");
let ucapan1 = document.querySelector("#slider");
let ucapan2 = document.querySelector("#slider-on-accept");

let ucapan = document.querySelector("#slider").children;

let btn = document.querySelector(".button");
let btn1 = document.querySelector(".button").children[0];
let btn2 = document.querySelector(".button").children[1];
let btn3 = document.querySelector(".button").children[2];

let jawaban = document.querySelector(".jawaban");

btn2.style.display = "none";
btn3.style.display = "none";

let now = 0; // slider position

for (let j = 0; j < ucapan.length; j++) {
    ucapan[j].setAttribute("id", j);
}

function disBtn() {
    if (now <= 0) {
        btnPrev.setAttribute("disabled", "");
        btnNext.removeAttribute("disabled");
    } else if (now + 1 >= ucapan.length) {
        btnNext.setAttribute("disabled", "");
        btnPrev.removeAttribute("disabled");

        changeBtn(btn1, btn2);
        changeStiker(stiker1, stiker2);
        buatLope();
        makan();

        for (let j = 0; j < ucapan.length; j++) {
            if (j != ucapan.length - 1) {
                ucapan[j].style = "transition: 0.3s ease-out; opacity: 0;";
            }
        }
    } else {
        btnPrev.removeAttribute("disabled");
        btnNext.removeAttribute("disabled");
    }
}

disBtn();
function next() {
    if (now + 1 != ucapan.length) {
        now++;
        window.location.href = "#" + now;
    }
    disBtn();
}
function prev() {
    if (now != 0) {
        now--;
        window.location.href = "#" + now;
    }
    disBtn();
}
ucapan2.style.display = "none";

function slider() {
    now++;
    if (now == ucapan.length) {
        now = 0;
    }
    disBtn();
    window.location.href = "#" + now;
    setTimeout(slider, 2000);
}

//   gamau
let pesan = "";
let xgamau = 1;
function gamau(event) {
    pesan += "ditolak, ";

    let x = 100;
    let y = -180;

    if (xgamau == 1) {
        x = 100;
        y = -180;
    } else if (xgamau == 2) {
        x = -20;
        y = -300;
    } else if (xgamau == 3) {
        x = -40;
        y = 50;
    } else if (xgamau == 4) {
        x = 150;
        y = 70;
    } else if (xgamau == 5) {
        x = -40;
        y = -100;
    } else if (xgamau == 6) {
        x = 120;
        y = -330;
    } else if (xgamau == 7) {
        x = 160;
        y = -210;
    } else if (xgamau == 8) {
        x = -20;
        y = -50;
        xgamau = 0;
    }

    xgamau++;

    event.target.style = "transform: translateY(" + y + "px) translateX(" + x + "px)";
}

// Mau
function mau() {
    btn2.children[0].style = "transform: translateY(0px) translateX(0px)";
    pesan += "diterima";
    jawaban.setAttribute("value", pesan);
    changeUcapan(ucapan1, ucapan2);
    changeBtn(btn2, btn3);
    changeStiker(stiker2, stiker3);
}

// btn ilang muncul
function changeBtn(b1, b2) {
    btn.style = "transition: .3s ease; opacity: 0; scale: 0; transform: translateY(20px);";
    setTimeout(function () {
        b1.style = "display: none";
        b2.style = "display: flex";
        setTimeout(function () {
            btn.style = "transition: .5s ease; opacity: 1; scale: 1; transform: translateY(0px);";
        }, 50);
    }, 500);
}

// =============
// STIKER

let stiker = document.querySelector(".stiker");
let stiker1 = document.querySelector(".stiker").children[0];
let stiker2 = document.querySelector(".stiker").children[1];
let stiker3 = document.querySelector(".stiker").children[2];

stiker1.src = gambarStiker1;
stiker2.src = gambarStiker2;
stiker3.src = gambarStiker3;

// stiker2.style = "display: none";
// stiker3.style = "display: none";

function changeStiker(s1, s2) {
    stiker.style = "transition: .3s ease; opacity: 0; scale: 0.3; transform: translateY(-100px)";
    setTimeout(function () {
        s1.style = "display: none";
        s2.style = "display: flex";
        setTimeout(function () {
            stiker.style = "transition: .5s ease;opacity: 1; scale: 1; transform: translateY(0px)";
        }, 50);
    }, 300);
}

// ======================
// PESAN
function modalPesan() {
    let modalPesann = document.querySelector(".container-pesan");
    let cardPesan = document.querySelector(".kirim-pesan");

    modalPesann.style = "display: flex;";

    setTimeout(function () {
        cardPesan.style = "opacity: 1; transform: translateY(0px);";
    }, 100);
}
// modalPesan();

// Change ucapan
function changeUcapan(u1, u2) {
    ucapanz.style = "transition: .3s ease; opacity: 0; scale: 0.3;";
    setTimeout(function () {
        u1.style = "display: none";
        u2.style = "display: flex";
        setTimeout(function () {
            ucapanz.style = "transition: .5s ease;opacity: 1; scale: 1;";
        }, 50);
    }, 300);
    // alert(123123);
}

// ========
document.querySelector("form").setAttribute("action", "index.php" + "?link=" + window.location.origin + window.location.pathname);