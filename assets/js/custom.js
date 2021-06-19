let root = document.querySelector(".root");

let jambotromDiv = document.createElement("div");
jambotromDiv.className = "jumbotron text-center my-4";
jambotromDiv.setAttribute("id", "jumbo");

let h1 = document.createElement("h1");
h1.innerHTML = "<strong>All about JavaScript </strong>";
h1.className = "text-danger text-uppercase bg-dark p-4";

jambotromDiv.appendChild(h1);
root.appendChild(jambotromDiv);

// input field

let nameField = document.querySelector("#nameField");
let ul = document.querySelector("#list");

nameField.addEventListener("keypress", function(e) {
    if (e.keyCode == 13) {
        let name = e.target.value;
        li(name);

        e.target.value = "";
    }
});

function li(name) {
    let liItem = document.createElement("li");
    liItem.className = "list-group-item d-flex justify-content-between";
    liItem.innerText = name;

    let span = document.createElement("span");
    span.innerText = "x";
    span.style.color = "salmon";
    span.style.cursor = "pointer";
    span.addEventListener("click", function() {
        ul.removeChild(liItem);
    });

    liItem.appendChild(span);
    ul.appendChild(liItem);
}