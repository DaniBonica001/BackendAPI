--title, description, date, time, location, and ticket prices,
CREATE TABLE event(
    id UUID PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    date DATE NOT NULL,
    time TIME NOT NULL,
    location VARCHAR(255) NOT NULL,
    ticketPrices VARCHAR(20) NOT NULL
);

INSERT INTO event (id, title, description, date, time, location, ticketPrices)
VALUES (1, "Concierto de rock", "Concierto de rock en el estadio", "2021-10-10", "20:00", "Estadio", "10000");