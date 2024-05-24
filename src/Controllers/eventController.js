import * as eventService from "../Services/eventService.js"

export async function createEvent(req, res, next) {
    try {
        const event = await eventService.createEvent(req.body, req.user);
        res.status(201).json(event);
    } catch (error) {
        next(error);
    }
}

export async function editEvent(req, res, next) {
    try {
        const event = await eventService.editEvent(req.params.eventId, req.body, req.user);
        res.status(200).json(event);
    } catch (error) {
        next(error);
    }
}

export async function deleteEvent(req, res, next) {
    try {
        await eventService.deleteEvent(req.params.eventId, req.user);
        res.status(204).end();
    } catch (error) {
        next(error);
    }
}

export async function getAllEvents(req, res, next) {
    try {
        const events = await eventService.getAllEvents();
        res.status(200).json(events);
    } catch (error) {
        next(error);
    }
}

export async function getEventDetails(req, res, next) {
    try {
        const event = await eventService.getEventDetails(req.params.eventId);
        res.status(200).json(event);
    } catch (error) {
        next(error);
    }
}

export async function purchaseTicket(req, res, next) {
    try {
        await eventService.purchaseTicket(req.params.eventId, req.user);
        res.status(201).end();
    } catch (error) {
        next(error);
    }
}

export async function getTickets(req, res, next) {
    try {
        console.log("controlador")
        const tickets = await eventService.getTickets(req.user);
        res.status(200).json(tickets);
    } catch (error) {
        next(error);
    }
}

export async function getUsersEvents(req, res, next) {
    console.log("controlador")
    try {
        const events = await eventService.getUsersEvents(req.user);
        res.status(200).json(events);
    } catch (error) {
        next(error);
    }
}