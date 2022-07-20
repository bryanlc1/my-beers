import { createContext } from 'react'
import { useState } from 'react'

const beerContext = createContext()

export const BeerProvider = ({ children }) => {
    const [arrayfilteredBeers,setArrayFilteredBeers] = useState([]);
    const [beers, setBeers] = useState([]);
	
	return (
		<beerContext.Provider value={{beers, setBeers,arrayfilteredBeers,setArrayFilteredBeers}}>
			{children}
		</beerContext.Provider>
	)
}

export default beerContext;