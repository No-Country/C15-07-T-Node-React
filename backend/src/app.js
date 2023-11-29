const express = require('express');
const cors = require('cors')
const app = express();
const {port} = require('./config');


app.use(express.json());
app.use(cors())





app.get('/', (req, res) => {
    res.status(200).json({
        message: 'OK!',
        users: `localhost:${port}/api/v1/users`
    })
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});