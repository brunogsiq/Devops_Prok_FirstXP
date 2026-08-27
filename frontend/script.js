const API_URL = '/tasks';

const form = document.getElementById('task-form');
const titleInput = document.getElementById('task-title');
const list = document.getElementById('task-list');

async function fetchTasks() {
  const res = await fetch(API_URL);
  const tasks = await res.json();
  renderTasks(tasks);
}

function renderTasks(tasks) {
  list.innerHTML = '';

  tasks.forEach((task) => {
    const li = document.createElement('li');
    li.className = task.done ? 'done' : '';

    const title = document.createElement('span');
    title.className = 'title';
    title.textContent = task.title;
    title.addEventListener('click', () => toggleTask(task));

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'x';
    deleteBtn.addEventListener('click', () => deleteTask(task.id));

    li.append(title, deleteBtn);
    list.appendChild(li);
  });
}

async function createTask(title) {
  await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title }),
  });
  await fetchTasks();
}

async function toggleTask(task) {
  await fetch(`${API_URL}/${task.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ done: !task.done }),
  });
  await fetchTasks();
}

async function deleteTask(id) {
  await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
  await fetchTasks();
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const title = titleInput.value.trim();
  if (!title) return;
  createTask(title);
  titleInput.value = '';
});

fetchTasks();
