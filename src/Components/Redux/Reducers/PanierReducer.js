import {v4 as uuid} from 'uuid';


const INITIAL_STATE = {
  tickets: [],
};

export default function PanierReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'addP':
      console.log('Adding ticket:', action.payload);
      const newTicket = {
        id: uuid(),
        departCity: action.payload.departCity,
        returnCity: action.payload.returnCity,
        timeDepart: action.payload.timeDepart,
        timeArrive: action.payload.timeArrive,
        price: action.payload.price,
        date: action.payload.date,
      };
      console.log('New Ticket:', newTicket);
      return {
        ...state,
        tickets: [...state.tickets, newTicket],
      };

      case 'deleteP':
      const ticketToDeleteId = action.payload.id;
      const updatedTickets = state.tickets.filter(ticket => ticket.id !== ticketToDeleteId);

      return {
        ...state,
        tickets: updatedTickets,
      };

    default:
      return state;
  }
}
