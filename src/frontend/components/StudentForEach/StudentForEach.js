// modules imports
import React from 'react';
import { Button, Thumbnail, Col } from 'react-bootstrap';
// files imports
import ContactFormModal from '../ContactFormModal';

// return ONE student with structure
const StudentForEach = ({
  name,
  availability,
  skills,
  city,
  OnClickAdd,
  image,
  linkedin,
  looking_for,
}) => (
  <Col xs={6} md={4} style={{ minWidth: 300 }}>
    <Thumbnail>
      <img
        src={image}
        width="150px"
        height="150px"
        circle={'true'}
        alt={name + ' Student Image'}
      />
      <div className="student-info">
        <h2 className="student-name">{name}</h2>
        <p style={{ fontSize: '20px' }}>{city}</p>
        <h3 className="student-availability">Availability</h3>
        <p>{availability}</p>
        <h3 className="student-skills">Tech skills</h3>
        <div className="skills">
          <p>#{skills.join(' #')}</p>
        </div>
        <h4 style={{ lineHeight: '30px' }}>
          Looking for : <p>{looking_for}</p>
        </h4>
      </div>

      <div className="contact-info">
        <hr />
        <ContactFormModal name={name} />
        {linkedin ? (
          <a
            target="_blank"
            href={'//www.linkedin.com/in/' + linkedin}
            style={{ fontSize: '37px' }}
          >
            <i className={'fa fa-linkedin-square'} />
          </a>
        ) : (
          <i className={'fa fa-linkedin-square'} style={{ fontSize: '37px' }} />
        )}
        <div>
          <Button bsStyle="success" onClick={OnClickAdd}>
            Shortlist
          </Button>
        </div>
      </div>
    </Thumbnail>
  </Col>
);

export default StudentForEach;
