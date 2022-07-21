import { useEffect, useState } from "react";
import {useDebounce} from 'use-debounce';
import { useNavigate,useParams } from 'react-router-dom';

import useBeer from "../hooks/useBeer";
import { filterBeer } from "../services/beers";

import { Row,Col } from "react-bootstrap";
import '../styles/Header.css';


export default function Header(){
    const navigate = useNavigate();
    let { beerId } = useParams();


    const [nameFilterBeer,setNameFilterBeer] = useState();
    const [debounceChange]= useDebounce(nameFilterBeer,500);

    const {setArrayFilteredBeers} = useBeer();

  
    useEffect(()=>{
        if(debounceChange){
            filterBeer(debounceChange).then(res => setArrayFilteredBeers(res));
        }else{
            setArrayFilteredBeers([])
        }
    },[debounceChange])
    
    return(
        <Row className="header">
        <Col  xs={{ span: 6, offset: 4 }} lg={{ span: 6, offset: 0}} onClick={()=>navigate('/')}><h1>Punk APi</h1></Col>
        <Col xs={{ span: 6, offset: 3 }} lg={{ span: 2, offset: 4 }}>
        <input className="inputSearch" type="text" placeholder="Search" onChange={(e)=> setNameFilterBeer(e.target.value)} disabled={beerId?true:false}/>
        </Col>
      </Row>
    )
}