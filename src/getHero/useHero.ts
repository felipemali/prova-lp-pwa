import { useState } from "react";
import { heroes } from "../helpers/heroes";

export type Hero = {
  name: string;
  description: string;
  image: string;
};

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
