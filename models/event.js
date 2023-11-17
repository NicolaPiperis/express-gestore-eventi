const fs = require('fs');
const path = require('path');

class EventModel {

    id;
    title;
    description;
    date;
    maxSeats;

    constructor(id, title, description, date, maxSeats) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.date = date;
        this.maxSeats = maxSeats;
    }

    
    static readEvents() {
        let filePath = path.join(__dirname, ('../db/events.json'));
        
        let events = JSON.parse(fs.readFileSync( filePath, "utf8"));
        return events
        
    }
    
    static writeEvents(events) {

        let filePath = path.join(__dirname, ('../db/events.json'));
        
        const json = JSON.stringify(events, null, 2);
        fs.writeFileSync(filePath, json);
    }

    // Metodo statico per ottenere un evento specifico dal file JSON
    static getEventById(eventId) {
        
    }
    
    // Metodo statico per salvare un nuovo evento nel file JSON
    static saveNewEvent(newEvent) {
        
        
    }
    
}
const newEvent = new EventModel({
    id: '1',
    title: 'Conferenza',
    description: 'Una conferenza interessante',
    date: '2023-12-01',
    maxSeats: 100
});

module.exports = {
    EventModel, 
    newEvent
}