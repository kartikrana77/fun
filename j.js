let Uname = document.getElementById("name");
let head = document.querySelector("#heading");
let button = document.getElementById("but");
let box = document.getElementById("box");
let box2 = document.getElementById("box2");
let gif = document.getElementById("gif");
let gender = document.getElementById("gender");

let yesBtn = document.getElementById("yesBtn");
let noBtn = document.getElementById("noBtn");
let choiceBox = document.getElementById("choiceBox");

let profileBox = document.getElementById("profileBox");
let profileText = document.getElementById("profileText");

let noCount = 0;
let yesSize = 18;
let username =""

box2.classList.add("hidden");
profileBox.classList.add("hidden");

function typeText(element, text, speed = 40) {
  element.textContent = "";
  let i = 0;

  function typing() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  }

  typing();
}

let sound = document.getElementById("creepySound");

button.addEventListener("click", (e) => {
  e.preventDefault();

  sound.play();

  username = Uname.value.trim().toLowerCase();
  let usergender = gender.value.trim().toLowerCase();
  let message = "";

if (usergender === "female") {
    message =
`Alert 🚨
System detected someone beautiful.
Name: ${username}
Protocol activated:
Step 1 → Compliment ${username}
Step 2 → Ask ${username} for coffee ☕
Warning:
Rejecting may cause Demogorgon attack 😌`;

   gif.src = "https://giphy.com/embed/1qh9vOiVTo7tpei8BZ"
    choiceBox.classList.remove("hidden");
  } else if (username === "lubhansh" && usergender === "male") {
    message =
      "Tu sab se bada wala mc ha saale Lubhansh ladki baaz bkl Buradi ke Kachre 🤬";
    gif.src = "https://giphy.com/embed/Tispamn1o3H6knEL66";
  } else if (username === "aditya" && usergender === "male") {
    message =
      "Saala Banglor ke Anda Dosa ha tu bsdk Burari hospital ke guard Randiyo ke HR mere Lund ke Sr.Executive Aditya";
    gif.src = "https://giphy.com/embed/zjOIkuwW1HZIqTaKSO";
  } else if (username === "ayush" && usergender === "male") {
    message =
      "Baba Colony is Randi apni Bandi ka kutta ha bsdk, Tujhe bkl Data Analyst ka matlab bhi pata ha bsdk job chahiye tujeh sale mere tate chamkane ki job karega 🖕";
    gif.src = "https://giphy.com/embed/PdJ92BuOJT5Eu3Jh73";
  } else if (username === "kartik" && usergender === "male") {
    message =
      "Kuch bhi kaho ladka handsome ha , Multitalented ha,Smart ha,Bas iski kismat kharab rahti poor soul 😇";
    gif.src = "https://giphy.com/embed/8BJOqjb50Uuje";
  } else {
    message = "Baki Londo se mujhe lena dena nahi gaand marao tum log";
    gif.src = "https://giphy.com/embed/NmvDjlpmP0HnMgIWNh";
  }

  typeText(head, message, 35);

  box.classList.add("hidden");
  box2.classList.remove("hidden");
});


 console.log(username)

/* YES BUTTON */

yesBtn.addEventListener("click", () => {

  gif.src = "https://giphy.com/embed/kJuTZbuARUniobKXRw";

  head.textContent =
    `Mission Successful 😎\nCoffee date unlocked with ${username} ☕`;

  // hide yes/no buttons
  choiceBox.classList.add("hidden");

  // show profile box
  profileBox.classList.remove("hidden");

  // type profile
  typeText(profileText, myDescription, 20);
});


/* NO RESPONSES */
button.addEventListener("click", (e) => {
  e.preventDefault();

  username = Uname.value.trim();

  funnyResponses = [
    `Are you sure ${username}? I make excellent coffee ☕`,
    `Think again ${username}... I might actually be interesting 😏`,
    `Come on ${username}... even the Demogorgon believes in this date`,
    `Last chance ${username} before the Upside Down steals you 👀`,
    `You clicked No again ${username}?? Suspicious behaviour detected 🤨`,
    `Okay fine ${username}... but what if I bring pizza too? 🍕`,
  ];
});

let noGifs = [
  "https://giphy.com/embed/gBiWfypGQBnpRoBOLH",
  "https://giphy.com/embed/39V7Yg3swPRv2",
  "https://giphy.com/embed/Z5eFxoKjf218c",
  "https://giphy.com/embed/6nfk2gQlNQX6oVqtKj",
  "https://giphy.com/embed/Pk9c8GC6qgRpXGYHYB",
  "https://giphy.com/embed/WEUz1NuHxwjFIwnrXW",
];

/* NO BUTTON */

noBtn.addEventListener("click", () => {

  if (noCount < funnyResponses.length) {

    head.textContent = funnyResponses[noCount];
    gif.src = noGifs[noCount];

    noCount++;

    yesSize += 8;
    yesBtn.style.fontSize = yesSize + "px";

  } else {

    head.textContent =
      `Okay okay ${username} 😅 I will take that as a maybe.`;

   gif.src =  "https://giphy.com/embed/aV0TP55kop0s1NoKI2"
  }

});


/* RUN AWAY BUTTON */

noBtn.addEventListener("pointerenter", () => {

  let x = Math.random() * 200 - 100;
  let y = Math.random() * 200 - 100;

  noBtn.style.transform = `translate(${x}px, ${y}px)`;

});


/* PROFILE DESCRIPTION */

let myDescription = `
So… since you pressed YES, it’s only fair you know who you just agreed to go on a date with 😌

Name: Kartik Rana

Final year BCA student trying to survive assignments and JavaScript bugs.

Height: 5'9 (perfect height to reach the top shelf for snacks).

Appearance:
Black hair, dark brown eyes, Himachali roots from the mountains.

Personality DLC:
• Loves nature 🌿
• Loves animals 🐶
• Also loves beautiful girls (you qualify)

Anime stats:
400+ anime watched.
Favourite: Hunter x Hunter.

Extra skills:
Can cook decent food.
Indian 🍛
Basic Italian 🍝
Indo-Chinese 🍜

Professional foodie.

Favourite novel:
Lord of the Mysteries.

Relationship status:
Still single…

Which is surprising considering my charm and cooking skills.

But maybe that changes today 😉
`;