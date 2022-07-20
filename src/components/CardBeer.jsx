import {Card} from 'react-bootstrap';
import '../styles/CardBeer.css';
export default function CardBeer({beer}) {
    return (
        <Card style={{ height: '450px'}}>
            <Card.Img className='imgCard' src={beer.image_url} />
            <Card.Body>
                <Card.Title>{beer.name}</Card.Title>
                <Card.Subtitle>{beer.first_brewed}</Card.Subtitle>
                <Card.Text className='textCard'>
                    {beer.description}
                </Card.Text>
            </Card.Body>

        </Card>
    )
}