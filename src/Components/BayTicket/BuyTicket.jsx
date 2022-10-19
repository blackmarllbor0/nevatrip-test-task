import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ChangeTime } from "../ChangeTime/ChangeTime";
import { LocationDropList } from "../LocationDropList/LocationDropList";
import { setSelect } from "../../Store/slices/selectSlice";
import "./BuyTicket.scss";
import { Basket } from "../Basket/Basket";
import { FinalModel } from "../FinalModel/FinalModel";

export const BuyTicket = () => {
  const select = useSelector(({ select }) => select.select);
  const model = useSelector(({ model }) => model.model);
  const dispatch = useDispatch();

  useEffect(() => {
    if (select) {
      setTimeout(() => {
        dispatch(setSelect(false));
      }, 7500);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [select]);

  const changeOpenSelect = () => {
    dispatch(setSelect(!select));
  };

  return (
    <section className="drop_list">
      <div>
        <h1>Chooise a direction</h1>
        <article className="location_drop_list" onClick={changeOpenSelect}>
          <span>Select ticket</span>
        </article>
        {select ? <LocationDropList /> : null}
        {model ? <ChangeTime /> : null}
      </div>
      <Basket />
      <FinalModel />
    </section>
  );
};
