const initialTasks = [
  {
    id: 1,
    title: "Launch Epic Career 🚀",
    description: "Create a killer Resume",
    status: "todo",
  },
  {
    id: 2,
    title: "Master JavaScript 💛",
    description: "Get comfortable with the fundamentals",
    status: "doing",
  },
  {
    id: 3,
    title: "Keep on Going 🏆",
    description: "You're almost there",
    status: "doing",
  },

  {
    id: 11,
    title: "Learn Data Structures and Algorithms 📚",
    description:
      "Study fundamental data structures and algorithms to solve coding problems efficiently",
    status: "todo",
  },
  {
    id: 12,
    title: "Contribute to Open Source Projects 🌐",
    description:
      "Gain practical experience and collaborate with others in the software development community",
    status: "done",
  },
  {
    id: 13,
    title: "Build Portfolio Projects 🛠️",
    description:
      "Create a portfolio showcasing your skills and projects to potential employers",
    status: "done",
  },
];


function createModal(){
  const modal = document.createElement("div");
  modal.id ="taskModal";
  modal.className = "modal";

  modal.innerHTML = 
  `<div class="modal-content"> 
    <span id="close-button">&times;</span>
    <h2>Task</h2>
    <input type ="text" id="task-title"/>
    <textarea id="task-desc" rows="4"></textarea>
    <select id="task-status">
      <option value="todo">todo</option>
      <option value="doing">doing</option>
      <option value="done">done</option>
    </select>
  </div>`;

  document.body.appendChild(modal);
  document.getElementById("close-button").addEventListener("click", closeModal);
}

function clearTasks() {
  document.querySelectorAll(".task-div").forEach(taskDiv => taskDiv.innerHTML = "");
} 
// removes existing tasks before rendering new ones
function openModal(taskId) {
  const task = tasks.find(t => t.id === taskId);
  if (!task) return;

  document.getElementById("task-title").value = task.title;
  document.getElementById("task-desc").value = task.description;
  document.getElementById("task-status").value = task.status;

  document.getElementById("modal").classList.remove("hidden");
  document.getElementById("save-btn").onclick = () => saveTask(taskId);
} // Opens modal and populates with task data

function closeModal() {
  document.getElementById("modal").classList.add("hidden");
} // Closes the modal














































































