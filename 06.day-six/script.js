let users = [];

let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let age = document.getElementById("age");
let isGrad = document.getElementById("yes");
let notGrad = document.getElementById("no");

//local storage
function saveData() {
    localStorage.setItem("users", JSON.stringify(users));
}

function loadData() {
    let saved = localStorage.getItem("users");
    if (saved) {
        users = JSON.parse(saved);
    }
}

let userIndex = -1;
let formTitle = document.getElementById("sectionTitle");
let addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", function (add) {
    add.preventDefault();

    let firstName = fname.value;
    let lastName = lname.value;
    let userAge = age.value;

    if (firstName == "" || lastName == "" || userAge == "") {
        alert("Please fill all the fields");
        return;
    }

    let graduated = "";
    if (isGrad.checked) {
        graduated = "Yes";
    } else if (notGrad.checked) {
        graduated = "No";
    } else {
        alert("Please select whether you are graduated or not");
        return;
    }

    if (userIndex == -1) {
        // new user
        let newUser = {
            first: firstName,
            last: lastName,
            age: userAge,
            graduated: graduated
        };
        users.push(newUser);
    } else {
        // editing existing user
        users[userIndex].first = firstName;
        users[userIndex].last = lastName;
        users[userIndex].age = userAge;
        users[userIndex].graduated = graduated;
        userIndex = -1;
    }

    saveData();

//Reset form
    fname.value = "";
    lname.value = "";
    age.value = "";
    isGrad.checked = false;
    notGrad.checked = false;
    addBtn.textContent = "Add";
    formTitle.textContent = "Add User";

    showUsers();
});

let searchFname = document.getElementById("searchFname");
let filterGrad = document.getElementById("filterGrad");

//search and filter
function getMatchingUsers() {
    let searchFirst = searchFname.value.toLowerCase();
    let gradFilter = filterGrad.value;

    return users.filter(function (person) {
        let nameMatch = person.first.toLowerCase().includes(searchFirst);
        let gradMatch = gradFilter == "all" || person.graduated == gradFilter;
        return nameMatch && gradMatch;
    });
}

//Building the table
function buildUserRow(person) {
    let realIndex = users.findIndex(function (item) {
        return item === person;
    });

    let row = document.createElement("tr");

    let firstCell = document.createElement("td");
    firstCell.textContent = person.first;

    let lastCell = document.createElement("td");
    lastCell.textContent = person.last;

    let ageCell = document.createElement("td");
    ageCell.textContent = person.age;

    let gradCell = document.createElement("td");
    gradCell.textContent = person.graduated;

    let actionsCell = document.createElement("td");

    let updateButton = document.createElement("button");
    updateButton.textContent = "Update";
    updateButton.className = "updateBtn";
    updateButton.type = "button";
    updateButton.dataset.index = realIndex;

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "deleteBtn";
    deleteButton.type = "button";
    deleteButton.dataset.index = realIndex;

    actionsCell.appendChild(updateButton);
    actionsCell.appendChild(deleteButton);

    row.appendChild(firstCell);
    row.appendChild(lastCell);
    row.appendChild(ageCell);
    row.appendChild(gradCell);
    row.appendChild(actionsCell);
    return row;
}

function showUsers() {
    let filterUsers = getMatchingUsers();
    let userList = document.getElementById("userList");

    userList.innerHTML = "";

    filterUsers.forEach(function (person) {
        let row = buildUserRow(person);
        userList.appendChild(row);
    });
   let totalUsers = document.querySelector(".total");
    totalUsers.textContent = "Total Users: " + filterUsers.length;
}

//Handling the actions
userList.addEventListener("click", function (e) {
    let clickedIndex = e.target.dataset.index;
    if (clickedIndex === undefined) return;

    let index = Number(clickedIndex);

    if (e.target.classList.contains("updateBtn")) {
        editUser(index);
    }

    if (e.target.classList.contains("deleteBtn")) {
        deleteUser(index);
    }
});

function editUser(index) {
    let person = users[index];

    fname.value = person.first;
    lname.value = person.last;
    age.value = person.age;

    if (person.graduated == "Yes") {
        isGrad.checked = true;
    } else {
        notGrad.checked = true;
    }

    userIndex = index;
    addBtn.textContent = "Update";
    formTitle.textContent = "Update User";
}

function deleteUser(index) {
    users.splice(index, 1);
    saveData();
    showUsers();
}

searchFname.addEventListener("input", showUsers);
filterGrad.addEventListener("change", showUsers);

loadData();
showUsers();