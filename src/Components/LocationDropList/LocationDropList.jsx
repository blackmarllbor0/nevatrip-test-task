import { useDispatch, useSelector } from "react-redux";
import { setModel } from "../../Store/slices/modelSlice";
import { setRoute } from "../../Store/slices/routeSlice";
import { setSelect } from "../../Store/slices/selectSlice";
import "./LocationDropList.scss";

export const LocationDropList = () => {
  const route = useSelector(({ route }) => route.route);
  const dispatch = useDispatch();

  const paths = ["From A to B", "From B to A", "From A to B and back to A"];

  const changeLocation = ({ target }) => {
    const path = target.outerText;
    dispatch(setRoute(path));
    dispatch(setModel(true));
    if (!(path === route)) {
      dispatch(setSelect(false));
    }
  };

  return (
    <>
      <section className="section_drop_list">
        {paths.map((path, index) => (
          <article
            className="drop_list_choise"
            onClick={(event) => changeLocation(event)}
            key={index}
          >
            {path}
          </article>
        ))}
      </section>
    </>
  );
};
