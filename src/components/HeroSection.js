import React from 'react';
import '../App.css';
import { Container, UncontrolledCarousel } from 'reactstrap';



const items = [
    {
        src: '/images/street_light.png',
        altText: 'Slide 1',
        caption: 'Slide 1',
        header: 'Slide 1 Header',
        key: '1'
    },
    {
        src: '/images/street_light.png',
        altText: 'Slide 2',
        caption: 'Slide 2',
        header: 'Slide 2 Header',
        key: '2'
    },
    {
        src: '/images/street_light.png',
        altText: 'Slide 3',
        caption: 'Slide 3',
        header: 'Slide 3 Header',
        key: '3'
    }
];

const HeroSection = () =>
    <Container>
        <UncontrolledCarousel items={items} />
    </Container>

export default HeroSection;

