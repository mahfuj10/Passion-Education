import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import "./Contact.css";

// website contact components

const Contact = () => {
  const title = "About our webite";
  return (
    <div>
      <div className="googleMap">
        <iframe
          title={title}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.47339313748!2d-0.24167954844114425!3d51.52855824362355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sbd!4v1633325613758!5m2!1sen!2sbd"
          style={{ height: "400px", width: "100%" }}
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>

      <div className="row contactDetails">
        <div className="col-md-6">
          <div className="contactText">
            <h4>Address Info</h4>

            <p className="w-75">
              Feel free to talk to our online representative at any time you
              please using our Live Chat system on our website or one of the
              below instant messaging programs.
            </p>
            <p>
              Please be patient while waiting for response. Phone General
              Inquiries: +1 (012) 345 6789
            </p>

            <h4 className="mb-3">Address Info Two</h4>

            <p>
              <i class="fas fa-map-marker"></i> 15 Barnes Wallis Way, 358744,
              USA
            </p>
            <p>
              <i class="fas fa-phone-alt"></i> +1 (012) 345 6789
            </p>
            <p>
              <i class="fas fa-envelope"></i> info@yourdomain.com
            </p>
          </div>
        </div>

        <div className="col-md-6">
          <Form className="contactForm" style={{ width: "40.6rem" }}>
            <Row className="mb-3">
              <Form.Group controlId="formGridAddress2">
                <Form.Label>Name</Form.Label>
                <Form.Control />
              </Form.Group>
            </Row>

            <Form.Group as={Col} className="mb-3" controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="1234 Main St" />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Select>
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <button className="conatactBtn">Send to Meassage</button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
