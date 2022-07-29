import React from "react";
import FacebookImg from "./FacebookImg";
import Fb1 from "../public/fb1.jpg";
import Fb2 from "../public/fb2.jpg";
import Fb3 from "../public/fb3.jpg";
import Fb4 from "../public/fb4.jpg";
import Fb5 from "../public/fb5.jpg";
import Fb6 from "../public/fb6.jpg";

const Facebook = () => {
  return (
    <div className="max-w-[1240px] mx-auto text-center py-24">
      <p className="text-2xl font-bold">Follow Us on Facebook</p>
      <p className="pb-4">Unique.</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4">
        <FacebookImg socialImg={Fb1} />
        <FacebookImg socialImg={Fb2} />
        <FacebookImg socialImg={Fb3} />
        <FacebookImg socialImg={Fb4} />
        <FacebookImg socialImg={Fb5} />
        <FacebookImg socialImg={Fb6} />
      </div>
    </div>
  );
};

export default Facebook;
