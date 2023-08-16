import { ticketsRepository } from "../../../repositories/ticket.repository.js";
import { ticketService } from "../../../services/purchease.service.js";

export async function handlePost(req, res, next) {
  req.logger.http("🌙 inside post ticket");
  try {
    const ticket = await ticketService.createTicket(req.body);
    res.status(200).json(ticket);
  } catch (error) {
    req.logger.error(`🌙 post ticket fail ${error.message}`);
    next(error);
  }
}

export async function handleGet(req, res) {
  req.logger.http("🌙 inside get tickets");
  const ticket = await ticketsRepository.findOneById(req.params.id);
  return ticket;
}

export async function handlePut(req, res) {
  // TODO borrado logico
}
