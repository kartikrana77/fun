let Uname = document.getElementById('name');
let head = document.querySelector('#heading');
let button = document.getElementById('but');
let box = document.getElementById('box');
let box2 = document.getElementById('box2');
let gif = document.getElementById("gif");
let gender = document.getElementById('gender')

box2.classList.add('hidden');

function typeText(element, text, speed = 40){
    element.innerText = "";
    let i = 0;

    function typing(){
        if(i < text.length){
            element.textContent += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }

    typing();
}

let sound = document.getElementById("creepySound");

button.addEventListener('click',(e)=>{
    e.preventDefault();

    sound.play();

    let username = Uname.value.trim().toLowerCase();
    let usergender = gender.value.trim().toLowerCase();
    let message = "";

    if(usergender === 'female'){
        message = "Alert 🚨: A beautiful girl has entered the system.Protocol says I must ask her out for coffee before the Demogorgon finds us.";
        gif.src = "https://giphy.com/embed/1qh9vOiVTo7tpei8BZ" 
    }
   else if(username === "lubhansh" && usergender === 'male'){
        message = "Tu sab se bada wala mc ha saale Lubhansh ladki baaz bkl Buradi ke Kachre 🤬";
         gif.src = "https://giphy.com/embed/Tispamn1o3H6knEL66";
    }
    else if(username === "aditya" && usergender === 'male'){
        message = "Saala Banglor ke Anda Dosa ha tu bsdk Burari hospital ke guard Randiyo ke HR mere Lund ke Sr.Executive Aditya";
         gif.src = "https://giphy.com/embed/zjOIkuwW1HZIqTaKSO";
    }
    else if(username === "ayush" && usergender === 'male'){
        message = "Baba Colony is Randi apni Bandi ka kutta ha bsdk, Tujhe bkl Data Analyst ka matlab bhi pata ha bsdk job chahiye tujeh sale mere tate chamkane ki job karega 🖕";
         gif.src = "https://giphy.com/embed/PdJ92BuOJT5Eu3Jh73";
    }
    else if(username === "kartik" && usergender === 'male'){
        message = "Kuch bhi kaho ladka handsome ha , Multitalented ha,Smart ha,Bas iski kismat kharab rahti poor soul 😇";
         gif.src = "https://giphy.com/embed/8BJOqjb50Uuje" ;
    }
    else{
        message = "Baki Londo se mujhe lena dena nahi gaand marao tum log";
         gif.src = "https://giphy.com/embed/NmvDjlpmP0HnMgIWNh" ;
    }

    typeText(head, message, 35);

    box.classList.add('hidden');
    box2.classList.remove('hidden');
});