import Isotope from "isotope-layout";
import { useEffect, useRef, useState } from "react";
import { dataImage, portfolioHover } from "../utilits";
import DetailsPopup from "./popup/DetailsPopup";

const Portfolio = () => {
  useEffect(() => {
    dataImage();
    portfolioHover();
  }, []);

  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".gallery_zoom", {
        itemSelector: ".grid-item",
        //    layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".grid-item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 500);
    return () => isotope.current.destroy();
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "current" : "");

  // Popup
  const [popup, setPopup] = useState(false);

  return (
    <div className="dizme_tm_section" id="portfolio">
      <DetailsPopup open={popup} close={() => setPopup(false)} />
  
      <section id="project_part">
        <div class="container">
          <div class="project_text">
                <h1>projects</h1>
                <p>Current research projects and themes</p>
            </div>
            

            <div class="boxitem1">
              <div class="row">
                <div class="col-lg-4">
                  <div class="box_one">
                      <div class="box_one_img">
                        <picture>
                          <img src="img/portfolio/ddn.png" alt="ddn.png" loading="lazy"/>
                        </picture>
                      </div>
                      <div class="box_one_text">
                        <h2>data-driven networking and security</h2>
                        <p >Using AI/ML to solve networking/security problems</p>
                        <a href="https://users.ece.cmu.edu/~vsekar/projects/datadriven/"> Read more</a>
                      </div>
                 </div>
              </div>
             </div>

              <div class="row">
                  <div class="col-lg-4">
                    <div class="custom-bt ">
                        <div class="box_one_img">
                         <picture>
                            <img src="img/portfolio/bbn.png" alt="bbn.png" loading="lazy"/>
                          </picture>
                       </div>
                        <div class="box_two_text">
                          <h2 >project dataFuel</h2>
                          <p >Enabling Data-driven Innovation with Synthetic Data</p>
                          <a href="https://users.ece.cmu.edu/~vsekar/projects/datafuel/">Read more</a>
                        </div>
                  </div>
                </div>
             </div>

              <div class="row">
                <div class="col-lg-4">
                  <div class="box_one_part ">
                      <div class="box_one_img">
                        <picture>
                          <img src="img/portfolio/iot.png" alt="iot.png" loading="lazy"/>
                        </picture>
                      </div>
                      <div class="box_three_text">
                        <h2 >internet of things Security</h2>
                        <p >Rethinking Network Security for the Internet of Things</p>
                        <a href="https://users.ece.cmu.edu/~vsekar/projects/iotsec/">Read more</a>
                      </div>
                 </div>
              </div>
             </div> 
  
         
           </div>
        </div>
      </section>
 
      </div>
  );
};
export default Portfolio;
