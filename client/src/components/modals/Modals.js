
import React, { useState } from 'react';
import  Modal  from './Modal';
import "./Modal.css"
function Modals() {
    const [show, setShow] = useState(false);

    const closeModalHandler = () => setShow(false);
    return (
        <div>
            {show ? <div onClick={closeModalHandler} className="back-drop"></div> : null}
        <button onClick={() => setShow(true)} className="btn-openModal">Open Modal</button>
        <Modal show={show} close={closeModalHandler}/>
      </div>
    );
}

export default Modals;