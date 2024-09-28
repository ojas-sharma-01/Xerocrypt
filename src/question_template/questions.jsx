import shahed from './shahed.jpeg';
import iran from './iran.jpeg';
import xero_hiha from './xerohiha.jpg';
import xero_aud from './xerocrypt20.mp3';
import audio2 from './audio2.mp3';
import tr_sq_ci from './tr_sq_ci.png'
import xero_vid from './xero_vid.mp4';
import chess from './chess.mp4';

const questions = [
    {q_no:1, title: "Child's play",
        question:` 
        <div class="text-[20px] md:text-[30px]"><p class="my-8 md:my-8">Hello! Welcome aboard. Are you ready for the challenge? Many of you would beg to end this challenge and give their brains a break. However there will be a few who would be more resilient. Are you one of them? Take a second to decide if you are in. If it's a yes,when they ask—because they will ask—say “alohomora” and we will let you in.</p>\
        </div>\
        `},
    {q_no:2, title: "Konnichiwa",
        question:`
        <div class="w-[100%] flex justify-center"><div class="md:w-[60%] flex flex-col md:flex-row justify-evenly">
        <div style="display:flex; justify-content:center; margin: 15px 0 15px 0;"><img src=${shahed} alt="this img is necesarry" /></div>
        <div style="display:flex; justify-content:center; margin: 15px 0 15px 0;"><img src=${iran} alt="this img is necesarry" />
        </div>
        </div>
        </div>
        `},
        {
        q_no:3, title: 'Chess',
        question: `
        <div class="my-5 flex justify-center">
        <video controls>
        <source src=${chess}></source>
        </video>
        </div>`
        },
    {q_no:4, title: "Hahaha",
        question:`
        <div class="flex flex-col justify-evenly h-[400px]">
        <div class="flex justify-center"><img class="w-[320px]" src=${xero_hiha} alt="this img is necesarry" /></div>
        <div class="flex justify-center"><a class="text-green-400 hover:text-white" href="https://pastebin.com/RcsFma5s" target="_blank">https://pastebin.com/RcsFma5s</a></div>
        </div>
        `},
    {q_no:5, title: "Listen carefully",
        question:`
        <div class="flex justify-center my-10">
        <audio controls>
        <source src=${xero_aud} type="audio/mpeg"></source>
        Your browser does not support the audio element.
        </audio>
        </div>
        `},
    {q_no:6, title: "Binary",
        question:`
        <div class="flex flex-col">
        <p class="my-5">Decode the essence where numbers align, and there is a subtle sign. The first step is in the beginning—what do you see?</p>
        <a class="my-5 text-green-400 hover:text-white" href="https://docs.google.com/document/d/1m4EW9anggr72Z4W2sOdPqWdP1vVrPEZm5I4xJ_23Rkw/edit?usp=sharing" target="_blank">
        https://docs.google.com/document/d/1m4EW9anggr72Z4W2sOdPqWdP1vVrPEZm5I4xJ_23Rkw/edit?usp=sharing</a>
        </div>
        `},
    {q_no:7, title: "💥",
        question:`
        <div class="flex flex-col">
        <p class="my-5"> Solving a cipher is like defusing a bomb. A single mistake and the whole secret could blow wide open. </p>
        <a class="my-5 text-green-400 hover:text-white" target="_blank" href="https://imgur.com/a/lgtTHsg">https://imgur.com/a/lgtTHsg</a>
        </div>
        `},
    {q_no:8, title: "A pleasant sound",
        question:`
        <div class="flex flex-col">
        <p class="my-5">Within this enigmatic audio, a secret path is waiting to be discovered. Tune in closely, decipher the hidden clues, and reveal the route to your next adventure.</p>
        <p class="my-5">
        <div class="flex justify-center"><audio controls><source src=${audio2}></source></audio></div>
        </p>
        <div>
        `},
    {q_no:9, title: "The mysterious shapes",
        question:`
        <div class="flex flex-col">
        <p class="my-7"><a class="text-green-400 hover:text-white" href="https://xerosecret.vercel.app/" target="_blank">https://xerosecret.vercel.app/</a></p>
        <p class="my-5"><p>Dare to unravel the mystery that lies before you? </p>

        <p>A grid of cryptic symbols—lines, circles, triangles—awaits your gaze. These shapes whisper secrets, \
        guarding a message of profound mystery. Only the bold, the clever, and the tenacious can decipher the code \
        and unlock the truth buried within. Will you rise to the challenge and unveil the hidden message, or will \
        the mystery remain sealed in shadow?</p></p>
        <p class="my-10 flex justify-center">
        <img src=${tr_sq_ci} />
        </p>
        </div>
        `},
    {q_no:10, title: "Sonata",
        question:`
        <div class="my-5 flex justify-center">
        <video controls>
        <source src=${xero_vid}></source>
        </video>
        </div>
        `},
    {q_no:11, title: "Symphonic Secrets",
        question:`
        <div class="flex flex-col">
        <p class="my-5">Everything in this world is steeped in secrets; the music you hear hides its own mysteries, waiting to be uncovered. </p>
        <p class="my-5"><a class="text-green-400 hover:text-white" href="https://pastebin.com/Z1EsFAsc" target="_blank">
        https://pastebin.com/Z1EsFAsc</a></p>
        <p class="my-5"><a target="_blank" class="text-green-400 hover:text-white" download href="https://drive.google.com/file/d/1jCC3NkHqsoz2D2ZdeBL3WbQJ0E2liUYx/view?usp=sharing">
        PDF</a></p>
        </div>
        `},
        {q_no:12, title:'Knotorious',
            question: `
            <div class="my-5 flex flex-col justify-evenly">
            <p class="my-2">If the ordinary isn't enough, we can take a detour into the world of knots mathematics that ties it all together</p>
            <p class="my-2 text-green-400 hover:text-white"><a target="_blank" href="https://drive.google.com/file/d/1WKGzlBhatCMcvhupHiZt6rTtsfWUhtLe/view" download> PDF </a></p>
            </div>`
        },
    {q_no:13, title:'Pixels',
        question: `
        <div class="my-5 flex flex-col justify-evenly">
        <p class="my-2">Hello! Look at how far you've come. Your resilience and intelligence are truly appreciated. There are two identical prime numbers associated with the 1.jpeg image below. Multiply them and that will be your password for the PrivateBin link. </p>
        <p class="my-2 text-green-400 hover:text-white"><a target="_blank" href="https://privatebin.net/?8fa77e37673ee9e4#9Pm8MnCRJUPcRxF3nx83PgRz3EkAwgN5BXNysGU1spEv"> Private Bin </a></p>
        <p class="my-2 text-green-400 hover:text-white"><a target="_blank" href="https://drive.google.com/file/d/1Ac3Q4S-JSv-o3eTYKAC7UdDY-QiLI9Zx/view"> 1.jpeg </a></p>
        </div>
        `
    }
]

export default questions;