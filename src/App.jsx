import { Outlet } from "react-router-dom"

import { BeerProvider } from "./context/BeerContext";

import {Container} from 'react-bootstrap';
import Header from "./components/Header";
function App() {
  
  return (
    <BeerProvider>
      <Container>
      <Header/>
      <Outlet/>
    </Container>
    </BeerProvider>
    
  );
}

export default App;
