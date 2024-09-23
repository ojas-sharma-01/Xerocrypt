import shahed from './shahed.jpeg';
import iran from './iran.jpeg';
import xero_hiha from './xerohiha.jpg';
import xero_aud from './xerocrypt20.mp3';
import audio2 from './audio2.mp3';
import tr_sq_ci from './tr_sq_ci.png'
import xero_vid from './xero_vid.mp4';

const questions = [
    {q_no:1, title: "Child's play",
        question:` 
        <div class="text-[20px] md:text-[30px]"><p class="my-8 md:my-8">Beneath the canopy of a twilight sky, where the shadows stretch long and the air hums with an ancient magic, you find \
        yourself before a door that seems to pulse with its own quiet life. It is a door like no other, weathered by time and touched by \
        countless hands, each leaving behind a trace of their hopes, dreams, and fears. The wood is dark, almost black, and etched with symbols \
        that seem to shift and change if you look too long.</p>\
        <p class="my-8 md:my-8">The world around you holds its breath as if waiting for you to make the next move. You can feel the faintest of breezes stir \
        your hair, carrying with it the scent of something you can't quite place—a mix of damp earth, blooming flowers,\
         and the crispness of the night air. It's a scent that makes you think of adventure, of stories yet untold, and of\
          the unknown that lies just beyond that door.</p>\
        <p sclass="my-8 md:my-8">The path you've taken has led you here, to this exact moment, and though the path has not been easy, you can sense \
        that something remarkable lies ahead. This door is more than just wood and iron; it's a threshold, a\
         boundary between what is and what could be. Your hand hovers, and you feel a tingle in your fingertips as you draw \
         closer, as if the door itself recognizes your presence.</p>\
        <p class="my-8 md:my-8">When you finally reach out and touch the cool surface, it feels like the culmination of every step you've taken, \
        every choice you've made. The world seems to pause, holding its breath along with you. And then, when they \
        ask—because they will ask—say “alohomora” and we will let you in:)</p></div>\
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
    {q_no:3, title: "Hahaha",
        question:`
        <div class="flex flex-col justify-evenly h-[400px]">
        <div class="flex justify-center"><img class="w-[320px]" src=${xero_hiha} alt="this img is necesarry" /></div>
        <div class="flex justify-center"><a class="text-green-400 hover:text-white" href="https://pastebin.com/RcsFma5s" target="__blank">https://pastebin.com/RcsFma5s</a></div>
        </div>
        `},
    {q_no:4, title: "Listen carefully",
        question:`
        <div class="flex justify-center my-10">
        <audio controls>
        <source src=${xero_aud} type="audio/mpeg"></source>
        Your browser does not support the audio element.
        </audio>
        </div>
        `},
    {q_no:5, title: "Binary",
        question:`
        <div class="flex flex-col">
        <p class="my-5">Decode the essence where numbers align, and there is a subtle sign. The first step is in the beginning—what do you see?</p>
        <a class="my-5 text-green-400 hover:text-white" href="https://docs.google.com/document/d/1m4EW9anggr72Z4W2sOdPqWdP1vVrPEZm5I4xJ_23Rkw/edit?usp=sharing" target="__blank">
        https://docs.google.com/document/d/1m4EW9anggr72Z4W2sOdPqWdP1vVrPEZm5I4xJ_23Rkw/edit?usp=sharing</a>
        </div>
        `},
    {q_no:6, title: "💥",
        question:`
        <div class="flex flex-col">
        <p class="my-5"> Solving a cipher is like defusing a bomb. A single mistake and the whole secret could blow wide open. </p>
        <a class="my-5 text-green-400 hover:text-white" target="__blank" href="https://imgur.com/a/lgtTHsg">https://imgur.com/a/lgtTHsg</a>
        </div>
        `},
    {q_no:7, title: "A pleasant sound",
        question:`
        <div class="flex flex-col">
        <p class="my-5">Within this enigmatic audio, a secret path is waiting to be discovered. Tune in closely, decipher the hidden clues, and reveal the route to your next adventure.</p>
        <p class="my-5">
        <div class="flex justify-center"><audio controls><source src=${audio2}></source></audio></div>
        </p>
        <div>
        `},
    {q_no:8, title: "The mysterious shapes",
        question:`
        <div class="flex flex-col">
        <p class="my-7"><a class="text-green-400 hover:text-white" href="https://xerosecret.vercel.app/" target="__blank">https://xerosecret.vercel.app/</a></p>
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
    {q_no:9, title: "Sonata",
        question:`
        <div class="my-5 flex justify-center">
        <video controls>
        <source src=${xero_vid}></source>
        </video>
        </div>
        `},
    {q_no:10, title: "Symphonic Secrets",
        question:`
        <div class="flex flex-col">
        <p class="my-5">Everything in this world is steeped in secrets; the music you hear hides its own mysteries, waiting to be uncovered. </p>
        <p class="my-5"><a class="text-green-400 hover:text-white" href="https://pastebin.com/Z1EsFAsc" target="__blank">
        https://pastebin.com/Z1EsFAsc</a></p>
        <p class="my-5"><a target="__blank" class="text-green-400 hover:text-white" download href="https://file.notion.so/f/f/3a6019b6-6188-4a5c-8860-ce03d5c5560f/8cae9780-e8bc-4ff5-99f5-a510813a983f/Symphonic_Secret_Xero2.0.pdf?table=block&id=10a3cc11-2d53-80a5-96d7-d231f8ce098c&spaceId=3a6019b6-6188-4a5c-8860-ce03d5c5560f&expirationTimestamp=1727200800000&signature=6Qe4mfNHp6EK-ZiUab6Gf2dCku6OeTSUP1Ne076TLDw&downloadName=Symphonic+Secret+Xero2.0.pdf">
        PDF</a></p>
        </div>
        `}
]

export default questions;