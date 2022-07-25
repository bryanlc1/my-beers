let url = process.env.REACT_APP_API_URL;
export const getBeers = async () => {

    const beers = await fetch(url)
    .then(response => response.json())
        .catch(error => []);
    return beers;
}

export const filterBeer = async (beerName) => {
    const filteredBeers = await fetch(`${url}?beer_name=${beerName}`)
        .then(response => response.json())
        .catch(error => []);
    return filteredBeers;
}

export const getOneBeer = async (beerId) =>{
    const oneBeer = await fetch(`${url}/${beerId}`)
    .then(response => response.json())
    .catch(error => []);
return oneBeer;
}