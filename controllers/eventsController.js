const {EventModel, newEvent} = require('../models/event');
// importiamo il log 
const { log } = require("console");
const events = require('../db/events.json');

// Funzione per ottenere tutti gli eventi
function index(req, res) {
    const filters = req.query;
    const events = EventModel.readEvents(filters);
    res.json(events);

}
// Funzione per creare un nuovo evento
function store(req, res) {

    events.push(newEvent)
    EventModel.writeEvents(events);
    res.json(events);
}
// Funzione per aggiornare un evento esistente
function update(req, res) {
   
}

// Esporta le funzioni del controller per essere utilizzate altrove nell'applicazione
module.exports = {
    index,
    store,
    update
};
