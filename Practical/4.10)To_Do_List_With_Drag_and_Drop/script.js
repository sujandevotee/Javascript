var list = document.getElementById("myUL");

// Adding
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === "") {
        alert("Please Enter The Task..");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    var span = document.createElement("span");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    // draggable
    li.draggable = true;
    li.classList.add('draggable');

    // start drag
    li.addEventListener('dragstart', function(ev) {
        ev.dataTransfer.setData('text', ev.target.id);
        ev.target.classList.add('dragging');
    });

    // end drag
    li.addEventListener('dragend', function(ev) {
        ev.target.classList.remove('dragging');
    });

    // close button
    span.onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    };
}
// checkbox
list.addEventListener(
    "click",
    function (ev) {
        if (ev.target.tagName === "LI") {
            ev.target.classList.toggle("checked");
        }
    },
    false
);

// Dropping
list.addEventListener('dragover', function(ev) {
    ev.preventDefault();
    var draggedElement = document.querySelector('.dragging');
    var rect = list.getBoundingClientRect();
    var mouseY = ev.clientY - rect.top;
    var draggedY = parseFloat(draggedElement.style.top) || 0;
    if (mouseY < draggedY) {
        list.insertBefore(draggedElement, ev.target);
    } else {
        list.insertBefore(draggedElement, ev.target.nextSibling);
    }
});

list.addEventListener('drop', function(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData('text');
    var draggableElement = document.getElementById(data);
    var dropzone = ev.target;

    if (dropzone.tagName === 'LI') {
        dropzone.parentNode.insertBefore(draggableElement, dropzone.nextSibling);
    }
});