const express = require("express");
// Crea un router di Express per gestire le rotte degli eventi
const router = express.Router();
// Importa il controller degli eventi per gestire le operazioni sulle rotte degli eventi
const eventsController = require('../controllers/eventsController');


// Rotta per ottenere tutti gli eventi
router.get('/', eventsController.index);

// Rotta per creare un nuovo evento
router.post('/', eventsController.store);

// Rotta per aggiornare un evento esistente
// Nota: ':event' è un parametro dinamico che rappresenta l'ID dell'evento da aggiornare
router.put('/:event', eventsController.update);


// Esporta il router per essere utilizzato altrove nell'applicazione
module.exports = router;
