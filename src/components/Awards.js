import { useEffect, useState } from "react";
import { fatchData } from "../utilits";
const Partners = ({ dark }) => {
  const [data, setData] = useState([]);
  useEffect(async () => {
    setData(await fatchData("/static/awards.json"));
  }, []);
  return (
    <div className="dizme_tm_section">
      <div className="dizme_tm_partners">
        <div className="container">
          <div className="partners_inner">
            <div className="title wow fadeInUp awards-top" data-wow-duration="1s">
              <h4>Awards</h4>
              <h3>
                Some awards I received over the years!
              </h3>
            </div>
            
          </div>
        </div>
        <div className="brush_1 wow fadeInLeft" data-wow-duration="1s">
          <img src="img/brushes/partners/1.png" alt="image" />
        </div>
      </div>
    </div>
  );
};
export default Partners;
