import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 } from "uuid";
import {
  setShowBasket,
  addRoute,
  removeRoute,
  buyAllTickets,
} from "../../Store/slices/basketSlice";
import { setShowFinalModel } from "../../Store/slices/finalNodel";
import "./Basket.scss";

export const Basket = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const showBasket = useSelector(({ basket }) => basket.show);
  const tickets = useSelector(({ basket }) => basket.tickets);

  const dispatch = useDispatch();

  useEffect(() => {
    const price = tickets.map(({ ticketsList }) => {
      return ticketsList
        .map(({ price }) => Number(price))
        .reduce((one, two) => Number(one) + Number(two), 0);
    });
    setTotalPrice(price.reduce((one, two) => one + two, 0));
  }, [tickets]);

  const addNewRoute = (userId, newRoute) => {
    dispatch(addRoute({ userId, newRoute }));
  };

  const removeOldRoute = (userId) => {
    dispatch(removeRoute(userId));
  };

  const buyTickets = () => {
    dispatch(buyAllTickets());
    dispatch(setShowFinalModel({ show: true, tickets }));
  };

  return showBasket ? (
    <div className="basket">
      <div className="basket_header">
        <h1>Basket</h1>{" "}
        <h1 className="close" onClick={() => dispatch(setShowBasket(false))}>
          X
        </h1>
      </div>
      {!tickets.length ? (
        <h2>Your basket is empty, it's time to buy tickets</h2>
      ) : (
        <div className="basket_tickets">
          {tickets.map(({ userId, ticketsList }) => (
            <div className="user_ticket" key={userId}>
              <h2 className="basket_user_id">User id - {userId}</h2>
              <div key={ticketsList[0].ticketId} className="ticket_block">
                <span className="ticket">
                  Route - {ticketsList[0].route}, Time - {ticketsList[0].time},
                  Price - {ticketsList[0].price}
                </span>
                <div className="remote">
                  <p onClick={() => removeOldRoute(userId)}>-</p>
                  <p>{ticketsList.length}</p>
                  <p
                    onClick={() =>
                      addNewRoute(userId, {
                        ticketId: v4(),
                        route: ticketsList[0].route,
                        time: ticketsList[0].time,
                        price: ticketsList[0].price,
                      })
                    }
                  >
                    +
                  </p>
                </div>
                <h3>
                  Total price - {ticketsList.length * ticketsList[0].price}
                </h3>
              </div>
            </div>
          ))}
          <div className="buy_tickets">
            <h1>Total price - {totalPrice}</h1>
            <button onClick={buyTickets}>Buy</button>
          </div>
        </div>
      )}
    </div>
  ) : null;
};
