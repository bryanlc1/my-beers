import { useEffect, useState } from "react";
import {useDebounce} from 'use-debounce';

import { filterBeer } from "../services/beers";
import { Row,Col } from "react-bootstrap";
import '../styles/Header.css';


export default function Header(){
    const [nameFilterBeer,setNameFilterBeer] = useState();

    const [filteredBeers,setFilteredBeers] = useState([]);

    const [debounceChange]= useDebounce(nameFilterBeer,500);

  
    useEffect(()=>{
        if(debounceChange) filterBeer(debounceChange).then(res => setFilteredBeers(res));
    },[debounceChange])
    
    console.log(filteredBeers);
    return(
        <Row className="header">
        <Col  xs={{ span: 6, offset: 4 }} lg={{ span: 6, offset: 0}}><h1>Punk APi</h1></Col>
        <Col xs={{ span: 6, offset: 3 }} lg={{ span: 2, offset: 4 }}>
        <input className="inputSearch" type="text" placeholder="Search" onChange={(e)=> setNameFilterBeer(e.target.value)}/>
        </Col>
      </Row>
    )
}