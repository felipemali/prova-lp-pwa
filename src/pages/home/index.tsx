import { useEffect } from "react";
import { useHero } from "../../getHero";
import styles from "./Home.module.css";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

export const Home = () => {
  const { getHero, hero } = useHero();

  useEffect(() => {
    getHero();
  }, []);
  return (
    <>
      <Header />
      <div className={styles.home}>
        <h2 className={styles.name}>{hero?.name}</h2>
        <img
          className={styles.image}
          src={hero?.image}
          alt={`imagem ${hero?.name}`}
        />
        <div className={styles.descriptionContainer}>
          <p className={styles.description}>{hero?.description}</p>
        </div>
      </div>
      <Footer />
    </>
  );
};
