const express = require('express');
const app = express();
const router = express.Router();
const port = 3300;
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
mongoose.set('strictQuery',false);
const mongoDB = "mongodb+srv://mael:kqd2biXGzxuG6Mp@main.fohfzjs.mongodb.net/main_data?retryWrites=true&w=majority";


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());

app.get('/',(req,res)=>{
    res.send("Server running (normalement)")
})

app.post('/login',(req,res) => {
    console.log(req.body.username)
    console.log(req.body.password)
})

app.listen(port, function() {
    console.log('Le serveur écoute le port '+port);
});

async function main() {
  try {
    await mongoose.connect(mongoDB);
    console.log("Connexion réussie à la base de données MongoDB");
  } catch (error) {
    console.log("Erreur de connexion à la base de données MongoDB: ", error);
  }
}
main();
