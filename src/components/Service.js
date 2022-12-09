import { useEffect, useState } from "react";
import ServicePopup from "./popup/ServicePopup";

const Service = ({ dark }) => {
  const [popupdata, setPopupdata] = useState({});
  const [popup, setPopup] = useState(false);
  useEffect(async () => {
    setTimeout(() => {
      let VanillaTilt = require("vanilla-tilt");
      VanillaTilt.init(document.querySelectorAll(".tilt-effect"), {
        maxTilt: 6,
        easing: "cubic-bezier(.03,.98,.52,.99)",
        speed: 500,
        transition: true,
      });
    }, 1000);
  }, []);

  const data = {
    title: "Creative Design",
    price: "99",
    im: "img/service/1.jpg",
    shortDec:
      "Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development",
    service: {
      Organization: [
        { url: "", text: "NSDI 2022 (TPC co-chair)" },
        { url: "", text: "IMC 2020 (General co-chair)" },
        { url: "", text: "HotNets 2018 (co-chair)" },
        {
          url: "https://sites.google.com/view/netsearlycareer2017",
          text: "NSF-NeTS Early Career Workshop 2017",
        },
        {
          url: "http://dimacs.rutgers.edu/Workshops/SDNAlgorithms",
          text: "Workshop on Algorithms for Software-Defined Networking",
        },
        {
          url: "http://conferences.sigcomm.org/co-next/2016/#!/home",
          text: "CoNext 2016 TPC co-chair",
        },
        { url: "", text: "CoNext 2015 Workshops co-chair" },
        { url: "", text: "SIGCOMM 2015 Travel Grants" },
        {
          url: "http://conferences.sigcomm.org/co-next/2013",
          text: "CoNext 2013 Travel Grants",
        },
        {
          url: "http://conferences.sigcomm.org/co-next/2013/workshops/HotMiddlebox/index.html",
          text: "HotMiddlebox 2013 Co-chair",
        },
        {
          url: "http://conferences.sigcomm.org/co-next/2012/workshops/student",
          text: "CoNEXT 2012 Student Workshop Co-chair",
        },
      ],
      ProgramCommittees: [
        {
          year: "2021",
          text: "IEEE Symposium on Security and Privacy, USENIX Security, OSDI",
        },
        { year: "2020", text: "IEEE Symposium on Security and Privacy, NSDI" },
        { year: "2019", text: "IEEE Symposium on Security and Privacy, NSDI" },
        {
          year: "2018",
          text: "NSDI, NDSS, Usenix Security, SIGCOMM Workshop on Self-Driving Networks, Hotnets",
        },
        { year: "2017", text: "IEEE Security and Privacy, SIGCOMM, NDSS" },
        { year: "2016", text: "IEEE Security and Privacy, NSDI, SIGCOMM" },
        {
          year: "2015",
          text: "IEEE Security and Privacy, SIGCOMM, CoNext, IMC, SOSR (HotSDN), COMSNETS",
        },
        {
          year: "2014",
          text: "NSDI , SIGCOMM , CoNext , NDSS , HotSDN , ONS Research Track , ANCS , SIGCOMM Posters/Demos",
        },
        {
          year: "2013",
          text: "SIGCOMM , CCS , CoNext, NSDI Demo/Poster, ANCS , IWQoS , Networking , Performance , ICPADS , Globecom NFV Demos",
        },
        { year: "2012", text: "CoNEXT, IMC, PAM, COMSNETS" },
        { year: "2011", text: "IMC, SIGCOMM Demos/Posters, ICCCN" },
      ],
    },
  };

  return (
    <div className="dizme_tm_section" id="service">
      <ServicePopup
        data={popupdata}
        open={popup}
        close={() => setPopup(false)}
      />
      <div className="dizme_tm_services">
        <div className="container">
          <div className="dizme_tm_main_title" data-align="center">
            <span>Services</span>
            <h3>What I Do for Clients</h3>
            <p>
              Most common methods for designing websites that work well on
              desktop is responsive and adaptive design
            </p>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "30px",
            }}
          >
            <div className="service_section">
              <h2 style={{ paddingBottom: "20px" }}>Organization:</h2>
              <ul>
                {data.service.Organization.map((work, i) => (
                  <div key={i}>
                    {work.url ? (
                      <a href={work.url} style={{ textDecoration: "none" }}>
                        * {work.text}
                      </a>
                    ) : (
                      <p>* {work.text}</p>
                    )}
                  </div>
                ))}
              </ul>
            </div>
            <div className="service_section" style={{ marginRight: "-150px" }}>
              <h2 style={{ paddingBottom: "20px" }}>Program Committees:</h2>
              <ul>
                {data.service.ProgramCommittees.map((work, i) => (
                  <div key={i}>
                    <p>
                      <span style={{ color: "red" }}>{work.year}</span>:{" "}
                      {work.text}
                    </p>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="brush_2 wow zoomIn" data-wow-duration="1s">
          <img src="img/brushes/service/6.png" alt="image" />
        </div>
      </div>
    </div>
  );
};
export default Service;
