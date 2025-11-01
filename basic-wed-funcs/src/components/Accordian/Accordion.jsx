import { useState } from "react";
import data from "../Accordian/data";
import "./Accordion.css";

function Accordion() {
  const [selected, setSelected] = useState(null);


  const [enableMS, setEnableMS] = useState(false);
  const [multiple, setMultiple] = useState([]); 



  function handleSingleAccordion(getCurrentId) {
    setSelected(getCurrentId===selected?null:getCurrentId);
  }
 
  function handleMultiAccordian(getCurrentId) {
    let cpyMutiple = [...multiple];
    
  }


  return (
    <div className="container">
      <button
        onClick={() => {
          setEnableMS(!enableMS);
        }}
      >
        Enable multi selection
      </button>
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div
              className="item"
              onClick={
                enableMS
                  ? () => {
                      handleMultiAccordian(dataItem.id);
                    }
                  : () => {
                      handleSingleAccordion(dataItem.id);
                    }
              }
            >
              <div className="title">
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {selected === dataItem.id ? (
                <div className="content">
                  <p>{dataItem.answer}</p>
                </div>
              ) : null}
            </div>
          ))
        ) : (
          <h2>Data not found</h2>
        )}
      </div>
    </div>
  );
}

export default Accordion;
