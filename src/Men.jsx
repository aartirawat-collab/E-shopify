import React from "react";
import web from "../src/img/men1.webp";
import web1 from "../src/img/men2.webp";
import web2 from "../src/img/men4.jpg";
import web3 from "../src/img/men5.jpg";
import web4 from "../src/img/men9.jpg";
import web5 from "../src/img/men6.webp";
import Common from "./Common";
const Men = () => {
  return (
    <div>
 <Common name="Men's" imgsrc={web} imgsrc1={web1} imgsrc2={web2} imgsrc3={web3} imgsrc4={web4} imgsrc5={web5} title="Men's Latest Wear" text="Leather Ethinic's Collections" visit="/men" />
    </div>
  );
};

export default Men;
