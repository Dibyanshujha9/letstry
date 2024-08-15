import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

function Freqasked() {
  return (
    <div className='faq-section'>
        <div className='container d-flex flex-column align-items-center'>
        <h2 className='text-center text-capitalize mb-5' style={{ marginTop: '30px' }}>Frequently asked questions</h2>
        {/* <p className='text-center mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat numquam rem expedita similique necessitatibus dolore magnam natus sit ipsa, quae neque accusantium placeat laudantium mollitia, reprehenderit alias incidunt, delectus obcaecati cupiditate sed omnis repudiandae eos! Quasi unde veritatis labore quibusdam.</p> */}
            <Accordion defaultActiveKey="" flush>
                <Accordion.Item eventKey='0'>
                    <Accordion.Header>What courses do you offer at Let's Try?

</Accordion.Header>
                    <Accordion.Body>
                    We provide education in cutting-edge fields such as drone technology, artificial intelligence, web applications, and IoT. Our courses are designed to equip students with practical skills and knowledge.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='1'>
                    <Accordion.Header>How can I enroll in a course?</Accordion.Header>
                    <Accordion.Body>
                    Enrollment is easy! Simply visit our website, choose your desired course, and follow the enrollment process. We offer both online and offline options to suit your needs.                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='2'>
                    <Accordion.Header>What qualifications do your instructors have?</Accordion.Header>
                    <Accordion.Body>
                    Our instructors are industry experts with extensive experience in their respective fields. They bring real-world insights and hands-on expertise to enhance your learning experience.                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='3'>
                    <Accordion.Header>Are there any prerequisites for your courses?</Accordion.Header>
                    <Accordion.Body>
                    No, there are no prerequisites for most of our courses. We welcome learners of all levels to join and start their educational journey with us.                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    </div>
  )
}

export default Freqasked;
