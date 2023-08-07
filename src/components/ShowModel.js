import React from 'react';

const ShowModel = ({showModal,showProp,setShowProp}) => {

    return(
        <div>
            <button className="show-btn" onClick={() => setShowProp(true)}>Show Modal</button>
            {
                showProp && showModal.container
            }
        </div>
    )
}

export default ShowModel