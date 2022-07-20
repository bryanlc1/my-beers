import { Outlet } from "react-router-dom"

import { BeerProvider } from "./context/BeerContext";

import {Container} from 'react-bootstrap';
function App() {
  
  return (
    <BeerProvider>
      <Container>
      <Outlet/>
    </Container>
    </BeerProvider>
    
  );
}

export default App;
