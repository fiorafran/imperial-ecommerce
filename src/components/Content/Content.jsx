import React, { useEffect, useState } from "react";
import Card from "../Card";
import styled from "./styles";
import mock from "./mock";
import { usePagesStore } from "../../stores/pagesStorage";
import Loader from "../Loader/Loader";

const Content = () => {
  const [games, setGames] = useState();
  const {
    games: gamesCache,
    setGames: setGamesCache,
    isLoading,
    setLoading,
  } = usePagesStore();
  //Fetch games for backend DB

  const fetchGames = async () => {
    if (gamesCache?.length) return setGames(gamesCache);
    const response = await fetch("/api/games/");
    const gettedGames = await response.json();
    setGames(gettedGames);
    setGamesCache(gettedGames);
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => fetchGames(), 5000);
  }, []);

  useEffect(() => {
    if (games?.length) setLoading(false);
  }, [games]);

  return isLoading ? (
    <Loader />
  ) : (
    <styled.Content>
      {games?.length &&
        games.map((game) => <Card key={game.appId} {...game} />)}
    </styled.Content>
  );
};

export default Content;
