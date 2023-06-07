import React from 'react';
import { projects } from '../portfolio';
import { Container, Row } from 'reactstrap';
import ProjectsCard from '../components/ProjectsCard';

const Projects = () => {
  return (
    projects && (
      <section className="section section-lg bg-project">
        <Container>
          <div className="d-flex p-4">
            <div>
              <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
                <i className="ni ni-laptop text-info" />
              </div>
            </div>
            <div className="pl-4">
              <h4 className="display-3 text-white">Projects</h4>
            </div>
          </div>
          <Row className="align-items-center">
            {projects.map((data, i) => {
              return <ProjectsCard key={i} {...data} />;
            })}
          </Row>
        </Container>

        <div className="separator separator-bottom separator-skew zindex-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon className="fill-gray" points="0 0 0 100 2560 100" />
          </svg>
        </div>
      </section>
    )
  );
};

export default Projects;
