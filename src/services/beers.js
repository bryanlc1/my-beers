export const getBeers = async () => {
    //let url = process.env.REACT_APP_API_URL;

    const beers = await fetch('https://api.punkapi.com/v2/beers')
        .then(response => response.json())
        .catch(error => []);
    console.log('dentroo', beers)
    return beers;
}

export const filterBeer = async (beerName) => {
    const filteredBeers = await fetch(`https://api.punkapi.com/v2/beers?beer_name=${beerName}`)
        .then(response => response.json())
        .catch(error => []);
    console.log('dentroo', filteredBeers)
    return filteredBeers;
}