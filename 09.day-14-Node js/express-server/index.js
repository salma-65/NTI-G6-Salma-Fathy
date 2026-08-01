const express = require("express");

const app = express();

app.use(express.json());

let users = [
    {
        id: 1,
        name: "Ali",
        age: 20
    },
    {
        id: 2,
        name: "Sara",
        age: 21
    }
];

// GET ALL USERS
app.get("/users", (req, res) => {

    res.json(users);

});

// GET USER BY ID
app.get("/users/:id", (req, res) => {

    const id = Number(req.params.id);

    const user = users.find((u) => u.id == id);

    if (user) {
        res.json(user);
    } else {
        res.status(404).json({
            message: "User not found"
        });
    }

});

// POST
app.post("/users", (req, res) => {

    const newUser = req.body;

    users.push(newUser);

    res.status(201).json({
        message: "User added successfully",
        user: newUser
    });

});

// PUT
app.put("/users/:id", (req, res) => {

    const id = Number(req.params.id);

    const index = users.findIndex((u) => u.id == id);

    if (index == -1) {

        res.status(404).json({
            message: "User not found"
        });

    } else {

        req.body.id = id;
        users[index] = req.body;

        res.json({
            message: "User updated successfully",
            user: users[index]
        });

    }

});

// PATCH
app.patch("/users/:id", (req, res) => {

    const id = Number(req.params.id);

    const user = users.find((u) => u.id == id);

    if (!user) {

        res.status(404).json({
            message: "User not found"
        });

    } else {

        if (req.body.name) {
            user.name = req.body.name;
        }

        if (req.body.age) {
            user.age = req.body.age;
        }

        res.json({
            message: "User updated successfully",
            user: user
        });

    }

});

// DELETE
app.delete("/users/:id", (req, res) => {

    const id = Number(req.params.id);

    const index = users.findIndex((u) => u.id == id);

    if (index == -1) {

        res.status(404).json({
            message: "User not found"
        });

    } else {

        users.splice(index, 1);

        res.json({
            message: "User deleted successfully"
        });

    }

});

// NOT FOUND
app.use((req, res) => {

    res.status(404).json({
        message: "Route not found"
    });

});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});