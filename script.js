const boot = document.getElementById("bootScreen");
const fill = document.getElementById("loadingFill");
const statusText = document.getElementById("bootStatus");const terminal = document.getElementById("terminalText");
const birthdayCard = document.getElementById("birthdayCard");
const replay = document.getElementById("replay");
const terminalBox = document.querySelector(".terminal");

const lines = [
"Booting BirthdayOS v19.0...",
"",
"Loading system files...",
"███████░░░ 70%",
"",
"Connecting to Birthday Server...",
"✔ Connected",
"",
"Detecting User...",
"✔ Chirag Found",
"",
"Checking Age...",
"✔ 19 Years",
"",
"Scanning Happiness...",
"██████████ 100%",
"",
"Searching for Cake...",
"🎂 Cake Found",
"",
"Searching for Presents...",
"🎁 Gifts Loaded",
"",
"Checking Bugs...",
"✔ No Bugs Found",
"",
"Checking Bank Balance...",
"❌ Still Broke 😂",
"",
"Looking for Girlfriend...",
"❌ Error 404 😂",
"",
"Receiving Secret Message...",
"",
"💙 From: Bhumika",
"",
"Compiling Birthday Wishes...",
"██████████ 100%",
"",
"Launching birthday.exe..."
];

function sleep(ms){
    return new Promise(resolve=>setTimeout(resolve,ms));
}

async function typeAnimation(){

    terminal.textContent="";

    for(const line of lines){

        for(const letter of line){

            terminal.textContent+=letter;

            await sleep(30);

        }

        terminal.textContent+="\n";

        await sleep(200);

    }

    await sleep(1000);

    terminalBox.style.display="none";

    birthdayCard.style.display="block";

    celebrate();

}

function celebrate(){

    const duration=5000;

    const end=Date.now()+duration;

    (function frame(){

        confetti({
            particleCount:4,
            angle:60,
            spread:70,
            origin:{x:0}
        });

        confetti({
            particleCount:4,
            angle:120,
            spread:70,
            origin:{x:1}
        });

        if(Date.now()<end){

            requestAnimationFrame(frame);

        }

    })();

}
async function bootAnimation(){

const messages=[

"Initializing Kernel...",
"Loading System...",
"Connecting Birthday Server...",
"Decrypting Memories...",
"Access Granted"

];

for(let i=0;i<messages.length;i++){

statusText.textContent=messages[i];

fill.style.width=((i+1)*20)+"%";

await sleep(700);

}

boot.style.opacity="0";

await sleep(900);

boot.style.display="none";

typeAnimation();

}
window.onload=()=>{

    setTimeout(typeAnimation,1000);

}

replay.onclick=()=>{

    location.reload();

}
