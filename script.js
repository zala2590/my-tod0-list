// Select elements
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Add task
taskForm.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form submission

  const taskText = taskInput.value;

  if (taskText.trim() === '') return;

  const li = document.createElement('li');
  li.textContent = taskText;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.classList.add('delete-btn');
  deleteBtn.addEventListener('click', function () {
    li.remove();
  });

  li.appendChild(deleteBtn);

  // Mark as completed
  li.addEventListener('click', function () {
    li.classList.toggle('completed');
  });

  taskList.appendChild(li);
  taskInput.value = ''; // Clear input
});
