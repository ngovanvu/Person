import React from "react"
import { Col, Container, Row, Tab } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png"
import { ProjectCard } from "./ProjectCard";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
export const Projects =() => {
    const projects = [
        {
          title: "Business Startup1",
          description: "Design & Development",
          imgUrl: projImg1,
        },
        {
          title: "Business Startup2",
          description: "Design & Development",
          imgUrl: projImg2,
        },
        {
          title: "Business Startup3",
          description: "Design & Development",
          imgUrl: projImg3,
        },
        {
          title: "Business Startup4",
          description: "Design & Development",
          imgUrl: projImg1,
        },
        {
          title: "Business Startup5",
          description: "Design & Development",
          imgUrl: projImg2,
        },
        {
          title: "Business Startup6",
          description: "Design & Development",
          imgUrl: projImg3,
        },
      ];
      return(
        <section className="project" id = "projects">
        <Container>
        <Row>
        <Col size ={12}>
        <TrackVisibility>
        {({ isVisible }) =>
        <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
        <h2>Projects</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <Tab.Container id="projects-tabs" defaultActiveKey={"first"}>  
        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
           <Nav.Item>
             <Nav.Link eventKey="first">Tag One</Nav.Link>
           </Nav.Item>
           <Nav.Item>
             <Nav.Link eventKey="second">Tag Two </Nav.Link>
           </Nav.Item>
           <Nav.Item>
             <Nav.Link eventKey="third">Tag Three </Nav.Link>
           </Nav.Item>
         </Nav>
         <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
            <Tab.Pane eventKey="first">
            <Row>
               {
                 projects.map((project,index) => {
                    return(
                        <ProjectCard key={index} {...project}/>
                    )
                 })
               }
            </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            </Tab.Pane>
            <Tab.Pane eventKey="third">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Tab.Pane>
         </Tab.Content>
         </Tab.Container> 
         </div>}
         </TrackVisibility>
        </Col>
        </Row>
        </Container>     
        <img className="background-image-right" src={colorSharp2}></img>  
        </section>
      )
}