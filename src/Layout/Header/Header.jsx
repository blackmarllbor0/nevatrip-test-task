import { useDispatch, useSelector } from "react-redux";
import { mainBanner } from "../../Links/image";
import { setShowBasket } from "../../Store/slices/basketSlice";
import "./Header.scss";

export const Header = () => {
  const basket = useSelector(({ basket }) => basket.tickets);
  const showBasket = useSelector(({ basket }) => basket.show);

  const dispatch = useDispatch();

  return (
    <header>
      <div>
        <a href="#!">
          <img src={mainBanner} alt="Main page" />
        </a>
        <div>
          <article>
            <a href="#!"> Route 1 </a>
          </article>
          <article>
            <a href="#!"> Route 2 </a>
          </article>
          <article>
            <a href="#!"> Route 3 </a>
          </article>
          <article>
            <a href="#!"> Route 4 </a>
          </article>
        </div>
        <button onClick={() => dispatch(setShowBasket(!showBasket))}>
          <img
            src="https://img.icons8.com/material-outlined/344/shopping-basket-2.png"
            alt="Basket"
          />
          {basket.length}
        </button>
      </div>
    </header>
  );
};
