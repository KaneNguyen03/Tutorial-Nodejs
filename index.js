const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    var a = 2
    var b = 3
    var c = a + b
    res.render(c)
    res.send("Hello, world!")
})

app.listen(port, () => console.log(`listening on port 3000 at http://localhost:${port}`))