const config = require('./config')
process.env.TZ = 'Europe/Moscow'
const app = require('./app')

app.listen(config.APP_Port, () => {
    console.log(`Server is running on port ${config.APP_Port}`)
})