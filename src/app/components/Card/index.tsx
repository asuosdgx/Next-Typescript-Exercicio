import styles from "./Card.module.css";
import Link from "next/link";

import { Destino } from "@/types/destinos";

type CardProps = {
  destino: Destino;
};

export default function Card({ destino }: CardProps) {
  return (
    <div className={styles.card}>
      <Link href={`/destinos/${destino.id}`}>
        <h2>{destino.nome}</h2>
      </Link>
      <p>{destino.descricao}</p>
      <img src={destino.imagem} alt={destino.nome} />
    </div>
  );
}
