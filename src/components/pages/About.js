import React from 'react';
import '../../App.css';
import Image from 'react-bootstrap/Image'
import { Container } from 'react-bootstrap';
import Footer from '../Footer';
import './About.css';

export default function About() {
    return (
        <>
            <Container className="container" >
                <Image src="/images/about.jpg" fluid />
                <p className="para">Chromme Lights LLP is a professionally managed company focused on aesthetic lighting techniques constant updation of product designs incorporated with raw materials and components
                of highest quality gives our product a significant edge over other market brands.
                Our products are designed and manufactured under direct supervision of qualified designers and technicians
                following stringent testing procedures for reliable performance and durability.
                It is for this reason that we have been able to create a high brand value among our customers.</p>
            </Container>
            <Footer />
        </>
    )
}