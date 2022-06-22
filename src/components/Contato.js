import React from "react";
import styles from "./Contato.module.css";
import foto from "../img/contato.jpg";
import Head from "./Head";

const Contato = () => {
  return (
    <section className={styles.contato + " animeLeft"}>
      <Head title="Ranek | Contato" description="Entre em contato" />
      <img src={foto} alt="Máquina de escrever" />
      <div>
        <h1>Contato</h1>
        <ul className={styles.dados}>
          <li>leo.chermaut@gmail.com</li>
          <li>(021)96660-9888</li>
          <li>Teresópolis-RJ</li>
        </ul>
      </div>
    </section>
  );
};

export default Contato;
