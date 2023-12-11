const express = require('express');
const cors = require('cors')
const app = express();
const {port} = require('./config');
const db = require('./utils/database');

const userRouter = require('./core/users/users.router');
const authRouter = require('./core/auth/auth.router');
const maintenanceRouter = require("./maintenance/maintenance.router")
const condominuimsRouter = require("./condominiums/condominiums.router")


app.use(express.json());
app.use(cors())

db.authenticate()
    .then(()=> {
        console.log('Database Authenticated')
    })
    .catch(err => {
        console.log(err)
    })

db.sync()
    .then(()=> {
        console.log('Database Synced')
    })
    .catch(err => {
        console.log(err)
    })


app.use('/api/v1/users', userRouter)
app.use('/api/v1/auth', authRouter)

app.use("/api/v1/maintenance", maintenanceRouter )
app.use("/api/v1/condominuims", condominuimsRouter )




app.get('/', (req, res) => {
    res.status(200).json({
        message: 'OK!',
        users: `localhost:${port}/api/v1/users`
    })
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
