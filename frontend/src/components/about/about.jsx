import React from "react";
import data from "./about.json";
import style from "./about.module.css";

function About(props) {
  return (
    <>
      <div className={style.members}>
        {data.map((item, index) => {
          return (
            <>
              <div className={style.cardStyling}>
                <img src={item.image.src} alt={item.image.alt} />
                <p>{data[index].Navn}</p>
                <p></p>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default About;
