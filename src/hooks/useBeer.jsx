import {useContext}from "react";
import beerContext from "../context/BeerContext";

export default () => {
    return  useContext(beerContext);
}