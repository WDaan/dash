const app = require('express')()
const serveStatic = require('serve-static')
app.use(serveStatic(__dirname + '/dist'))
const port = process.env.PORT || 5000

app.listen(port)
console.log(`Server running on ${port} ...`)
