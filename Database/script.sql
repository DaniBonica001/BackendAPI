-- Drop tables if they exist to start fresh
DROP TABLE IF EXISTS Event_Customer;
DROP TABLE IF EXISTS Event;
DROP TABLE IF EXISTS Customer;

-- Create User table
CREATE TABLE Customer (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    phone TEXT NOT NULL,
    profile_image BYTEA
);

-- Create Event table
CREATE TABLE Event (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    description TEXT,
    event_date DATE NOT NULL,
    event_time TIME NOT NULL,
    location TEXT NOT NULL,
    ticket_price NUMERIC(10, 2) NOT NULL,
    customer_id TEXT REFERENCES Customer(id)
);

-- Create junction table to handle many-to-many relationship between users and events
CREATE TABLE Event_Customer (
    customer_id TEXT REFERENCES Customer(id) ON DELETE CASCADE,
    event_id UUID REFERENCES Event(id) ON DELETE CASCADE,
    PRIMARY KEY (customer_id, event_id)
);


-- Insert data into User table with profile image in base64 format
INSERT INTO Customer (id, name, phone, profile_image)
VALUES 
    (gen_random_uuid() ,'John Doe', '555-1234', decode('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wcAAgEBAS8e2uoAAAAASUVORK5CYII=', 'base64')), 
    (gen_random_uuid(), 'Jane Smith', '555-5678', decode('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wcAAgEBAS8e2uoAAAAASUVORK5CYII=', 'base64'));


-- Insert data into Event table
INSERT INTO Event (title, description, event_date, event_time, location, ticket_price, customer_id)
VALUES 
    ('Music Concert', 'A live music concert featuring various artists.', '2013-07-15', '18:00', 'Central Park', 50.00, (SELECT id FROM Customer WHERE name = 'boris diaz')),
    ('Art Exhibition', 'An exhibition showcasing modern art.', '2023-08-20', '10:00', 'City Gallery', 20.00, (SELECT id FROM Customer WHERE name = 'boris diaz'));


-- Insert data into Event_User table to establish many-to-many relationships
INSERT INTO Event_Customer (customer_id, event_id)
VALUES 
    ((SELECT id FROM Customer WHERE name = 'boris diaz'), (SELECT id FROM Event WHERE title = 'Music Concert')),
    ((SELECT id FROM Customer WHERE name = 'boris diaz bonilla'), (SELECT id FROM Event WHERE title = 'Art Exhibition')),
    ((SELECT id FROM Customer WHERE name = 'Jane Smith'), (SELECT id FROM Event WHERE title = 'Music Concert'));
