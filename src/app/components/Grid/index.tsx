import styles from "./Grid.module.css";
import destinos from "@/lib/destinos";
import Card from "../Card";

export default function Grid() {  
    return(
      <div className={styles.grid}> 
        {destinos.map((destino) => (
          <Card key={destino.id} destino={destino} />
        ))}
      </div>
    )
}
