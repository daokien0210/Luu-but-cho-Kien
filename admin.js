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

  apiKey: "YOUR_API_KEY",

  authDomain: "YOUR_AUTH_DOMAIN",

  projectId: "YOUR_PROJECT_ID",

  storageBucket: "YOUR_STORAGE_BUCKET",

  messagingSenderId: "YOUR_SENDER_ID",

  appId: "YOUR_APP_ID"

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