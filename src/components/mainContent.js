import React from 'react'
/* import product_card from './data/product_data'; */
import './mainContent.css';
/* import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap'; */
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row, Col, Container
} from 'reactstrap';
/* const MainContent = () => { */
/* console.log(product_card) */
/*   const listItems = product_card.map((item) =>
      <div className="card" key={item.id}>
          <div className="card_img">
              <img classname="Image" src={item.thumb} height="250px" width="375px" alt="opps" />
          </div>
          <div className="card_header">
              <h2>{item.product_name}</h2>
              <p>{item.description}</p>
              <p className="price">{item.Price}<span>{item.currency}</span></p>
              <div className="btn">BUY</div>
          </div>
      </div>
  );
  return (
      <div className="container">
          <div className="main_content">
              <h3>Leds</h3>
              {listItems}
          </div>
      </div>
  )
} */
/*   const cardInfo = [
      { image: "/images/10.jpg", tite: "Led", text: "350" },
      { image: "/images/10.jpg", tite: "Tube", text: "450" },
      { image: "/images/10.jpg", tite: "Mercury", text: "200" },
      { image: "/images/10.jpg", tite: "Lamp Post", text: "545" }, */
/*   { image: "/images/10.jpg", tite: "Tail", text: "451" },
  { image: "/images/10.jpg", tite: "Rail", text: "250" },
  { image: "/images/10.jpg", tite: "Mail", text: "200" } */

/*    const renderCard = (card, index) => {
       return (
           <Card style={{ width: '18rem' }} key={index} className="box">
               <Card.Img variant="top" src={card.image} alt="oops" />
               <Card.Body>
                   <Card.Title>{card.title}</Card.Title>
                   <Card.Text>
                       {card.text}
                   </Card.Text>
                   <Button variant="primary">Go somewhere</Button>
               </Card.Body>
           </Card>
       )
   } */
const MainContent = () => {
    return (
        <div className="App">
            <Container>
                <Row>
                    <Col md={3}>
                        <Card>
                            <CardImg top width="30%" src="/images/cob_downlight.jpg" margin="0px" padding="0px" alt="Card image cap" />
                            <CardBody>
                                <CardTitle tag="h5">Card title</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                <Button>Button</Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card>
                            <CardImg top width="30%" src="/images/cob2.png" alt="Card image cap" />
                            <CardBody>
                                <CardTitle tag="h5">Card title</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                <Button>Button</Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card>
                            <CardImg top width="30%" src="/images/track_light.jpg" alt="Card image cap" />
                            <CardBody>
                                <CardTitle tag="h5">Card title</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                <Button>Button</Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card>
                            <CardImg top width="30%" src="/images/street_light.png" alt="Card image cap" />
                            <CardBody>
                                <CardTitle tag="h5">Card title</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                <Button>Button</Button>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col md={3}>
                        <Card>
                            <CardImg top width="30%" src="/images/street_down.png" alt="Card image cap" />
                            <CardBody>
                                <CardTitle tag="h5">Card title</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                <Button>Button</Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card>
                            <CardImg top width="30%" src="/images/remote.png" alt="Card image cap" />
                            <CardBody>
                                <CardTitle tag="h5">Card title</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                <Button>Button</Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card>
                            <CardImg top width="30%" src="/images/led-panel.png" alt="Card image cap" />
                            <CardBody>
                                <CardTitle tag="h5">Card title</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                <Button>Button</Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card>
                            <CardImg top width="30%" src="/images/desk3.png" alt="Card image cap" />
                            <CardBody>
                                <CardTitle tag="h5">Card title</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                <Button>Button</Button>
                            </CardBody>
                        </Card>
                    </Col>

                </Row>
            </Container>
        </div>
    )

}
export default MainContent;

