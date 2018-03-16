import React, {Component} from 'react';
import {
    Grid,
    Row,
    Col,
    Panel,
    PanelGroup,
    ListGroup,
    ListGroupItem
} from 'react-bootstrap';
import './Cards.css';

class RecipePanel extends Component {
    state = {
        recipes: this.props.recipes || []
    };
    render() {
        return (
            <div>
                <Grid>
                    <Row>
                        {this
                            .state
                            .recipes
                            .map(recipeList => (
                                <Col s={12} m={4} lg={4}>
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
                                            </Panel.Body>
                                        </Panel>
                                    </PanelGroup>
                                </Col>
                            ))}

                    </Row>
                </Grid>
            </div>

        )
    }
}

export default RecipePanel;