/* eslint-disable react/prop-types */
import Header from '../../components/Header/Header';
import styles from './Watch.module.css'
import Container from './../../components/Container/Container';
import Footer from './../../components/Footer/Footer';
import { useParams } from 'react-router-dom';
import videos from '../../json/videos.json'
import NotFound from './../PageNotFound/NotFound';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';

export default function Watch() {

    const params = useParams()
    const video = videos.find((video) => { return video.id === params.id})

    if(!video) { return <NotFound /> }

    return(
        <>
            <Header />

            <Container>
            
                <section className={styles.watch}>
                    <iframe  width="854" height="480" src={`https://www.youtube.com/embed/${video.id}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </section>
            
            </Container>

            <ScrollToTop />

            <Footer />

        </>
    );
}