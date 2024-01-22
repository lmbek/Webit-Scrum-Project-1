import React from "react";
import data from "./about.json";
import style from "./about.module.css";

function About(props) {
  return (
    <div className={style.about}>
		<h1 className={style.title}>Members</h1>
      <div className={style.members}>
        {data.map((item, index) => {
          return (
            <>
              <div key={item.image.alt} className={style.cardStyling}>
                <img src={item.image.src} alt={item.image.alt} />
                <p>{data[index].Navn}</p>
                <p>{data[index]["Rolle i teamet"]}</p>
              </div>
            </>
          );
        })}
      </div>
      <div className={style.goal}>
        <p>
          Vores mål er at mestre Scrum ved og forstå dens anvendelse i komplekse
          projekter. Intention bag vores mål er at affektivisere arbejde i vores
          projekt gennem samarbejd. nogle order her er, at vi tilpaser os , vi
          er fokuseret, har åbenhed om kompleksiteter , har respekt for
          hinandens erfaring og ligeldes mangler og mod til at hjælpe.
        </p>
      </div>
    </div>
  );
}

export default About;
