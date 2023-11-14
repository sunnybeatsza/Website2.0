// Importing useState hook from React to manage component state
import { useState } from "react";

// Importing Button and Modal components from react-bootstrap library
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

// Popup component definition
function Popup() {
  // State to manage the visibility of the modal
  const [show, setShow] = useState(false);

  // Function to close the modal
  const handleClose = () => setShow(false);

  // Function to show the modal
  const handleShow = () => setShow(true);

  // Rendering the Popup component
  return (
    <>
      {/* Button to trigger the display of the modal */}
      <Button variant="primary" onClick={handleShow}>
        Help
      </Button>

      {/* Modal component with title, body, and footer */}
      <Modal show={show} onHide={handleClose}>
        {/* Modal header with close button */}
        <Modal.Header closeButton>
          <Modal.Title>Shipping</Modal.Title>
        </Modal.Header>

        {/* Modal body with shipping information */}
        <Modal.Body>
          Express Shipping: Elevate your style swiftly with Express Shipping –
          receive your luxury items in just 2 business days. Because luxury
          shouldn't wait.
          <br />
          Standard Shipping: Embrace timely elegance with our Standard Shipping,
          delivering your exquisite selections in 5 business days. Elevate your
          style at your own pace.
        </Modal.Body>

        {/* Modal footer with a close button */}
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

// Exporting the Popup component as the default export
export default Popup;
