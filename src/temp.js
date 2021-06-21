import {React, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export default function Temp() {
    const values = [true, 'sm-down', 'md-down', 'lg-down', 'xl-down', 'xxl-down'];
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);
    const [show5, setShow5] = useState(false);
    const [show6, setShow6] = useState(false);
  
    function handleShow(breakpoint) {
      setShow6(true);
      
    }
  
    return (
      <>
        {values.map((v, idx) => (
          <img src='work6.jpg' key={idx} className="me-2" onClick={() => handleShow(v)}/>

        ))}
        <Modal show={show6}   scrollable={true} size={'xl'} onHide={() => setShow6(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Modal 1</Modal.Title>
          </Modal.Header>
          <Modal.Body>Modal body 1
          </Modal.Body>
        </Modal>

        <Modal show={show1}   scrollable={true} size={'xl'} onHide={() => setShow1(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Modal 2</Modal.Title>
          </Modal.Header>
          <Modal.Body>Modal body 2
          </Modal.Body>
        </Modal>

        <Modal show={show2}   scrollable={true} size={'xl'} onHide={() => setShow2(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Modal 3 </Modal.Title>
          </Modal.Header>
          <Modal.Body>Modal body 3
          </Modal.Body>
        </Modal>

        <Modal show={show3}   scrollable={true} size={'xl'} onHide={() => setShow3(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Modal 4</Modal.Title>
          </Modal.Header>
          <Modal.Body>Modal body 4
          </Modal.Body>
        </Modal>

        <Modal show={show4}   scrollable={true} size={'xl'} onHide={() => setShow4(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Modal 5</Modal.Title>
          </Modal.Header>
          <Modal.Body>Modal body 5
          </Modal.Body>
        </Modal>

        <Modal show={show5}   scrollable={true} size={'xl'} onHide={() => setShow5(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Modal6</Modal.Title>
          </Modal.Header>
          <Modal.Body>Modal body 6
          </Modal.Body>
        </Modal>
      </>
    );
  }
  