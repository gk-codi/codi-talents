// modules imports
import React from 'react';
import ReactGA from 'react-ga';
// files imports
import PublicWrapper from '../../components/PublicWrapper';
import './PageIntro.scss';

class PageIntro extends React.Component {
  componentDidMount() {
    ReactGA.initialize('UA-90768506-2');
    ReactGA.pageview('Intro Page');
  }

  render() {
    return (
      <PublicWrapper>
        <div className="intro">
          <h1 className="item">Recruit Codi Talents!</h1>
          <br />
          <h3 className="item">Web developer, Video Editing, and Marketing</h3>
          <br />
          <a href="/home" className="button">
            {' '}
            Codi Alumni
          </a>
        </div>
      </PublicWrapper>
    );
  }
}

export default PageIntro;
