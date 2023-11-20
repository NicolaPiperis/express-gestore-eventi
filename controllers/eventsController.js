const {EventModel} = require('../models/event');
// importiamo il log 
const { log } = require("console");
const events = require('../db/events.json');

// Funzione per ottenere tutti gli eventi
function index(req, res) {
    const events = EventModel.readEvents();
    res.json(events);

}
// Funzione per creare un nuovo evento
function store(req, res) {
    const newEvent = new EventModel(3, 'Conferenza', 'Una conferenza interessante', '2023-12-01', 100);

    events.push(newEvent)
    EventModel.writeEvents(events);
    res.json(events);
}

function show(req, res) {
    const eventId = req.params.id; 
    const eventbyId = EventModel.getEventById(eventId);

    if (eventbyId) {
        res.json(eventbyId);
    } else {
        res.status(404).json({ error: 'Evento non trovato' });
    }
}

// Funzione per aggiornare un evento esistente
function update(req, res) {
   
}

// Esporta le funzioni del controller per essere utilizzate altrove nell'applicazione
module.exports = {
    index,
    store,
    show,
    update
};
