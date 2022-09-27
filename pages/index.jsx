import styles from '../styles/Home.module.scss'
import CardList from '../components/CardList'

export default function Home() {
  return (
    <div className={styles.Home}>
       <CardList list = {"experiences"} />  {/*cities per le card città, experieces per le card esperienze */}
    </div>
  )
}
