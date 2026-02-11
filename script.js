// =========================
// CONFIG YOU CAN CHANGE
// =========================

// Put your relationship start date here (YYYY-MM-DD)
const START_DATE = "2025-12-18"; 
// Change it later to your real date

// Letter text
const LETTER_TEXT = `
Happy Birthday, nishuuu 🥹❤️

I had never imagined that someday i would be that lucky so as to call you my gf😭
It’s crazy to think that we have known each other for over 3 years and we were just beside each other in school for such a long time, even though we didn’t have anything back then but i choose to believe that it was in some way meant to be.. from not even talking regularly back then to being each other’s everything today, i think it was destined and what we have today it just feels surreal..
I am so grateful because i get to wish you today not just as my best friend but also my gf 🥹🫶🏻
It just feelss like you are my better half ❤️
I still can’t believe that a person so perfect can exist 😭.. i mean we just connect on absolutely everything, i don’t even have to take much efforts to explain myself to u, nobody has ever understood me the way you have n u have embraced it so well mygod 🤌🏻.. you know me better than anyone else and you still chose to accept me (i am so lucky) 😭🤌🏻😂
So thank you for being the person i can talk to about anything, laugh with over nothing, and just be myself😭
I am truly and genuinely happy when I’m with you and nothing else can even get close to that… you make me the happiest boy in the world and i can’t even begin to thank you about it, which is why i have made a promise to myself that i would keep you happy n safe forever 🥺🫶🏻
On your birthday, i want to remind u just how special u are.. wherever u go u light up the place, n i am really glad and grateful for all the people who are lucky enough to have you in their lives (most of all is me 😭)
I am in love with everything about you.. no matter how small or big it is, when it comes to u.. you are everything to mee
I am mesmerised by your eyes 😫 and your smilee just makes my day instantly better 😭🫶🏻..and oh boy, im in love with ur hair 😭(im never gonna leave ur hair alone only now n especially i wanna touch them now 🤭)
I just feel like kissing u all day everyday whenever i see u, you are just myy tinyy cutieee pieee who i wanna hugg and cuddle all day 😭😘 whenever i see u, you look more and more cute and beautiful and i just fall for you a little more 🤌🏻✨
You are the sweetest, kindest, most caring and loving person i have ever met and i am so lucky to have you in my life.. you deserve the world and i promise to do everything to make you the happiest girl 🥹🫶🏻
The silly jokess, the late night talks, the cutee hugs n kisses are so so special.. i couldn’t have asked for anything more 😭

I hope this year brings you everything you’ve ever wished for and even more than you expect… I hope you grow closer to your dreams 🧿, smile more than you cry 🥹, and always feel proud of the person you are becoming🫂. I’ll be right here, cheering you on in every little thing you do 🥹🤌🏻. Always. 🫶🏻

No matter where life takes us, I hope you always feel safe, loved, and valued the way you deserve…I promise to stand by you on your best days and hold you even tighter on your worst days 💗…You’re never alone anymore, okay? I’m here. Always with you. 

Happy Birthday, beautiful…I’m really glad this life brought you to me 🤍

— Yug 💌
`;

// =========================
// MUSIC
// =========================
const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");

let musicPlaying = false;

musicBtn.addEventListener("click", async () => {
  try {
    if (!musicPlaying) {
      await bgMusic.play();
      musicPlaying = true;
      musicBtn.textContent = "🎶 Playing";
    } else {
      bgMusic.pause();
      musicPlaying = false;
      musicBtn.textContent = "🎵 Tap to Play";
    }
  } catch (e) {
    alert("Tap again to allow music 🎵");
  }
});

