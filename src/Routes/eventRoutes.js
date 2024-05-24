import { Router } from 'express';
import { createEvent, editEvent, deleteEvent, getAllEvents, getEventDetails, purchaseTicket, getTickets } from '../Controllers/eventController.js';
import isLoggedIn from '../Middleware/isLoggedIn.js';
import isAdmin from '../Middleware/isAdmin.js';

const router = Router();

// Endpoint para crear un nuevo evento
router.post('/events', isAdmin, createEvent);

// Endpoint para editar detalles de un evento existente
router.put('/events/:eventId', isAdmin, editEvent);

// Endpoint para eliminar un evento existente
router.delete('/events/:eventId', isAdmin, deleteEvent);

// Endpoint para obtener todos los eventos
router.get('/events', getAllEvents);

// Endpoint para obtener detalles de un evento específico
router.get('/events/:eventId', getEventDetails);

// Endpoint para comprar un ticket para un evento
router.post('/events/:eventId/tickets', isLoggedIn, purchaseTicket);

// Endpoint para obtener los tickets comprados por un usuario
router.get('/tickets', isLoggedIn, getTickets);

export default router;
