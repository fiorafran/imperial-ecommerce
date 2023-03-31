import React, { useEffect, useState } from "react";
import Card from "../Card";
import styled from "./styles";
import mock from "./mock";

const Content = () => {
  const [games, setGames] = useState(mock);

  //Fetch games for backend DB

  // const fetchGames = async () => {
  //   const response = await fetch("/api/games/");
  //   const gettedGames = await response.json();
  //   console.log("gettedGames :", gettedGames);
  //   setGames(gettedGames);
  // };

  // useEffect(() => {
  //   fetchGames();
  // }, []);

  return (
    <styled.Content>
      {games?.length && games.map((game) => <Card key={game.appId} {...game} />)}
    </styled.Content>
  );
};

export default Content;
