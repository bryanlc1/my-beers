export const getBeers = async () => {
    //let url = process.env.REACT_APP_API_URL;

    const beers = await fetch('https://api.punkapi.com/v2/beers')
        .then(response => response.json())
        .catch(error => []);
    return beers;
}

export const filterBeer = async (beerName) => {
    const filteredBeers = await fetch(`https://api.punkapi.com/v2/beers?beer_name=${beerName}`)
        .then(response => response.json())
        .catch(error => []);
    return filteredBeers;
}

export const getOneBeer = async (beerId) =>{
    const oneBeer = await fetch(`https://api.punkapi.com/v2/beers/${beerId}`)
    .then(response => response.json())
    .catch(error => []);
return oneBeer;
}