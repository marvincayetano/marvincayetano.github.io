import React from 'react';
import { useSpring } from 'react-spring';
import { WorkContainer, WorkContent, PaperContainer, PaperContent } from './styles';

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];

const trans1 = (x, y) =>
  `perspective(600px) rotateX(${-x / 50}deg) rotateY(${-y / 50}deg) translate3d(${x / 10}px,${y / 10}px,0)`;

export default function Work() {
  const [coordinates, set] = useSpring(() => ({ xy: [0, 0] }));
  const { xy } = coordinates;

  return (
    <WorkContainer id="work" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
      <WorkContent>
        <PaperContainer>
          <PaperContent style={{ transform: xy.interpolate(trans1) }}>
            <div className="job__container">
              <h1 className="job__company">iRadar Canada</h1>
              <h3 className="job__title">SOFTWARE DEVELOPER - COOP</h3>
              <p className="job__description">
                Developed a web application with a team of 5 using ReactJS, NodeJS, Express, MongoDB.
              </p>
            </div>
            <div className="job__container">
              <h1 className="job__company">Evotech Software Solutions Inc.</h1>
              <h3 className="job__title">SOFTWARE DEVELOPER</h3>
              <p className="job__description">
                Developed different applications including Point-of-sale, School Management, and Hotel Management using
                VB6, Crystal Reports, and Microsoft SQL Server.
              </p>
            </div>
            <div className="job__container">
              <h3 className="job__title">SOFTWARE DEVELOPER - INTERN</h3>
              <p className="job__description">
                Collaborated with a team of four other interns to create, normalize, and expand SQL databases, and
                developed an application using VB6 and Microsoft SQL Server that helps the company to manage
                interactions with clients and potential clients.
              </p>
            </div>
          </PaperContent>
        </PaperContainer>
      </WorkContent>
    </WorkContainer>
  );
}
