import Home from "./pages/Home";
import { BeerProvider } from "./context/BeerContext";

import {Container} from 'react-bootstrap';
function App() {
  
  return (
    <BeerProvider>
      <Container>
      <Home/>
    </Container>
    </BeerProvider>
    
  );
}

export default App;
