import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Popup() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Help
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Shipping</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Express Shipping: Elevate your style swiftly with Express Shipping –
          receive your luxury items in just 2 business days. Because luxury
          shouldn't wait.
          <br />
          Standard Shipping: Embrace timely elegance with our Standard Shipping,
          delivering your exquisite selections in 5 business days. Elevate your
          style at your own pace.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Popup;
