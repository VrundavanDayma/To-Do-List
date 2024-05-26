// scripts.js
document.addEventListener('DOMContentLoaded', () => {
  const taskInput = document.getElementById('new-task');
  const addTaskButton = document.getElementById('add-task-btn');
  const taskList = document.getElementById('task-list');
  const taskPriority = document.getElementById('task-priority');
  const taskCategory = document.getElementById('task-category');
  const taskDueDate = document.getElementById('task-due-date');

  addTaskButton.addEventListener('click', addTask);

  taskList.addEventListener('click', (e) => {
      if (e.target.classList.contains('remove-task')) {
          removeTask(e.target.parentElement.parentElement);
      } else if (e.target.classList.contains('complete-task')) {
          toggleCompleteTask(e.target.parentElement.parentElement);
      }
  });

  function addTask() {
      const taskText = taskInput.value.trim();
      const priority = taskPriority.value;
      const category = taskCategory.value;
      const dueDate = taskDueDate.value;

      if (taskText !== '') {
          const li = document.createElement('li');
          li.className = `task-priority ${priority}`;
          li.innerHTML = `
              <div class="task-details">
                  <span>${taskText}</span>
                  <span class="task-category">Category: ${category}</span>
                  <span class="task-due-date">Due: ${dueDate}</span>
              </div>
              <div>
                  <button class="complete-task">Complete</button>
                  <button class="remove-task">Remove</button>
              </div>
          `;
          taskList.appendChild(li);
          taskInput.value = '';
          taskPriority.value = 'low';
          taskCategory.value = 'work';
          taskDueDate.value = '';
      }
  }

  function removeTask(task) {
      taskList.removeChild(task);
  }

  function toggleCompleteTask(task) {
      task.classList.toggle('completed');
  }
});
