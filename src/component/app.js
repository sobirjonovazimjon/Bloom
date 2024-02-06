import React from "react";
import logo from "./image/Logo.png";
import logo1 from "./image/logo.svg";
import "./app.css";
const app = () => {
  return (
    <>
      <header>
        <div className="container1">
          <div className="img">
            <img src={logo1} alt="" />
          </div>

          <div className="ffl">
            <div className="flx">
              <div className="log">
                <img src={logo} alt="" />
              </div>
              <div className="navbar">
                <ul>
                  <li>
                    <a href="#">
                      About <br /> us
                    </a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <a href="#">Portfolio</a>
                  </li>
                  <li>
                    <a href="#">Clients</a>
                  </li>
                  <li>
                    <a href="#">Contacts</a>
                  </li>
                  <div className="nm">
                    <p>EN</p>
                    <p>RU</p>
                    <p>UZ</p>
                  </div>
                </ul>
              </div>
            </div>
            <div className="matt">
              <h1>
                Bloom <br /> Architechture
              </h1>
            </div>
          </div>

          <div className="too">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="90"
              viewBox="0 0 90 90"
              fill="none"
              id="arow"
            >
              <path
                d="M66.6789 31.2201C66.8552 36.6117 69.5245 40.6488 72.0052 42.7478L73.8676 40.5467C71.9309 38.9079 69.7071 35.6054 69.5606 31.1259C69.4155 26.6871 70.7163 21.4407 77.4441 14.7129L75.4053 12.6741C68.6774 19.402 63.4312 20.7028 58.9924 20.5576C54.5129 20.4111 51.2103 18.1874 49.5715 16.2506L47.3705 18.1131C49.4695 20.5937 53.5065 23.263 58.8981 23.4393C61.0096 23.5084 63.2926 23.1944 65.7138 22.3657L12.7922 75.2873L14.831 77.3261L67.7525 24.4045C66.9238 26.8257 66.6098 29.1086 66.6789 31.2201Z"
                fill="#E3E7F2"
              />
            </svg>
            <div className="tt">
              <h1>
                Order <br />
                project
              </h1>
            </div>
          </div>
          <section>
            <h3>
              Architecture that sets the tone: our agency specializes in
              creating innovative and sustainable buildings,
              <span> which embody modern trends and technologies.</span>
            </h3>
          </section>
        </div>
      </header>
    </>
  );
};
export default app;
