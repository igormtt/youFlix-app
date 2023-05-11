import Banner from "../../components/Banner/Banner";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Container from "../../components/Container/Container";
import Card from "../../components/Card/Card";
import Category, { categories, filterCategory } from './../../components/Category/Category';
import Carousel from "../../components/Carousel/Carousel";
import ScrollToTop from './../../components/ScrollToTop/ScrollToTop';


export default function Home() {

  return (
   <>
    <Header />
    <Banner image='home' />
    <Container>

      {
        categories.map((category, index) => 
          <Category category={category} key={index}>
          <Carousel>
            { filterCategory(index).map(( { id } ) =>  <Card id={id} key={id}/> )}
          </Carousel>
       </Category> 
        )
      }


    </Container>

    <ScrollToTop />

    <Footer />
   </>
  );
}
