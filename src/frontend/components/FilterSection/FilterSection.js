// modules imports
import React from 'react';
import { Nav, NavDropdown, ButtonGroup, Row, Tab, Button, Col } from 'react-bootstrap';
// files imports

const FilterSection = ({ setCityFilter, setAvailabileFilter, setSkillFilter, showAll, showSelected, showTwo }) => (
    // returned nav bar with filtering options
    <div className="filter">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row className="clearfix">
                <Col sm={8}>
                    <Nav justified={true}>
                        <NavDropdown eventKey={3} title="Location" >
                            <ButtonGroup vertical={true} block>
                                <Button onClick={() => setCityFilter("beirut")}><h4>Beirut</h4></Button>
                                <Button onClick={() => setCityFilter("saida")}><h4>Saida</h4></Button>
                                <Button onClick={() => setCityFilter("tripoli")}><h4>Tripoli</h4></Button>
                                <Button onClick={() => setCityFilter("jounyeh")}><h4>Jounyeh</h4></Button>
                                <Button onClick={() => setCityFilter("jbeil")}><h4>Jbiel</h4></Button>
                                <Button onClick={() => setCityFilter("tyre")}><h4>Tyre</h4></Button>
                            </ButtonGroup>
                        </NavDropdown>
                        <NavDropdown eventKey={3} title="Skills" >
                            <ButtonGroup vertical={true} block>
                                <Button onClick={() => setSkillFilter("react")}>REACT</Button>
                                <Button onClick={() => setSkillFilter("wordpress")}>WORDPRESS</Button>
                                <Button onClick={() => setSkillFilter("html")}>HTML</Button>
                                <Button onClick={() => setSkillFilter("css")}>CSS</Button>
                                <Button onClick={() => setSkillFilter("javascript")}>JAVASCRIPT</Button>
                                <Button onClick={() => setSkillFilter("php")}>PHP</Button>
                                <Button onClick={() => setSkillFilter("laravel")}>LARAVEL</Button>
                                <Button onClick={() => setSkillFilter("node")}>NODE JS</Button>
                                <Button onClick={() => setSkillFilter("meator")}>MEATOR</Button>
                                <Button onClick={() => setSkillFilter("sql")}>SQL</Button>
                                <Button onClick={() => setSkillFilter("express")}>Express</Button>
                                <Button onClick={() => setSkillFilter("bootsrap")}>BOOTSRAP</Button>
                                <Button onClick={() => setSkillFilter("ios")}>IOS</Button>
                                <Button onClick={() => setSkillFilter("angular")}>ANGULAR</Button>
                                <Button onClick={() => setSkillFilter("photoshop")}>PHOTOSHOP</Button>
                                <Button onClick={() => setSkillFilter("illustrator")}>ILLUSTRATOR</Button>
                                <Button onClick={() => setSkillFilter("video editor")}>VIDEO EDITOR</Button>
                                <Button onClick={() => setSkillFilter("linux")}>Linux</Button>
                                <Button onClick={() => setSkillFilter("mongodb")}>Mongo DB</Button>
                                <Button onClick={() => setSkillFilter("semantic ui")}>Semantic UI</Button>
                                <Button onClick={() => setSkillFilter("material ui")}>Material UI</Button>
                                <Button onClick={() => setSkillFilter("webrtc")}>WEBRTC</Button>
                                <Button onClick={() => setSkillFilter("socket")}>Socket</Button>

                            </ButtonGroup>
                        </NavDropdown>
                        <NavDropdown eventKey={3} title="Availability" >
                            <ButtonGroup vertical={true} block>
                                <Button onClick={() => setAvailabileFilter("Available Now")}>Available</Button>
                                <Button onClick={() => setAvailabileFilter("in less than 1 month")}>In less than 1
                                    month</Button>
                                <Button onClick={() => setAvailabileFilter("in less than 2 months")}>In less than 2
                                    months</Button>
                                <Button onClick={() => setAvailabileFilter("3 months or more")}>3 months or
                                    more</Button>
                            </ButtonGroup>
                        </NavDropdown>
                        <NavDropdown eventKey={3} title="Show Students" >
                            <Button onClick={showAll} vertical="true" block>
                                Show All
                            </Button>
                            <Button onClick={showTwo} vertical="true" block>
                                Show Two
                            </Button>
                        </NavDropdown>
                        <NavDropdown eventKey={3} title="Show List" >
                            <Button onClick={showSelected} vertical="true" block>
                                Show Your List
                            </Button>
                        </NavDropdown>
                    </Nav>
                </Col>
                <Col sm={8}>
                    <Tab.Content animation>
                        <Tab.Pane eventKey="first">

                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            <ButtonGroup vertical={true} block>


                            </ButtonGroup>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">

                        </Tab.Pane>
                        <Tab.Pane eventKey="fourth">

                        </Tab.Pane>
                        <Tab.Pane eventKey="fifth">

                        </Tab.Pane>

                        <Tab.Pane eventKey="sixth">

                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    </div>
);


export default FilterSection;
