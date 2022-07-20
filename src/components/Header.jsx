import { Row,Col } from "react-bootstrap";
import '../styles/Header.css';

export default function Header(){
    return(
        <Row className="header">
        <Col  xs={{ span: 6, offset: 4 }} lg={{ span: 6, offset: 0}}><h1>Punk APi</h1></Col>
        <Col xs={{ span: 6, offset: 3 }} lg={{ span: 2, offset: 4 }}>
        <input className="inputSearch" type="text" placeholder="Search"/>
        </Col>
      </Row>
    )
}