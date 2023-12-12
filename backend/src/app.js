const express = require('express');
const cors = require('cors');
const app = express();
const { port } = require('./config');
const db = require('./utils/database');
const logger = require('morgan');

const userRouter = require('./core/users/users.router');
const authRouter = require('./core/auth/auth.router');
const maintenanceRouter = require('./core/maintenance/maintenance.router');
const condominuimsRouter = require('./core/condominiums/condominiums.router');
const complaintRouter = require('./core/complaint/complaint.router');
const amenitieRouter = require('./core/amenities/amenities.router');
const initModels = require('./models/initModels');
const path = require('path');

app.use(logger('dev'))
app.use(express.json());
app.use(cors());
app.use(express.static('public'));

db.authenticate()
  .then(() => {
    console.log('Database Authenticated');
  })
  .catch((err) => {
    console.log(err);
  });

db.sync()
    .then(()=> {
        console.log('Database Synced')
    })
    .catch(err => {
        console.log(err)
    })



app.get('/api/v1', (req, res) => {
  res.status(200).json({
    message: 'OK!',
    users: `localhost:${port}/api/v1/users`,
    login: `localhost:${port}/api/v1/auth/login`,
    amenities: `localhost:${port}/api/v1/amenities`,
    maintenance: `localhost:${port}/api/v1/maintenance`,
    complaint: `localhost:${port}/api/v1/complaint`,
    condominuims: `localhost:${port}/api/v1/condominuims`,
  });
});

app.use('/api/v1/users', userRouter);
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/amenities', amenitieRouter);
app.use('/api/v1/maintenance', maintenanceRouter);
app.use('/api/v1/complaint', complaintRouter);
app.use("/api/v1/condominuims", condominuimsRouter )

app.get('*', (req,res) =>{
   res.sendFile(path.join(__dirname,'../public/index.html'))
})

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
