import { Icon } from '@iconify/react';
import React, { Fragment } from 'react';
import Fade from 'react-reveal/Fade';
import { Col, Container, Row, UncontrolledTooltip } from 'reactstrap';
import DisplayLottie from '../components/DisplayLottie';
import { skillsSection } from '../portfolio';

const Skills = () => {
  return (
    skillsSection && (
      <section className='bg-dimgrey'>
        <Container className="text-center section section-lg ">
          <h1 className="h1">{skillsSection.title}</h1>
          <p className="lead">{skillsSection.subTitle}</p>
          {skillsSection.data.map((section, index) => {
            return (
              <Row className="my-5 align-items-center justify-content-center" key={index}>
                <Col lg="6" className="order-2 order-lg-1">
                  <Fade left duration={2000}>
                    <DisplayLottie animationPath={section.lottieAnimationFile} />
                  </Fade>
                </Col>
                <Col lg="6" className="order-1 order-lg-2">
                  <Fade right duration={2000}>
                    <div className='bg-gradient-dark rounded-3 p-2'>
                      <h3 className="h3 mb-2 ">{section.title}</h3>
                      <div className="flex-wrap mb-2">
                        {section.softwareSkills.map((skill, i) => {
                          return (
                            <Fragment key={i}>
                              <div
                                className="icon icon-lg icon-shape shadow-sm rounded-circle m-1 bg-white"
                                id={skill.skillName.replace(/\s/g, '')}
                              >
                                <Icon
                                  icon={skill.fontAwesomeClassName}
                                  data-inline="false"
                                ></Icon>
                              </div>
                              <UncontrolledTooltip
                                delay={0}
                                placement="bottom"
                                target={skill.skillName.replace(/\s/g, '')}
                              >
                                {skill.skillName}
                              </UncontrolledTooltip>
                            </Fragment>
                          );
                        })}
                      </div>
                      <div>
                        {section.skills.map((skill, i) => {
                          return <p key={i}>{skill}</p>;
                        })}
                      </div>
                    </div>
                  </Fade>
                </Col>
              </Row>
            );
          })}
        </Container></section >
    )
  );
};

export default Skills;
