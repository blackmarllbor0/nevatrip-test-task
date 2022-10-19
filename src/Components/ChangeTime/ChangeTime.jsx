import { useDispatch, useSelector } from "react-redux";
import { setModel } from "../../Store/slices/modelSlice";
import { setSelect } from "../../Store/slices/selectSlice";
import { addTicker } from "../../Store/slices/basketSlice";
import { v4 } from "uuid";
import { useState } from "react";
import { backRoute, changePath, TICKET_FROM_A_TO_B_AND_BACK } from "./const";
import "./ChangeTime.scss";

export const ChangeTime = () => {
  const [backTicket, setBackTicket] = useState(false);
  const [from, setFrom] = useState([]);

  const route = useSelector(({ route }) => route.route);

  const dispatch = useDispatch();

  const setModelOpen = () => {
    dispatch(setModel(false));
    dispatch(setSelect(true));
  };

  const selectTicket = ({ target }, route) => {
    const { textContent } = target;
    const time = textContent.slice(0, 5);
    if (route !== TICKET_FROM_A_TO_B_AND_BACK && !backTicket) {
      const newTicket = {
        userId: v4(),
        ticketsList: [
          {
            ticketId: v4(),
            route,
            time,
            price: 1500,
          },
        ],
      };
      dispatch(addTicker(newTicket));
      dispatch(setModel(false));
    }
    if (route === TICKET_FROM_A_TO_B_AND_BACK) {
      setFrom([time, route]);
      setBackTicket(true);
    }
    if (backTicket) {
      const back = +time.slice(0, 2) + time.slice(3);
      const to = +from[0].slice(0, 2) + from[0].slice(3);

      if (back - to >= 200) {
        const newTicket = {
          userId: v4(),
          ticketsList: [
            {
              ticketId: v4(),
              route: from[1],
              time: from[0],
              price: 1500,
            },
            {
              ticketId: v4(),
              route: "From B to A",
              time,
              price: 1250,
            },
          ],
        };
        dispatch(addTicker(newTicket));
        dispatch(setModel(false));
      } else {
        target.textContent = "The ticket does not fit you in time";
      }
    }
  };

  return (
    <section className="change_time_model">
      {!backTicket
        ? changePath(route).map((time, index) => (
            <article
              key={index}
              onClick={(event) => selectTicket(event, route)}
            >
              {time}
            </article>
          ))
        : backRoute.map((time, index) => (
            <article key={index} onClick={(event) => selectTicket(event, time)}>
              {time}
            </article>
          ))}
      <article className="back_to_change_path" onClick={setModelOpen}>
        Return to selection
      </article>
    </section>
  );
};
