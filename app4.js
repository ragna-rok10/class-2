const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.send("<h1 style='color:pink;'>Welcome to my website</h1>")
});

app.get("/home", (req, res) => {
    res.send("<h1 style='color:red;'>Welcome to the home page</h1>")
});

app.get("/about", (req, res) => {
    res.send("<h1 style='color:blue;'>THIS IS THE ABOUT PAGE</h1>")
});

app.get("/contact", (req, res) => {
    res.send("<h1 style='color:red;'>FOR MORE QUESTIONS <br> MAIL: okrajat2004@gmail.com</h1>")
});

// Add navigation bar in the /html route
app.get("/html", (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <style>
            body {
                font-family: Arial, sans-serif;
            }
            .navbar {
                background-color: #333;
                overflow: hidden;
            }
            .navbar a {
                float: left;
                display: block;
                color: white;
                text-align: center;
                padding: 14px 20px;
                text-decoration: none;
            }
            .navbar a:hover {
                background-color: #ddd;
                color: black;
            }
            table {
                margin: 20px auto;
                border-collapse: collapse;
                width: 60%;
                border: 1px solid #ddd;
            }
            th, td {
                border: 1px solid #ddd;
                padding: 8px;
                text-align: left;
            }
            th {
                background-color: #f2f2f2;
            }
        </style>
    </head>
    <body>
        <div class="navbar">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
            <a href="/html">HTML Page</a>
        </div>
        <h1>Technologies</h1>
        <table>
            <thead>
                <tr>
                    <th>BACK-END</th>
                    <th>FRONT-END</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <ul>
                            <li>Node.js</li>
                            <li>Express.js</li>
                            <li>Python</li>
                            <li>Java</li>
                            <li>PHP</li>
                        </ul>
                    </td>
                    <td>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>Angular</li>
                        </ul>
                    </td>
                </tr>
            </tbody>
        </table>
    </body>
    </html>
    `);
});

// Change port to 6008
app.listen(6008, () => {
    console.log("Server is running on port 6008");
});
