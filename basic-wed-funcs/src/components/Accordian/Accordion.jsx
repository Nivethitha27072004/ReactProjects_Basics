import { useState } from "react";
import data from "../Accordian/data";
import "./Accordion.css";

function Accordion() {
  const [selected, setSelected] = useState(null);





  function handleSingleAccordion(getCurrentId) {
    setSelected(getCurrentId===selected?null:getCurrentId);
  }
 


  return (
    <div className="container">
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div
              className="item"
              onClick={ () => {
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
