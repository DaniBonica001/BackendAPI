import { Router } from 'express';
import { createEvent, editEvent, deleteEvent, getAllEvents, getEventDetails, purchaseTicket, getTickets, getUsersEvents } from '../Controllers/eventController.js';
import isLoggedIn from '../Middleware/isLoggedIn.js';
import isAdmin from '../Middleware/isAdmin.js';

const router = Router();

// Endpoint para crear un nuevo evento
router.post('/', isAdmin, createEvent);

// Endpoint para editar detalles de un evento existente
router.put('/:eventId', isAdmin, editEvent);

// Endpoint para eliminar un evento existente
router.delete('/:eventId', isAdmin, deleteEvent);

// Endpoint para obtener todos los eventos
router.get('/', isLoggedIn, getAllEvents);

// Endpoint para obtener detalles de un evento específico
router.get('/:eventId', isLoggedIn, getEventDetails);

// Endpoint para comprar un ticket para un evento
router.post('/:eventId/tickets', isLoggedIn, purchaseTicket);

// Endpoint para obtener los tickets comprados por un usuario
router.get('/tickets', isLoggedIn, getTickets);

// Endpoint para obtener los eventos de un usuario
router.get('/user-events', isLoggedIn, getUsersEvents);

export default router;
