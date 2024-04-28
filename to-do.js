
document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    addTaskBtn.addEventListener('click', function () {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const li = document.createElement('li');
            li.textContent = taskText;

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.className = 'delete-btn';
            deleteBtn.addEventListener('click', function () {
                li.remove();
            });

            li.appendChild(deleteBtn);
            taskList.appendChild(li);
            taskInput.value = '';
        }
    });

    // Additional functionality to add tasks in the future
    const addMoreBtn = document.createElement('button');
    addMoreBtn.textContent = 'Add More Tasks';
    addMoreBtn.addEventListener('click', function () {
        const taskText = prompt('Enter the task:');
        if (taskText !== null && taskText.trim() !== '') {
            const li = document.createElement('li');
            li.textContent = taskText;

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.className = 'delete-btn';
            deleteBtn.addEventListener('click', function () {
                li.remove();
            });

            li.appendChild(deleteBtn);
            taskList.appendChild(li);
        }
    });

    document.body.appendChild(addMoreBtn);
});
