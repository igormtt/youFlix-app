import Header from '../../components/Header/Header'
import styles from './Search.module.css'
import Footer from './../../components/Footer/Footer';
import Container from './../../components/Container/Container';
import videos from '../../json/videos.json'
import SearchVideoList from '../../components/SearchVideoList/SearchVideoList';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';


export default function Search () {
  return (
    <>
      <Header />

      <Container>
          
        <section className={styles.search}>
          
          <SearchVideoList  videos={videos}/>

        </section>

      </Container>

      <ScrollToTop />

      <Footer />
    </>
    )
}