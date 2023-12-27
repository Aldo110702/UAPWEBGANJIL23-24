function addTask() {
    var taskInput = document.getElementById("task");
    var taskText = taskInput.value;

    if (taskText === "") {
        alert("Harap masukkan data!");
        return;
    }

    var taskList = document.getElementById("taskList");
    var listItem = document.createElement("li");
    listItem.innerHTML = taskText;

    
    var editButton = document.createElement("button");
    editButton.innerHTML = "Edit";
    editButton.onclick = function () {
        var updatedText = prompt("Edit data:", taskText);
        if (updatedText !== null) {
            listItem.innerHTML = updatedText;
            listItem.appendChild(editButton);
            listItem.appendChild(deleteButton);
        }
    };

    var deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Hapus";
    deleteButton.onclick = function () {
        listItem.remove();
    };

    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);

    taskInput.value = "";
}

