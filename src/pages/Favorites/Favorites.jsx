import styles from './Favorites.module.css'
import Header from '../../components/Header/Header'
import Container from '../../components/Container/Container'
import Footer from '../../components/Footer/Footer'
import { useFavoriteContext } from '../../contexts/Favorites'
import VideoList from './../../components/VideoList/VideoList';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop'

export default function Favorites () {

  const { favorite } = useFavoriteContext()

  return (
    <>
      <Header />

        <Container>
          <section className={styles.favorites}>
          <h2>Meus Favoritos</h2>
            { <VideoList videos={favorite} emptyHeading="Sem vídeos favoritos."/> }
          </section>
        </Container>

        <ScrollToTop />
    
      <Footer />
    </>
  )
}