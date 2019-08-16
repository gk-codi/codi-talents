// modules imports
import React from 'react';
import { Button, Thumbnail, Col } from 'react-bootstrap';
// files imports
import ContactFormModal from '../ContactFormModal';

const StudentSelectedList = ({
  name,
  availability,
  skills,
  city,
  OnClickRemove,
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
        circle="true"
        alt={name + ' Image'}
      />
      <div className="student-info">
        <h2 className="student-name">{name}</h2>
        <h3 className="student-city" style={{ fontSize: '20px' }}>
          {city}
        </h3>
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
          <a target="_blank" href={'//www.linkedin.com/in/' + linkedin}>
            <i
              style={{ fontSize: '37px' }}
              className={'fa fa-linkedin-square'}
            />
          </a>
        ) : (
          <i style={{ fontSize: '37px' }} className={'fa fa-linkedin-square'} />
        )}
        <div>
          <Button
            bsStyle="danger"
            onClick={OnClickRemove}
            style={{ float: 'right' }}
          >
            Remove from list
          </Button>
        </div>
      </div>
    </Thumbnail>
  </Col>
);

export default StudentSelectedList;
