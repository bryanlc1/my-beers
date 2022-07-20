import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getOneBeer } from '../services/beers';

import { Row, Col } from 'react-bootstrap';
import '../styles/Detail.css'

export default function Detail() {
    let { beerId } = useParams();
    const [oneBeer, setOneBeer] = useState([]);

    useEffect(() => {
        getOneBeer(beerId).then(res => setOneBeer(res))
    }, [])

    return (
        <Row style={{marginTop:'50px'}}>
            <Col xs={12} lg={4}>
                <img className='imgDetail' src={oneBeer[0]?.image_url} alt="" />
            </Col>
            <Col xs={12} lg={8}>
                <h1>{oneBeer[0]?.name}</h1>
                <h3>{oneBeer[0]?.first_brewed}</h3>
                <p>{oneBeer[0]?.description}</p>
            </Col>
        </Row>
    )
}