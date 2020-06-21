import React from 'react';
import '../style/about.css';
import resume from '../img/resume.pdf';

const About = () => {
  return (
    <div id='About'>
      <h1 className='mb-0'>
        Keyur<span className='text-primary'> Savaliya</span>
      </h1>
      <div className='subheading mb-5 text-primary'>
        <a className='text-primary' href='mailto:keyurs8589@gmail.com'>
          keyurs8589@gmail.com
        </a>
      </div>
      <p className='mb-5 description'>
        Innovative frontend developer with 5+ years hands-on experience in
        software development life cycle and coding. Hardworking and technically
        sound frontend developer who thrives when facing complex coding and
        long-lasting problems using.
      </p>
      <a
        className='fa-color'
        href='https://github.com/keyurs8589/'
        rel='noopener noreferrer'
        target='_blank'
      >
        <span className='fa-stack fa-lg'>
          <i className='fa fa-circle-thin fa-stack-2x'></i>
          <i className='fa fa-github fa-stack-1x'></i>
        </span>
      </a>
      <a
        className='fa-color'
        href='https://www.linkedin.com/in/keyurs8589/'
        rel='noopener noreferrer'
        target='_blank'
      >
        <span className='fa-stack fa-lg'>
          <i className='fa fa-circle-thin fa-stack-2x'></i>
          <i className='fa fa-linkedin fa-stack-1x'></i>
        </span>
      </a>
      <div className='resume-link'>
        <a href={resume} rel='noopener noreferrer' target='_blank'>
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default About;
