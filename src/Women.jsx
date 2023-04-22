import React from "react";
import Common from "./Common";
import web from "../src/img/women3.webp";
import web1 from "../src/img/women6.jpg";
import web2 from "../src/img/women10.jpg";
import web3 from "../src/img/pic1.jpg";
import web4 from "../src/img/women8.webp";
import web5 from "../src/img/women5.webp";

const Women = () => {
  return (
    <div>
 <Common name="Women's" imgsrc={web} imgsrc1={web1} imgsrc2={web2} imgsrc3={web3} imgsrc4={web4} imgsrc5={web5} title="Women's latest Wear" text="Rayon Ethinic's 
 Collections" visit="/women"  />
 
    </div>
  );
};

export default Women;
