
import React, { useState } from 'react';
import  Modal  from './Modal';

import "./Modal.css"
function Modals() {
    const [show, setShow] = useState(false);

    const closeModalHandler = () => setShow(false);
    return (
        <div >
            {show ? <div onClick={closeModalHandler} className="back-drop"></div> : null}
            <img  src="https://todaymiddleware.mims.com/resource/image/2C93CB3B-9617-4733-81D4-A68001198DD0/OriginalThumbnail/THUMBNAIL_Fotolia_59344290_Subscription_Monthly_M.jpg" onClick={() => setShow(true)} className="btn-openModal"  ></img>
            
        <Modal show={show} close={closeModalHandler}/>
      </div>
    );
}

export default Modals;