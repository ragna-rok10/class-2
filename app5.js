const ex = require("express")
const app = ex()

app.get('/',(req, res) => {
    res.send(`
        <a href="/home ">Home</a>
        <a href="/about ">About</a>
        <a href="/contact ">Contact</a>
        <a href="/signup ">Sign Up</a>
        
        `)
    }) // Rounting function
    app.get("/home",(req, res) => {
        res.send("<h1>Welcome to Home Page</h1>")
        })

    app.get("/about",(req, res) => {
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

    app.get("/contact",(req, res) => {
        res.send("<h1>Welcome to Contact Page</h1>")
            })
    app.get("/signup",(req, res) => {
        res.send("<h1>Welcome to Sign Up  Page</h1>")
        })

        app.listen(7001)