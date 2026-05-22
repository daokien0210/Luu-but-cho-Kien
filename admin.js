import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getFirestore,
  collection,
  getDocs
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const password = prompt("Password?");

if(password !== "forever12a"){

  document.body.innerHTML = "";

  throw new Error("Wrong password");
}

const firebaseConfig = {
  apiKey: "AIzaSyDNGr1HMpZ6uajNpq-ZkrUAKHTiBHG9T2I",
  authDomain: "luu-but-52647.firebaseapp.com",
  projectId: "luu-but-52647",
  storageBucket: "luu-but-52647.firebasestorage.app",
  messagingSenderId: "569736243796",
  appId: "1:569736243796:web:0c37363f469fe6d0f39bc1",
  measurementId: "G-NTKD0DY13X"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

async function loadMessages(){

  const messagesDiv =
  document.getElementById("messages");

  const querySnapshot =
  await getDocs(collection(db, "messages"));

  querySnapshot.forEach((doc) => {

    const data = doc.data();

    messagesDiv.innerHTML += `

      <div class="message-card">

        <h2>${data.name}</h2>

        <p>${data.message}</p>

      </div>

    `;

  });

}

loadMessages();
