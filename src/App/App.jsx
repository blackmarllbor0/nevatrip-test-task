import "./App.scss";
import { Header } from "../Layout/Header/Header";
import { Footer } from "../Layout/Footer/Footer";
import { BuyTicket } from "../Components/BayTicket/BuyTicket";

export const App = () => {
  return (
    <>
      <Header />
      <BuyTicket />
      <Footer />
    </>
  );
};
