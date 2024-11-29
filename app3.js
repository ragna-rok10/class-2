const express = require('express');
const app = express()


app.get("/",(req,res)=>{
    res.send("<h1 style='color:pink;'>Welcome to my website</h1>")

})
app.get("/home",(req,res)=>{
    res.send("<h1 style='color:red;'>Welcome to the home page</h1>")
})
app.get("/about",(req,res)=>{
    res.send("<h1 style='color:blue;'>THIS IS THE ABOUT PAGE</h1>")
})
app.get("/contact",(req,res)=>{
    res.send("<h1 style='color:red;'>FOR MORE QUESTIONS <br> MAIL :okrajat2004@gmail.com</h1>")
})
app.get("/html",(req,res)=>{
    res.send(`
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
    `)
})

app.get("/json",(req,res)=>{
    res.send([
        {name:"John",age:30},
        {name:"Alice",age:25},
        {name:"Bob",age:28}
    ])
})
app.listen(6007)