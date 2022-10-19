import { createSlice } from "@reduxjs/toolkit";

export const basketSlice = createSlice({
    name: 'basket',
    initialState: {
        tickets: [],
        show: false
    },
    reducers: {
        addTicker(state, action) {
            state.tickets.push(action.payload);
        },
        removeTicker(state, action) {
            state.tickets = state.tickets.filter(ticket => ticket.id !== action.payload.id);
        },
        setShowBasket(state, action) {
            state.show = action.payload;
        },
        addRoute(state, action) {
            state.tickets.forEach(({ userId, ticketsList }) => {
                if (action.payload.userId === userId) {
                    ticketsList.push(action.payload.newRoute);
                }
            })
        },
        removeRoute(state, action) {
            state.tickets.forEach(({ userId, ticketsList }) => {
                if (action.payload === userId && ticketsList.length > 1) {
                    ticketsList.pop();
                }
                if (action.payload === userId && ticketsList.length === 1) {
                    state.tickets = state.tickets.filter(({userId}) => userId !== action.payload)
                }
            })
        },
        buyAllTickets(state) {
            state.show = false;
            state.tickets = [];
        }
    }
});

export const { addTicker, removeTicker, setShowBasket, addRoute, removeRoute, buyAllTickets } = basketSlice.actions;
export default basketSlice.reducer;