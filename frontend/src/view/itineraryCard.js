import * as React from 'react';
import  { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import {DisplayMapClass} from './mapp';

function toReadableTime(time) {
    var hrs = parseInt(time / 100);
    var t = hrs.toString();
    if (hrs < 10) t = "0" + t;
    var mins = parseInt(time % 100);
    var m = mins.toString();
    if (mins < 10) m = "0" + m;
    return t + ":" + m + " hrs";
  }

  function getNextDay(d) {
    var tomorrow = new Date(d);
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toDateString();
  }

  
  export default function ItineraryCard({allroutes}) {
    // const allroutes = JSON.parse(JSON.stringify(routes));
    const [showModal, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    // console.log("ALL ROUTES", allroutes)
    return (
        <>
        <div className="bgcolor mb-10">
            <section className="timeline_area section_padding_130">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-sm-8 col-lg-6">
                            <div className="section_heading text-center">
                                {/* <h6>----</h6> */}
                                <h6></h6>
                                
                                <div className="line"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="apland-timeline-area">
                                {/* {console.log("HERE",allroutes.routes)} */}
                            {allroutes?.routes?.map((r) => (
                                    <div className="single-timeline-area" style={{marginBottom: '75px'}} key={r.date}>
                                        <div
                                            className="timeline-date wow fadeInLeft"
                                            data-wow-delay="0.1s"
                                            style={{
                                                visibility: "visible",
                                                animationDelay: "0.1s",
                                                animationName: "fadeInLeft",
                                            }}
                                        >
                                            <div style={{display: 'flex', flexDirection: 'column', gap: '4px', paddingLeft: '10px'}}>
                                            <p>{getNextDay(r.date)}</p>
                                            <a href="#"><button className="btn btn-warning" style={{fontSize: '0.75rem'}} onClick={handleShow}>Get Route</button></a></div>
                                        </div>
                                        <div className="row">
                                            {r.route.route?.map((place) => (
                                                <div
                                                    className="col-12 col-md-6 col-lg-4"
                                                    key={place.place_id}
                                                >
                                                    
                                                    <div
                                                        className="single-timeline-content d-flex wow fadeInLeft"
                                                        data-wow-delay="0.3s"
                                                        style={{
                                                            visibility: "visible",
                                                            animationDelay: "0.3s",
                                                            animationName: "fadeInLeft",
                                                            minHeight: "150px",
                                                        }}
                                                    >
                                                        <div style={{display: 'flex', flexDirection: 'column'}}>
                                                            <div className='d-flex'><div className="timeline-icon">
                                                                <i
                                                                    className="fa fa-address-card"
                                                                    aria-hidden="true"
                                                                >
                                                                    {/* <img src="../assets/bg.jpg"></img> */}
                                                                    {/* <img src=""></img> */}
                                                                    {/* hello */}
                                                                </i>
                                                            </div>
                                                            <div className="timeline-text">
                                                                <h6>{place.name}</h6>
                                                                <p>{place.formatted_address}</p>
                                                                {/* <hr/> */}
                                                                <div className="row">
                                                                    <p className="col-3">
                                                                        {toReadableTime(place.startTime)}
                                                                    </p>
                                                                    <p className='col-1'> to </p>
                                                                    <p className="col-1">
                                                                        {toReadableTime(place.endTime)}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <br></br>

                                                    </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        
        <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Get Route</Modal.Title>
        </Modal.Header>
        <Modal.Body><DisplayMapClass/></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Start
          </Button>
        </Modal.Footer>
      </Modal>
       </> 
    )
}
