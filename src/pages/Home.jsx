import { useEffect } from "react";

import CardBeer from "../components/CardBeer";
import { getBeers } from "../services/beers";
import useBeer from "../hooks/useBeer";

import { Container,Row,Col } from 'react-bootstrap';

export default function Home(){
    const {beers,setBeers,arrayfilteredBeers} = useBeer();
  
    useEffect(() => {
      getBeers().then(res => setBeers(res));
    }, []);
  
    const allBeers = beers?.map(createCardsBeers);
    const filteredBeers = arrayfilteredBeers?.map(createCardsBeers)
  
    function createCardsBeers(item, indx) {
      return (
        <Col key={indx}>
        <CardBeer key={indx} beer={item} />
        </Col>
      )
    }

    return (
      
        <Container>
        <Row xs={1} md={4} className="g-4">
          {filteredBeers.length === 0 ?allBeers: filteredBeers}
        </Row>
      </Container>
    );
}