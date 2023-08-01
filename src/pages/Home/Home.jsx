import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { isPlayerNameStored } from "./../../utils/utilsPlayer";

import HomeView from "./view";

const Home = () => {
  const [playerName, setPlayerName] = useState("");
  const navigate = useNavigate();
  const urlGameBoard = "/game";

  useEffect(() => {
    if (isPlayerNameStored()) {
      navigate(urlGameBoard);
    }
  }, [navigate]);

  const handleChange = ({ target }) => {
    const { value } = target;
    setPlayerName(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (playerName.trim() === "") {
      return;
    }

    localStorage.setItem("playerName", playerName);

    if (localStorage.getItem("playerName")) {
      navigate(urlGameBoard);
    }
  };

  const props = {
    playerName,
    handleChange,
    handleSubmit,
  };

  return <HomeView {...props} />;
};

export default Home;
