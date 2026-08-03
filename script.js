const terminal = document.getElementById("typing");
const startBtn = document.getElementById("startBtn");
const surprise = document.getElementById("surprise");

const bootLines = [
"> Initializing BirthdayOS v19.0...",
"",
"> Checking Internet Connection...",
"✔ Connected",
"",
"> Connecting to Birthday Server...",
"✔ Success",
"",
"> Detecting User...",
"✔ Chirag Found",
"",
"> Verifying Age...",
"✔ 19 Years",
"",
"> Scanning for Bugs...",
"✔ 0 Bugs Found",
"",
"> Searching for Cake...",
"🎂 Cake Located",
"",
"> Downloading Happiness...",
"██████████████████ 100%",
"",
"> Installing Fun Package...",
"😂😂😂😂😂",
"",
"> Looking for Girlfriend...",
"❌ Error 404",
"",
"> Message Received...",
"From: Bhumika 💙",
"",
"> Compiling Birthday Wishes...",
"██████████████████ 100%",
"",
"> Launching birthday.exe..."
];

let lineIndex = 0;

async function typeLine(text){

    for(let i=0;i<text.length;i++){

        terminal.textContent += text.charAt(i);

        await new Promise(r=>setTimeout(r,30));

    }

    terminal.textContent += "\n";

}

async function runBoot(){

    startBtn.style.display="none";

    terminal.textContent="";

    for(const line of bootLines){

        await typeLine(line);

        await new Promise(r=>setTimeout(r,200));

    }

    await new Promise(r=>setTimeout(r,1000));

    document.querySelector(".terminal").style.display="none";
document.body.style.animation = "glitch 0.3s 3";
    surprise.style.display="block";

    startConfetti();

}

window.onload = () => {
    setTimeout(runBoot, 1000);
};
function startConfetti() {

    const duration = 6000;
    const end = Date.now() + duration;

    (function frame() {

        confetti({
            particleCount: 4,
            angle: 60,
            spread: 70,
            origin: { x: 0 }
        });

        confetti({
            particleCount: 4,
            angle: 120,
            spread: 70,
            origin: { x: 1 }
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }

    })();

}
