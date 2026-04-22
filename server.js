const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// DB connect
mongoose.connect('mongodb://myAtlasDBUser:Rachit2006@ac-ohv3u7u-shard-00-00.iajzsyg.mongodb.net:27017,ac-ohv3u7u-shard-00-01.iajzsyg.mongodb.net:27017,ac-ohv3u7u-shard-00-02.iajzsyg.mongodb.net:27017/?ssl=true&replicaSet=atlas-s4eu0p-shard-0&authSource=admin&appName=myAtlasClusterEDU')
.then(()=>console.log("DB Connected"))
.catch(err=>console.log(err));

// Routes import
const authRoutes = require('./routes/authRoutes');
const expenseRoutes = require('./routes/expenseRoutes');

// Use routes
app.use('/', authRoutes);
app.use('/', expenseRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));