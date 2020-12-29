import React from 'react';
import { Container, iframe, Row, Col } from 'react-bootstrap';
import '../../App.css';
import Footer from '../Footer';



export default function Contact() {
    return (
        <>
            <Container >
                <Row>
                    <Col md={6}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1549.033558929959!2d88.35208906391023!3d22.569995922262237!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277af7b58c38f%3A0x36a425b19ed612f4!2sBentinck%20St%2C%20Kolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1609159945635!5m2!1sen!2sin" height="300px" width="550px" title="MyMaps" />
                    </Col>
                    <Col md={6}>
                        <img src="/images/contact us.jpg" alt="MtImage" />
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>

    )
}
