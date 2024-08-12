import React from 'react';
import './Internships.css';

const internshipsData = [
  {
    title: 'Software Trainee',
    company: 'Skaplink Technologies Pvt Ltd',
    date: '08/2022 - 09/2022',
    description: 'Managed front-end development within a team of 4 for a store flex project, implementing form validation alongside HTML, CSS, and Bootstrap for a professional, user-friendly interface.',
    link: 'http://project-link.com',
   
  },
  {
    title: 'Work Based Learning',
    company: 'National Institute of Electronics and Information Technology (Guwahati)',
    date: '09/2022 - 03/2023',
    description: 'Acquired proficiency in cloud computing with AWS, gaining practical experience in services such as EC2 and VPC through hands-on training sessions focused on infrastructure management and deployment.',
    link: 'https://media.licdn.com/dms/image/D562DAQEvZ2TnLse73A/profile-treasury-image-shrink_800_800/0/1720693980485?e=1723993200&v=beta&t=p5Qc5m-gImCMFrFiAjYYvAVyuq5odZBokOSsVcET-ds',
    
  }
];

const Internships = () => (
  <section id="internships" className="internships">
    <h2>Internships</h2>
    {internshipsData.map((internship, index) => (
      <div key={index} className="internship" style={{ backgroundColor: internship.bgColor }}>
        <div className="internship-details">
          <div className="date">
            <h6>{internship.date}</h6>
          </div>
          <div className="description">
            <h3>
              <a href={internship.link} target="_blank" rel="noopener noreferrer" className="internship-link">
                {internship.title} 
              </a>
            </h3>
            <p className="company">{internship.company}</p>
            <h6 className="description-text">{internship.description}</h6>
          </div>
        </div>
      </div>
    ))}
  </section>
);

export default Internships;




