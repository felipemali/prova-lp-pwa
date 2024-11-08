import { useState } from "react";
import { heroes } from "../helpers/heroes";
import { Hero } from "../models/Hero";



export const useHero = () => {
  const [hero, setHero] = useState<Hero>();

  const getHero = () => {
    const indexRandom = Math.floor(Math.random() * heroes.length);
    const newHero = heroes[indexRandom];
    setHero(newHero);
  };

  return {
    getHero,
    hero,
  };
};
