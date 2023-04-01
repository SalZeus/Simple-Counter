import React from "react";

const Watch = ({segundo1, segundo2, minuto1, minuto2, hora}) =>{
    return (
        <nav className="navbar-brand bg-primary d-flex fs-1">
            <div className="container-fluid d-flex justify-content-center">
                <div className="navbar-brand">
                    <div className="badge text-bg-dark"><i className="far fa-clock"></i></div>
                </div>
                <div className="navbar-brand">
                    <span className="badge text-bg-dark">{hora}</span>
                </div>
                <div className="navbar-brand">
                    <span className="badge text-bg-dark">:</span>
                </div>
                <div className="navbar-brand">
                    <span className="badge text-bg-dark">{minuto2}</span>                
                </div>
                <div className="navbar-brand">
                    <span className="badge text-bg-dark">{minuto1}</span>                
                </div>
                <div className="navbar-brand">
                    <span className="badge text-bg-dark">:</span>
                </div>
                <div className="navbar-brand">
                    <span className="badge text-bg-dark">{segundo2}</span>                
                </div>
                <div className="navbar-brand">
                    <span className="badge text-bg-dark">{segundo1}</span>                
                </div>
            </div>
        </nav>
    )
}

export default Watch;