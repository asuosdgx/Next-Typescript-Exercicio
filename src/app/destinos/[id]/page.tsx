import destinos from "@/lib/destinos";
import styles from "./page.module.css";

export default function DestinoPage({ params }: { params: { id: string } }) {
  const destino = destinos.find((d) => d.id === Number(params.id));
  if (!destino) return <div>Destino não encontrado</div>;

  return (
    <div className={styles.page}>
      <h1>{destino.nome}</h1>
      <p>{destino.descricao}</p>
      <img src={destino.imagem} alt={destino.nome} />
      <p>{destino.detalhes}</p>
    </div>
  );
}
