import { pool } from '../server.js';
import { v4 as uuidv4 } from 'uuid';
import { admin } from "../Config/firebaseAdmin.js";

export async function createEvent(eventData, userId) {
    const { title, description, event_date, event_time, location, ticket_price } = eventData;
    const eventId = uuidv4();

    try {
        const query = `INSERT INTO Event (id, title, description, event_date, event_time, location, ticket_price, user_id) 
                       VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`;
        const values = [eventId, title, description, event_date, event_time, location, ticket_price, userId];
        const { rows } = await pool.query(query, values);
        return rows[0];
    } catch (error) {
        throw { status: 500, message: `Error creating event: ${error.message}` };
    }
}

export async function editEvent(eventId, eventData, userId) {
    const { title, description, event_date, event_time, location, ticket_price } = eventData;

    try {
        const query = `UPDATE Event 
                       SET title = $1, description = $2, event_date = $3, event_time = $4, location = $5, ticket_price = $6 
                       WHERE id = $7 AND user_id = $8 RETURNING *`;
        const values = [title, description, event_date, event_time, location, ticket_price, eventId, userId];
        const { rows } = await pool.query(query, values);
        if (rows.length === 0) {
            throw { status: 404, message: 'Event not found or not authorized to edit this event' };
        }
        return rows[0];
    } catch (error) {
        throw { status: 500, message: `Error editing event: ${error.message}` };
    }
}

export async function deleteEvent(eventId, userId) {
    try {
        const query = `DELETE FROM Event WHERE id = $1 AND user_id = $2 RETURNING *`;
        const values = [eventId, userId];
        const { rows } = await pool.query(query, values);
        if (rows.length === 0) {
            throw { status: 404, message: 'Event not found or not authorized to delete this event' };
        }
        return;
    } catch (error) {
        throw { status: 500, message: `Error deleting event: ${error.message}` };
    }
}

export async function getAllEvents() {
    try {
        const query = 'SELECT * FROM Event';
        const { rows } = await pool.query(query);
        return rows;
    } catch (error) {
        throw { status: 500, message: `Error retrieving events: ${error.message}` };
    }
}

export async function getEventDetails(eventId) {
    try {
        const query = 'SELECT * FROM Event WHERE id = $1';
        const values = [eventId];
        const { rows } = await pool.query(query, values);
        if (rows.length === 0) {
            throw { status: 404, message: 'Event not found' };
        }
        return rows[0];
    } catch (error) {
        throw { status: 500, message: `Error retrieving event details: ${error.message}` };
    }
}

export async function purchaseTicket(eventId, userId) {
    try {
        const query = `INSERT INTO Event_User (user_id, event_id) VALUES ($1, $2) RETURNING *`;
        const values = [userId, eventId];
        const { rows } = await pool.query(query, values);

        // Send confirmation email logic can be added here if needed

        return rows[0];
    } catch (error) {
        throw { status: 500, message: `Error purchasing ticket: ${error.message}` };
    }
}

export async function getTickets(userId) {
    try {
        const query = `SELECT e.* 
                       FROM Event e
                       JOIN Event_User eu ON e.id = eu.event_id
                       WHERE eu.user_id = $1`;
        const values = [userId];
        const { rows } = await pool.query(query, values);
        return rows;
    } catch (error) {
        throw { status: 500, message: `Error retrieving tickets: ${error.message}` };
    }
}
