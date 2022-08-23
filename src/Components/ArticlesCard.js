import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useState } from "react";

import Modal from "react-bootstrap/Modal";
const ArticlesCard = ({ el }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{el.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {el.location}
          </Card.Subtitle>
          <Card.Text>{el.description}</Card.Text>
          <Card.Link href="#">{el.price}</Card.Link>
          <Button variant="danger">Delete</Button>
          <Button variant="warning" onClick={handleShow}>
            Edit
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Woohoo, you're reading this text in a modal!
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ArticlesCard;
