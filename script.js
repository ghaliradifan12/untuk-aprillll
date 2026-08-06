/* ===========================
   MEOW UNTUK KAMU 🐱💗
=========================== */

const pages = document.querySelectorAll(".page");
const nextBtns = document.querySelectorAll(".nextBtn");

let currentPage = 0;

//==============================
// PINDAH HALAMAN
//==============================

function showPage(index){

    pages.forEach(page=>{
        page.classList.remove("active");
    });

    pages[index].classList.add("active");

}

nextBtns.forEach(btn=>{

    btn.addEventListener("click",()=>{

        if(currentPage < pages.length-1){

            currentPage++;

            showPage(currentPage);

        }

    });

});

//==============================
// RESTART
//==============================

const restart=document.getElementById("restart");

restart.addEventListener("click",()=>{

    currentPage=0;

    showPage(currentPage);

});

//==============================
// MUSIK
//==============================

const music=document.getElementById("bgMusic");

const muteBtn=document.getElementById("muteBtn");

window.addEventListener("click",()=>{

    music.play();

},{once:true});

muteBtn.addEventListener("click",()=>{

    music.muted=!music.muted;

    muteBtn.innerHTML=music.muted?"🔇":"🔊";

});

//==============================
// TYPING EFFECT
//==============================

const typing=document.getElementById("typing");

const text=
"hi bull... ❤️\n\ terimakasih ya sudah mau ngejalanin hubungan ini dengan aku sampai sejauh ini.\nsemoga kita selalu bersama dan saling menguatkan satu sama lain. ";

let i=0;

function typeText(){

    if(i<text.length){

        typing.innerHTML+=text.charAt(i);

        i++;

        setTimeout(typeText,45);

    }

}

typeText();

//==============================
// FLOATING HEARTS
//==============================

const hearts=document.getElementById("hearts");

function createHeart(){

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML="❤️";

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=(20+Math.random()*25)+"px";

    heart.style.animationDuration=(4+Math.random()*4)+"s";

    hearts.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },8000);

}

setInterval(createHeart,300);

//==============================
// TOMBOL KABUR
//==============================

const runBtn=document.getElementById("runBtn");

runBtn.addEventListener("mouseover",()=>{

    runBtn.style.position="absolute";

    runBtn.style.left=Math.random()*70+"%";

    runBtn.style.top=Math.random()*70+"%";

});

//==============================
// GAME TANGKAP HATI
//==============================

const gameArea=document.getElementById("gameArea");

const scoreText=document.getElementById("score");

let score=0;

function spawnHeart(){

    if(!gameArea) return;

    const heart=document.createElement("div");

    heart.className="gameHeart";

    heart.innerHTML="💖";

    heart.style.left=Math.random()*90+"%";

    heart.style.top=Math.random()*80+"%";

    gameArea.appendChild(heart);

    heart.onclick=function(){

        score++;

        scoreText.innerHTML=score;

        heart.remove();

        if(score==10){

            alert("Yeaayy ❤️ Kamu berhasil menang!");

        }

    }

    setTimeout(()=>{

        heart.remove();

    },2500);

}

setInterval(spawnHeart,900);

//==============================
// SLIDER FOTO
//==============================

window.onload = function () {

    const slider = document.getElementById("slider");

    const photos = [
        "assets/gav1.jpg",
        "assets/gav2.jpg",
        "assets/gav3.jpg",
        "assets/gav5.jpg"
    ];

    let slide = 0;

    setInterval(() => {

        slide++;

        if (slide >= photos.length) {
            slide = 0;
        }

        slider.src = photos[slide];

    }, 2500);

};

//==============================
// SURAT
//==============================

const envelope=document.getElementById("envelope");

const letter=document.getElementById("letter");

envelope.addEventListener("click",()=>{

    letter.style.display="block";

    envelope.style.display="none";

});

//==============================
// ANIMASI JUDUL
//==============================

const titles=document.querySelectorAll("h1");

setInterval(()=>{

    titles.forEach(title=>{

        title.style.transform="scale(1.05)";

        setTimeout(()=>{

            title.style.transform="scale(1)";

        },300);

    });

},2500);

//==============================
// BINTANG BERKELIP
//==============================

function sparkle(){

    const star=document.createElement("div");

    star.innerHTML="✨";

    star.style.position="fixed";

    star.style.left=Math.random()*100+"vw";

    star.style.top=Math.random()*100+"vh";

    star.style.fontSize="20px";

    star.style.pointerEvents="none";

    document.body.appendChild(star);

    setTimeout(()=>{

        star.remove();

    },1200);

}

setInterval(sparkle,700);