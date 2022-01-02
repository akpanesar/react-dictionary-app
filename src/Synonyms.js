import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="Synonyms">
        <strong>Similar:</strong>
        <ul>
          {props.synonyms.map(function (synonym, index) {
            if (index < 5) {
              return <li key={index}>{synonym}</li>;
            } else {
              return null;
            }
          })}{" "}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
