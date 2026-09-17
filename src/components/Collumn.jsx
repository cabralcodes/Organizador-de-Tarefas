import Card from "./Card";
import styles from "./collumn.module.css"
function Collumn({name}){

    return <>
    <div className={styles.collumn}>
        <header>{name}</header>
        <div>
        <Card></Card>
        <button>AdicionarTarefa</button>
        </div>
    </div>
    
    </>
}
export default Collumn;
