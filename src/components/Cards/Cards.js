import React, {Component} from 'react';
import {
    Grid,
    Row,
    Col,
    Panel,
    PanelGroup,
    ButtonToolbar,
    Button,
    ListGroup,
    ListGroupItem,
    Modal
} from 'react-bootstrap';
import './Cards.css';

class RecipePanel extends Component {
    constructor(props, context) {
        super(props, context);
    
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    
        this.state = {
          show: false,
          recipes: this.props.recipes || []
        };
      }
      handleClose() {
        this.setState({ show: false });
      }
    
      handleShow() {
        this.setState({ show: true });
      }
    render() {
        return (
            <div>
                <Grid>
                    <Row>
                        {this
                            .state
                            .recipes
                            .map(recipeList => (
                                <Col s={12} m={12} lg={12}>
                                    <PanelGroup accordion id="accordion-uncontrolled-example" defaultActiveKey="2">
                                        <Panel eventKey="1">
                                            <Panel.Heading>
                                                <Panel.Title toggle>{recipeList.name}</Panel.Title>
                                            </Panel.Heading>
                                            <Panel.Body collapsible>
                                                <ListGroup>
                                                    {recipeList
                                                        .ingredients
                                                        .map(ingredient => (
                                                            <ListGroupItem>{ingredient}</ListGroupItem>
                                                        ))}
                                                </ListGroup>
                                                        <ButtonToolbar>
                                                            <Button bsStyle="danger">Delete</Button>
                                                            <Button bsStyle="default">Edit</Button>
                                                        </ButtonToolbar>
                                            </Panel.Body>
                                        </Panel>
                                    </PanelGroup>
                                </Col>
                            ))}

                    </Row>
                    <ButtonToolbar>
                        <Button bsStyle="info">Add Recipes</Button>
                    </ButtonToolbar>

                    {/*Modal for add recipes code */}
                    <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    </Modal.Body>
                    </Modal>
                </Grid>
            </div>

        )
    }
}

export default RecipePanel;