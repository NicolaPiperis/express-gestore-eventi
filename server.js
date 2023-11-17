// importiamo express e creiamo la sua istanza
const express = require('express');
const app = express();
// importiamo dotenv e lo installiamo
const dotenv = require("dotenv");
dotenv.config();
// importiamo il log 
const { log } = require("console");
// definiamo con una variabile la porta
const port = process.env.PORT || 3001;
// definiamo i routers
const eventsRoute = require('./routes/eventsRoute');

// rotta principale
app.get('/', (req, res) => {
    res.format({
        html: () => {
            // Risposta HTML
            res.send('<h1>Benvenuto nella tua applicazione di gestione eventi!</h1>');
        },
        json: () => {
            // Risposta JSON
            res.json({ message: 'Benvenuto nella tua applicazione di gestione eventi!' });
        }
    });
});

// rotta relativa all'entità eventi
app.use('/events', eventsRoute);

// avvio il server
app.listen(port, () => {
    log(`server in ascolto su http://localhost${port}`)
});