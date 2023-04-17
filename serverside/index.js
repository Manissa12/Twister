const express = require ('express');
const router = express.Router();
const app = express();
const port = 8000;
router.use(express.json());

router.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/plain;charset=UTF-8');
    res.send("Serveur à l'écoute");
})


router.post('/api/createuser', (req, res) => {
    try {
        if (!req.body.login) {
            res.status(400).json({
                status: 400,
                "message": "Requête invalide : login nécessaire"
            });
            return;
        }
        if (!req.body.password ) {
            res.status(400).json({
                status: 400,
                "message": "Requête invalide : password nécessaire"
            });
            return;
        }
        if (!req.body.confirmpassword ) {
            res.status(400).json({
                status: 400,
                "message": "Requête invalide : Il faut remplir le champ de confirmation du mot du passe"
            });
            return;
        }
        if (!(typeof req.body.password == req.body.confirmpassword)) {
            res.status(400).json({
                status: 400,
                "message": "Requête invalide : Les deux mots de passes ne correspondent pas"
            });
            return;
        }
        console.log(req.body.name);
        res.json({addition: "placeholder"});
        // Requete BDD - Ajouter une entrée dans user et renvoyer l'id
        res.end();
    }
    catch (e) {
    // Toute autre erreur
        res.status(500).json({
            status: 500,
            message: "erreur interne",
            details: (e || "Erreur inconnue").toString()
        });
    }
});

router.post('/api/messagefrom', (req, res) => {
    try {
        if (!req.body.id) {
            res.status(400).json({
                status: 400,
                "message": "Requête invalide : id nécessaire"
            });
            return;
        }
        res.json({messages: [
            { 
                author: "Placeholderauthor",
                content: "Placeholdercontent",
            },
            { 
                author: "Placeholderauthor2",
                content: "Placeholdercontent2",
            }
        ]
        // Requete BDD - Liste Messages envoyé par id
        });
        res.end();
    }
    catch (e) {
    // Toute autre erreur
        res.status(500).json({
            status: 500,
            message: "erreur interne",
            details: (e || "Erreur inconnue").toString()
        });
    }
});

router.post('/api/friends', (req, res) => {
    try {
        if (!req.body.id) {
            res.status(400).json({
                status: 400,
                "message": "Requête invalide : id nécessaire"
            });
            return;
        }
        // Requete BDD - Lier IdConnecte et IdFriends
        res.end();
    }
    catch (e) {
    // Toute autre erreur
        res.status(500).json({
            status: 500,
            message: "erreur interne",
            details: (e || "Erreur inconnue").toString()
        });
    }
});

router.use(function (req, res, next) {
    res.setHeader('Content-Type', 'text/plain;charset=UTF-8');
    res.status(404).send("Cette page n'existe pas.");
});

app.use('/', router);

app.listen(port, function() {
    console.log('Le serveur écoute le port '+port);
});