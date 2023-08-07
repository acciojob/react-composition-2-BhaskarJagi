
import React,{useState} from "react";
import './../styles/App.css';
import ShowModel from "./ShowModel";

const App = () => {

  let [showProp,setShowProp] = useState(false)

  function onClose(){
      setShowProp(false)
  }

  const showModal = {
    container: <div className="modal-overlay">
                  <button className="modal-close" onClick={() => onClose()}>Close</button>
                  <p className="model-p">This is the content of the modal.</p>
              </div>
  }
  return (
    <div>
        <ShowModel showModal={showModal} showProp={showProp} setShowProp={setShowProp}/>
    </div>
  )
}

export default App
