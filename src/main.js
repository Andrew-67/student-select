import "./style.css";
import { DisplayMessage } from "./components/display.js";

const student_data = [
  {
    name: "Andrew"
  },
  {
    name: "John"
  },
  {
    name: "Alice"
  }
];

document.querySelector("#app").innerHTML = `
  <h1 class="text-3xl font-bold underline">
    Hello Vite!
  </h1>
`;

const button = document.createElement("button");
button.textContent = "Pick a Random Student";
button.className ="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600";
button.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * student_data.length);
  const selectedStudent = student_data[randomIndex];
  const messageHTML = DisplayMessage({ message: `Selected Student: ${selectedStudent.name}` });
  const messageContainer = document.getElementById("message-container");
  messageContainer.innerHTML = messageHTML;
});

const messageContainer = document.createElement("div");
messageContainer.id = "message-container";
messageContainer.className = "mt-4";

const resetbutton = document.createElement("button");
resetbutton.textContent = "Reset";
resetbutton.className =
  "ml-4 px-4 py-2 bg-red-500 text-white font-semibold rounded hover:bg-red-600";
resetbutton.addEventListener("click", () => {
  const messageContainer = document.getElementById("message-container");
  messageContainer.innerHTML = "";
});
const lmb = document.createElement("button")
lmb.textContent = "Light Mode"
lmb.className ="mt-4 px-4 py-2 bg-gray-500 text-white font-semibold rounded hover:bg-gray-600"
lmb.onclick = () => {
  document.body.style.backgroundColor = "white";
}

const dmb = document.createElement("button")
dmb.textContent = "Dark Mode"
dmb.className ="mt-4 px-4 py-2 bg-gray-500 text-white font-semibold rounded hover:bg-gray-600"
dmb.onclick = () => {
  document.body.style.backgroundColor = "gray";
}

document.body.appendChild(button);
document.body.appendChild(resetbutton);
document.body.appendChild(lmb);
document.body.appendChild(dmb);
document.body.appendChild(messageContainer);