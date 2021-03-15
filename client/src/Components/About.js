import React from "react";
import me from "../profile-photo.jpg";

const About = () => {
  return (
    <div id="about" className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xs12">
          <div className="photo-styles">
            <img className="profile-photo" src={me} alt="profile-photo" />
          </div>
        </div>
        <div className="col-lg-6 col-xs12">
          <h1 className="about-me-header">About Me</h1>
          <p className="about-me-txt">
            Hello! I’m Lucah. I’m originally from Ohio, but currently reside in
            the San Francisco Bay Area. I’m an extreme lover of music, cartoons,
            cooking, illustration/ screen printing .. really anything art
            related is my thing. However, my first job in high school was at the
            local pizza shop and I had continued working in restaurants and
            cafes for over 10 years!
          </p>

          <p className="about-me-txt">
            All of my restaurant experiences have been centered around being
            part of a team, which has motivated me to step up and be a leader. I
            worked my way up in the scene and had the opportunity to become part
            of team leading and management. I live to lift people up and thrive
            off of setting the tone for a positive culture and environment that
            ultimately leads to a successful, motivated, hard working team.
          </p>

          <p className="about-me-txt">
            While the restaurant scene has been wonderful to me, I decided it
            was time for a change. I’ve always been extremely artistic, so I was
            thinking to myself, “ how could I best apply this to a career?” I’ve
            always had an interest in advertising and graphic design,
            specifically gearing towards web design. Being in the Bay Area has
            really opened my eyes up to the tech industry and all it has to
            offer. I suddenly started realizing just how artistic programming
            can be. You have the opportunity to not only design applications,
            but create them yourself inside and out. Being a creator myself, you
            can imagine how appealing this is! I decided to take the leap and
            learn. I believe combining my inner creator with all of my teamwork
            and leadership experience, will undoubtedly fuel me toward success
            in this industry.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
