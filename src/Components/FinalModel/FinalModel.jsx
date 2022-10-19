import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setShowFinalModel } from "../../Store/slices/finalNodel";
import "./FinalModel.scss";

export const FinalModel = () => {
  const show = useSelector(({ finalModel }) => finalModel.show);
  const tickets = useSelector(({ finalModel }) => finalModel.tickets);

  const dispatch = useDispatch();

  useEffect(() => {
    if (show) {
      setTimeout(() => {
        dispatch(setShowFinalModel({ show: false, tickets: [] }));
      }, 3000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show]);

  return show ? (
    <section className="final_model">
      {tickets.map(({ userId, ticketsList }) => (
        <div key={userId} className="final_model_">
          UserId - {userId}
          <div key={ticketsList[0].ticketId} className="final_model_ticket">
            You have chosen {ticketsList.length} tickets on the route{" "}
            {ticketsList[0].route} for{" "}
            {ticketsList[0].price * ticketsList.length}r. This trip will take
            you 120 minutes. The boat departs at
            {" " + ticketsList[0].time}, and will arrive at
            {`${
              +ticketsList[0].time.slice(0, 2) + 2
            }:${ticketsList[0].time.slice(3)}`}
          </div>
        </div>
      ))}
    </section>
  ) : null;
};
