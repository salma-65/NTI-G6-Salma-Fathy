const http = require("http");

let users = [
    {
        id: 1,
        name: "Sohila",
        age: 20
    },
    {
        id: 2,
        name: "Sara",
        age: 21
    }
];

const server = http.createServer((req, res) => {

    res.setHeader("Content-Type", "application/json");

    const url = req.url.split("/");
    const id = Number(url[2]);

    // GET 
    if (req.method === "GET" && req.url === "/users") {

        res.statusCode = 200;
        res.end(JSON.stringify(users));

    }

    // GET USER BY ID
    else if (req.method === "GET" && url[1] === "users" && id) {

        const user = users.find(u => u.id === id);

        if (user) {
            res.statusCode = 200;
            res.end(JSON.stringify(user));
        } else {
            res.statusCode = 404;
            res.end(JSON.stringify({
                message: "User not found"
            }));
        }

    }

    // POST
    else if (req.method === "POST" && req.url === "/users") {

        let body = "";

        req.on("data", (chunk) => {
            body += chunk;
        });

        req.on("end", () => {

            const newUser = JSON.parse(body);

            users.push(newUser);

            res.statusCode = 201;
            res.end(JSON.stringify({
                message: "User added",
                user: newUser
            }));

        });

    }

    // PUT
    else if (req.method === "PUT" && url[1] === "users" && id) {

        let body = "";

        req.on("data", (chunk) => {
            body += chunk;
        });

        req.on("end", () => {

            const updatedUser = JSON.parse(body);

            const index = users.findIndex(u => u.id === id);

            if (index != -1) {

                users[index] = updatedUser;

                res.statusCode = 200;
                res.end(JSON.stringify({
                    message: "User updated",
                    user: updatedUser
                }));

            } else {

                res.statusCode = 404;
                res.end(JSON.stringify({
                    message: "User not found"
                }));

            }

        });

    }

    // PATCH
    else if (req.method === "PATCH" && url[1] === "users" && id) {

        let body = "";

        req.on("data", (chunk) => {
            body += chunk;
        });

        req.on("end", () => {

            const updates = JSON.parse(body);

            const user = users.find(u => u.id === id);

            if (user) {

                if (updates.name) {
                    user.name = updates.name;
                }

                if (updates.age) {
                    user.age = updates.age;
                }

                res.statusCode = 200;
                res.end(JSON.stringify({
                    message: "User updated",
                    user: user
                }));

            } else {

                res.statusCode = 404;
                res.end(JSON.stringify({
                    message: "User not found"
                }));

            }

        });

    }

    // DELETE
    else if (req.method === "DELETE" && url[1] === "users" && id) {

        const index = users.findIndex(u => u.id === id);

        if (index != -1) {

            users.splice(index, 1);

            res.statusCode = 200;
            res.end(JSON.stringify({
                message: "User deleted"
            }));

        } else {

            res.statusCode = 404;
            res.end(JSON.stringify({
                message: "User not found"
            }));

        }

    }

    // ROUTE NOT FOUND
    else {

        res.statusCode = 404;

        res.end(JSON.stringify({
            message: "Route not found"
        }));

    }

});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});