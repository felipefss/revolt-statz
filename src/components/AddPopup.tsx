import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

type AddPopupProps = {
  title: string;
  show: boolean;
  onHide: () => void;
  addItem: (addedItem: string) => void;
};

export default function AddPopup({
  title,
  show,
  onHide,
  addItem,
}: AddPopupProps) {
  const [addedItem, setAddedItem] = useState("");

  const handleAdd = () => {
    addItem(addedItem);
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Adicionar {title.toLowerCase()}</Form.Label>
            <Form.Control
              type="text"
              placeholder="Digite o nome aqui"
              value={addedItem}
              onChange={(event) => setAddedItem(event.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={handleAdd}>
          Adicionar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
