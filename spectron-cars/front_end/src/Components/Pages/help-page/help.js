import React from "react";
import data from "./help-data";
export default function Help() {
  return (
    <div className="help_main">
      <div className="help_cards_container">
        {data.map((item) => (
          <div className="help_cards">
            {item.head ? (
              <>
                <h1>{item.head}</h1>
                <br />
              </>
            ) : null}
            {item.paragraph_1 ? (
              <>
                <p>{item.paragraph_1}</p>
                <br />
              </>
            ) : null}
            {item.paragraph_2 ? (
              <>
                <p>{item.paragraph_2}</p>
                <br />
              </>
            ) : null}
            {item.paragraph_4 ? (
              <>
                <p>{item.paragraph_4}</p>
                <br />
              </>
            ) : null}
            {item.paragraph_5 ? (
              <>
                <p>{item.paragraph_5}</p>
                <br />
              </>
            ) : null}
            {item.paragraph_5 ? (
              <>
                <p>{item.paragraph_5}</p>
                <br />
              </>
            ) : null}
            {item.paragraph_6 ? (
              <>
                <p>{item.paragraph_6}</p>
                <br />
              </>
            ) : null}
            {item.paragraph_7 ? (
              <>
                <p>{item.paragraph_7}</p>
                <br />
              </>
            ) : null}
            {item.paragraph_8 ? (
              <>
                <p>{item.paragraph_8}</p>
                <br />
              </>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
