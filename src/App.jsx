import { useEffect, useState } from "react";

import Header from "./components/Header";
import CardBeer from "./components/CardBeer";
import { getBeers } from "./services/beers";

import { Container,Row,Col } from 'react-bootstrap';
import './App.css';

function App() {
  const [beers, setBeers] = useState();

  useEffect(() => {
    getBeers().then(res => setBeers(res));
  }, []);

  const allBeers = beers?.map(createCardsBeers);

  function createCardsBeers(item, indx) {
    return (
      <Col>
      <CardBeer key={indx} beer={item} />
      </Col>
    )
  }


  return (
    <Container>
      <Header />
      <Row xs={1} md={4} className="g-4">
        {allBeers}
      </Row>
    </Container>
  );
}

export default App;
