import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getFirestore,
  collection,
  addDoc
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {

  apiKey: "YOUR_API_KEY",

  authDomain: "YOUR_AUTH_DOMAIN",

  projectId: "YOUR_PROJECT_ID",

  storageBucket: "YOUR_STORAGE_BUCKET",

  messagingSenderId: "YOUR_SENDER_ID",

  appId: "YOUR_APP_ID"

};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
/* INTRO + MUSIC */

const music = document.getElementById("music");

music.volume = 0.15;

const intro =
document.getElementById("intro");

intro.addEventListener("click", () => {

  music.play();

  intro.style.opacity = "0";

  setTimeout(() => {

    intro.style.display = "none";

  }, 1500);

});

/* SEND MESSAGE */

window.sendMessage = async function(){

  const name =
  document.getElementById("name").value;

  const message =
  document.getElementById("message").value;

  const status =
  document.getElementById("status");

  if(name === "" || message === ""){

    status.innerHTML = "Please fill everything 💔";

    return;
  }

  try{

    await addDoc(collection(db, "messages"), {

      name:name,

      message:message,

      createdAt:new Date()

    });

    status.innerHTML = "Sent successfully 💖";

    document.getElementById("name").value = "";

    document.getElementById("message").value = "";

  }catch(error){

    status.innerHTML = "Something went wrong 💔";

  }

}
