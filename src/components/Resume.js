import React, { Component } from "react";
export default class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            {resumeData.education &&
              resumeData.education.map((item) => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{item.UniversityName}</h3>
                      <h3 className="date">
                        {item.specialization} -
                        <em className="date">
                          {" "}
                          {item.MonthOfPassing} {item.YearOfPassing}
                        </em>
                      </h3>
                      <p>{item.Achievements}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Experience</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            {resumeData.work &&
              resumeData.work.map((item) => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{item.CompanyName}</h3>
                      <h3 className="date">
                        {item.specialization}

                        <p className="date">
                          {item.MonthOfLeaving} {item.YearOfLeaving}
                        </p>
                      </h3>

                      <p className="date">{item.Achievements}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

        <div className="row skill">
          <div className="two columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>

          <div>
            <ul
              style={{ display: "flex", flexWrap: "wrap" }}
              className="skills"
            >
              {resumeData.skills &&
                resumeData.skills.map((item) => {
                  return (
                    <li style={{paddingTop:"30px",paddingLeft:"50px", marginRight:"60px",width: "33.3333%" }}>
                      <h3>{item.skillname}</h3>
                      <img
                        style={{ width: "80px", height: "80px" }}
                        src={item.skillimage}
                        alt=""
                      />
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </section>
    );
  }
}
