import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

type AddPopupProps = {
  show: boolean;
  onHide: () => void;
};

export default function AddPopup({ show, onHide }: AddPopupProps) {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Title here</Modal.Title>
      </Modal.Header>

      <Modal.Body>....</Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={onHide}>
          Save changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
