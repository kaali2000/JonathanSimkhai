import { useState } from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import product1 from "../images/img1.png";
import "./style.css";

const DetailsPage = () => {
  const [key, setKey] = useState("details");
  return (
    <Container className="my-3">
      <Card className="border-0 position-relative flex-row">
        <Card.Body className="w-50 text-left mt-5">
          <Card.Title>
            <Tabs
              id="tabId"
              activeKey={key}
              onSelect={(k) => setKey(k)}
              className="mb-3"
            >
              <Tab eventKey="details" title="DETAILS">
                The Forte Lurex Linen Viscose Jacket in Mother of Pearl features 
                lunar lavishness by night and by day: a blazer in a linen blend 
                shot with lurex for a shimmering surface that shines like a star 
                in the sky, it has a straight fit with well defined shoulders and 
                a shawl collar culminating in a button and has been flawlessly finished 
                with three jet pockets with a sartorial feel.
              </Tab>
              <Tab eventKey="delivery" title="DELIVERY">
                Delivery Content
              </Tab>
              <Tab eventKey="fit" title="FIT">
                Fit Content
              </Tab>
              <Tab eventKey="share" title="SHARE">
                Share Content
              </Tab>
            </Tabs>
          </Card.Title>
        </Card.Body>
        <img alt="product" src={product1} />
        <Card.Body className="w-50 text-left mt-5">
          <Card.Title>
            <h2>JONATHAN SIMKHAI</h2>
            <div>Lurex Linen Viscose Jacket in Conchiglia</div>
            <div><b>$225</b></div>
            <h5>COLOR CONCHIGLIA</h5>
            <img alt="product" src={product1} className="thumbNailImg" />
            <img alt="product" src={product1} className="thumbNailImg" />
            <div class="parent">
              <div class="child1">
                SIZE L
              </div>
              <div class="child2">
                SIZE GUIDE
              </div>
            </div>
            <div class="rowSize">
              <div class="column">XS</div>
              <div class="column">S</div>
              <div class="column">M</div>
              <div class="column">L</div>
              <div class="column">XXL</div>
            </div>
            <button class="button button1">ADD TO BAG</button>
          </Card.Title>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default DetailsPage;
