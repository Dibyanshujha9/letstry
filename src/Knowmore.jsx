import React from 'react';
import { Link } from 'react-router-dom';
import web1 from "../src/images/own1.jpg";
import web2 from "../src/images/own2.jpg";




function About() {
  return (
    <div>
      <div className='container my-5'>
        <div className="row">
          <div className='col-lg-6 d-flex flex-column justify-content-center mb-4 mb-lg-0'>
            <h2 className='mb-4 mb-lg-5'>Our Missions</h2>
           
        
            <p style={{
  width: '100%',
  textAlign: 'justify',
  margin: '0 auto',
  padding: '0 15px' 
}}>
  As part of the <strong>Let's Try</strong> team, we took the initiative to organize an extensive workshop at <strong>USICT, GGSIPU</strong>, that focused on the emerging fields of Drone Systems and Artificial Intelligence (AI). Our goal was to create an educational platform that not only imparted theoretical knowledge but also provided practical, hands-on experience to all participants. The workshop was meticulously planned, featuring live demonstrations that showcased the intricacies of drone technology. Students were given the opportunity to engage directly with the drones, learning about their mechanics, understanding flight operations, and gaining insights into critical safety protocols. The AI segment of the workshop was equally immersive, where we explored machine learning algorithms, data processing techniques, and their wide-ranging applications across various industries. The event was a resounding success, leaving participants with a solid foundation in these advanced technologies. In addition to our work at <strong>USICT, Idealab Dwarka</strong>, the Let's Try team expanded our outreach by conducting specialized classes at <strong>Putimari High School</strong> in Cooch Behar and <strong>Komal Public School</strong> in Dwarka, Delhi. These sessions were tailored to introduce students to the rapidly evolving domains of the Internet of Things (IoT), Machine Learning, and Drone Systems. At <strong>Putimari High School</strong>, we focused on making complex technological concepts accessible and engaging for students, ensuring they could grasp the basics of IoT and how it connects various devices to create smarter environments. Similarly, at <strong>Komal Public School</strong>, the classes emphasized the practical applications of Machine Learning and Drone Systems, allowing students to witness firsthand how these technologies are transforming industries.
</p>



            <Link to="/contact">
            <button type='button' className='btn btn-primary btn-small mx-0 mx-sm-2 my-2 my-sm-0'>Reach Out</button>
            </Link>
            
          </div>
          <div className='col-lg-3 d-flex justify-content-center'>
            <div className="photo-container">
              <img src={web1} alt="Workshop 1" className="img-fluid photo-3d"/>
              <img src={web2} alt="Workshop 2" className="img-fluid photo-3d"/>
            </div>
          </div>
          
        </div>
      </div>

      
      </div>
  );
}

export default About;
