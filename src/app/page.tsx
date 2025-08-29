import Image from "next/image";
import styles from "./page.module.css";


export default function Home() {
  return (
    <div className={styles.page}>
      <h1>
        Imagine um lugar onde todas as suas dúvidas sobre viagens encontram
        resposta e onde cada novo destino parece estar ao alcance de um clique.
        Bem-vindo ao GoTravel!
      </h1>
      <p>
        O GoTravel nasceu da paixão por explorar o desconhecido e da vontade de
        conectar viajantes aos cantos mais espetaculares do planeta. Somos muito
        mais do que um simples portal de informações; somos a sua bússola
        digital, guiando-o desde o primeiro momento de inspiração até o regresso
        cheio de memórias. Aqui, você encontrará: Guias Completos de Destinos:
        De metrópoles vibrantes a paraísos tropicais escondidos e retiros
        culturais. Nossos guias detalhados incluem melhores épocas para visitar,
        atrações imperdíveis, experiências autênticas, dicas de cultura local e
        muito mais. Roteiros Inteligentes: Não perca tempo! Oferecemos sugestões
        de roteiros para 1 dia, um fim de semana ou uma semana inteira de
        aventuras, ajudando você a maximizar cada momento da sua viagem. Dicas
        Práticas e Atualizadas: Informações essenciais sobre vistos, moeda
        local, transportes, segurança e etiqueta cultural. Trabalhamos para
        manter tudo rigorosamente atualizado, para que você viaje com confiança.
      </p>

      <img src="/viagem.jpg" />
    </div>
  );
}
