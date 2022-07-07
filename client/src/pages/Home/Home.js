import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import banner from '../../assets/images/geekWalletBannerSmall.png'
import MainDashboard from "../../components/MainDashboard/MainDashboard";
import '../Home/style.css';
import Cart from "../../cart-comp/Cart";
import Footer from "../Footer";
// import '../../assets/Contact.css';

export default function Home() {
  return (
    <Container>
      <Row>
        <Card className="bannerCard" style={{ border: "none" }}>
          <Card.Img variant="top" src={banner} />
        </Card>
      </Row>
      <br/>
      
      <MainDashboard/>
      <Footer /> 
    </Container>
  );
}
