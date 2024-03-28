let notesContainer = document.querySelector(".notes-container");
let createNote = document.getElementById("createNote");
let p = document.querySelector(".para");


function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

createNote.addEventListener("click", function () {
    let htmlData = `<div class="card">
    <p class="para" contenteditable="true"></p>
    <div class="divOfImg">
    <img src="Images/delete.png" alt="" class="trash">
    </div>
    </div>`;
    notesContainer.insertAdjacentHTML("afterbegin",htmlData);
});

notesContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.parentElement.remove();
        updateStorage();
    }
    if (e.target.tagName === "P") {
        notes = document.querySelectorAll(".para");
        notes.forEach(element => {
            element.onkeyup = function () {
                updateStorage();
            }
        });
    }
})