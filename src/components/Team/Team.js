import React from 'react';
import team1 from '../../img/team-1.jpg';
import team2 from '../../img/team-2.jpg';
import team3 from '../../img/team-3.jpg';
const Team = () => {
    return (
        <div className='container mt-5 pt-5 '>
            <div className='text-center'>
                <h4>MEET OUR TEAM</h4>
                <div className="underline"></div>
                <h1 className='fw-bold text-center mb-5 mt-5'>Our Engineers & Workers</h1>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-6 col-12 text-center">
                    <div>
                        <img src={team1} alt="" />
                    </div>
                    <h4>Adam Phillips</h4>
                    <p>Engineer</p>
                </div>
                <div className="col-lg-4 col-md-6 col-12 text-center">
                    <div>
                        <img src={team2} alt="" />
                    </div>
                    <h4>Thomas Olsen</h4>
                    <p>Engineer</p>
                </div>
                <div className="col-lg-4 col-md-6 col-12 text-center">
                    <div>
                        <img src={team3} alt="" />
                    </div>
                    <h4>James Alien</h4>
                    <p>Worker</p>
                </div>
            </div>
        </div>
    );
};

export default Team;