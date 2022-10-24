import React from 'react';
import ProfilePic from '../images/profile-pic.png';
import EmailImg from '../images/mail.svg';
import facebook from '../images/facebook.svg';
import linkedin from '../images/linkedin.svg';
import instagram from '../images/instagram.png';
import github from '../images/github.svg';
import twitter from '../images/twitter.svg';

export default function Card() {
  return (
    <div className="card">
      <img className="profile-pic" src={ProfilePic} alt="Profile" />
      <div className="card-body">
        <section className="who-me">
          <h2 className="person-name">Laura Smith</h2>
          <h3 className="job-title">Frontend Developer</h3>
          <h4 className="website">laurasmith.website</h4>
          <a className="email-btn" href="#">
            <img src={EmailImg} alt="Mail" /> Email
          </a>
        </section>
        <section className="desc-section">
          <div className="about">
            <h2 className="desc-title">About</h2>
            <p className="desc-paragraph">
              I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.
            </p>
          </div>
          <div className="interests">
            <h2 className="desc-title">Interests</h2>
            <p className="desc-paragraph">Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
          </div>
        </section>
      </div>
      <div className="social-media">
        <ul className="socmed-list">
          <li>
            <a href="#">
              <img src={twitter} alt="logo" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={facebook} alt="logo" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={instagram} alt="logo" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={linkedin} alt="logo" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={github} alt="logo" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
