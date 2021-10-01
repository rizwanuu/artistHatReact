import { Col, Nav, Row, Tab } from 'react-bootstrap';
import './artistProfile.css'
import ArtistNav from "./Components/navbar/artistNav";


const ArtistProfile = () => {
    return (
        <div className="artistProfile">
            <ArtistNav />
            <div className="artistProfileMain">
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            {/* <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                </Nav.Item>
                            </Nav> */}
                        </Col>
                        <Col sm={9}>
                            {/* <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <p>But do thy worst to steal thyself away, For term of life thou art assured mine;
                                        And life no longer than thy love will stay, For it depends upon that love of thine.
                                        Then need I not to fear the worst of wrongs, When in the least of them my life hath end.
                                        I see a better state to me belongs Than that which on thy humour doth depend:
                                        Thou canst not vex me with inconstant mind, Since that my life on thy revolt doth lie.
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <p>But do thy worst to steal thyself away, For term of life thou art assured mine;
                                        And life no longer than thy love will stay, For it depends upon that love of thine.
                                        Then need I not to fear the worst of wrongs, When in the least of them my life hath end.
                                        I see a better state to me belongs Than that which on thy humour doth depend:
                                        Thou canst not vex me with inconstant mind, Since that my life on thy revolt doth lie.
                                    </p>
                                </Tab.Pane>
                            </Tab.Content> */}
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        </div>
    )
}
export default ArtistProfile;