// =========================
// SCROLL BUTTONS
// =========================
document.getElementById("scrollToLetter").addEventListener("click", () => {
  document.getElementById("letter").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("scrollToGallery").addEventListener("click", () => {
  document.getElementById("gallery").scrollIntoView({ behavior: "smooth" });
});

// =========================
// TOGETHER COUNTER
// =========================
function updateCounter(){
  const start = new Date(START_DATE + "T00:00:00");
  const now = new Date();

  let diff = now - start;
  if (diff < 0) diff = 0;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("togetherCounter").textContent =
    `${days} days  •  ${hours} hours  •  ${minutes} minutes  •  ${seconds} seconds`;
}

setInterval(updateCounter, 1000);
updateCounter();

// =========================
// TYPEWRITER LETTER
// =========================
const typedText = document.getElementById("typedText");
const startTypingBtn = document.getElementById("startTyping");

let typingStarted = false;

function typeWriter(text, speed = 22){
  typedText.textContent = "";
  let i = 0;

  const timer = setInterval(() => {
    typedText.textContent += text[i];
    i++;
    if (i >= text.length) clearInterval(timer);
  }, speed);
}

startTypingBtn.addEventListener("click", async () => {
  if (typingStarted) return;
  typingStarted = true;

  // Start music when she clicks Start Reading
  try {
    await bgMusic.play();
    musicPlaying = true;
    musicBtn.textContent = "🎶 Playing";
  } catch (e) {
    // ignore if blocked
  }

  typeWriter(LETTER_TEXT, 18);
});

// =========================
// FLOATING HEARTS
// =========================
const heartsContainer = document.getElementById("hearts");

function createHeart(){
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.textContent = Math.random() > 0.5 ? "💖" : "💗";

  const size = Math.random() * 18 + 14;
  heart.style.fontSize = size + "px";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (Math.random() * 4 + 6) + "s";
  heart.style.opacity = (Math.random() * 0.5 + 0.4).toString();

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 10000);
}

setInterval(createHeart, 350);

// Heart CSS injection
const style = document.createElement("style");
style.innerHTML = `
.heart{
  position: absolute;
  bottom: -40px;
  animation: floatUp linear forwards;
  filter: drop-shadow(0 0 10px rgba(255,155,208,0.25));
}
@keyframes floatUp{
  from{ transform: translateY(0) scale(1); }
  to{ transform: translateY(-120vh) scale(1.35); }
}
`;
document.head.appendChild(style);

// =========================
// SURPRISE + CONFETTI
// =========================
const surpriseBtn = document.getElementById("surpriseBtn");
const surpriseText = document.getElementById("surpriseText");
const confettiCanvas = document.getElementById("confetti");
const ctx = confettiCanvas.getContext("2d");

function resizeCanvas(){
  confettiCanvas.width = confettiCanvas.offsetWidth;
  confettiCanvas.height = confettiCanvas.offsetHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

let confettiPieces = [];
let confettiRunning = false;

function startConfetti(){
  confettiRunning = true;
  confettiPieces = [];

  const count = 140;
  for(let i=0;i<count;i++){
    confettiPieces.push({
      x: Math.random() * confettiCanvas.width,
      y: Math.random() * confettiCanvas.height - confettiCanvas.height,
      r: Math.random() * 6 + 3,
      vx: (Math.random() - 0.5) * 2,
      vy: Math.random() * 3 + 2,
      rot: Math.random() * Math.PI,
      vr: (Math.random() - 0.5) * 0.2
    });
  }

  const start = Date.now();

  function draw(){
    if(!confettiRunning) return;

    ctx.clearRect(0,0,confettiCanvas.width, confettiCanvas.height);

    for(const p of confettiPieces){
      p.x += p.vx;
      p.y += p.vy;
      p.rot += p.vr;

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.fillRect(-p.r/2, -p.r/2, p.r, p.r);
      ctx.restore();
    }

    // stop after 5 seconds
    if(Date.now() - start > 5200){
      confettiRunning = false;
      ctx.clearRect(0,0,confettiCanvas.width, confettiCanvas.height);
      return;
    }

    requestAnimationFrame(draw);
  }

  draw();
}

surpriseBtn.addEventListener("click", () => {
  surpriseText.style.display = "block";
  startConfetti();
});
