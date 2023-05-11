import error from './erro404.png'
import styles from './NotFound.module.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

export default function NotFound () {
    return(
       <>
         <Header />

            <section className={styles.container}>
                <h2>Ops! Conteúdo não localizado!</h2>
                <img src={error} alt="Logo de página não localizada" />
            </section>
            
            <Footer />
       </>
    );
    
}