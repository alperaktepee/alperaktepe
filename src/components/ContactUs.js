import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns" style={{marginLeft:"10%", display:"flex", justifyContent:"center", alignItems:"center"}}>
              <p className="lead" style={{color:"white"}}>
              You can check out my technical articles <a href='https://appcode.app/author/alperaktepe/' target="_blank">here</a> 
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="eight columns footer-widgets">
              <div className="widget">
              
              </div>
            </aside>
          </div>
        </section>
        );
  }
}