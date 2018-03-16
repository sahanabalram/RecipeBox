import React, {Component} from 'react';
import {
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
    state = {
        recipes: this.props.recipes || [],

        showAdd: false,
    };
    // delete recipe function
    deleteRecipe(index) {
        // make a copy of the recipe and then delete the copy and reset the state
        let recipes = this
            .state
            .recipes
            .slice();
        recipes.splice(index, 1);
        // set the state back to inital state
        this.setState({recipes});
    }
    handleClose() {
        if(this.state.showAdd) {
            this.setState({ showAdd: false });
        }
    }
    render() {
        const {recipes} = this.state;
        return (
            <div className="container">
                {recipes.map((recipeList, index) => (
                    <PanelGroup accordion id="accordion-uncontrolled-example" defaultActiveKey="2">
                        <Panel eventKey={index} key={index}>
                            <Panel.Heading>
                                <Panel.Title toggle>{recipeList.name}</Panel.Title>
                            </Panel.Heading>
                            <Panel.Body collapsible>
                                <ListGroup key={index}>
                                    {recipeList
                                        .ingredients
                                        .map(ingredient => (
                                            <ListGroupItem>{ingredient}</ListGroupItem>
                                        ))}
                                </ListGroup>
                                <ButtonToolbar>
                                    <Button bsStyle="danger" onClick={(event) => this.deleteRecipe(index)}>Delete</Button>
                                    <Button bsStyle="default">Edit</Button>
                                </ButtonToolbar>
                            </Panel.Body>
                        </Panel>
                    </PanelGroup>
                ))}

                {/*Modal for add recipes code */}
                <Modal show={this.state.showAdd} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body></Modal.Body>
                </Modal>
                <ButtonToolbar>
                    <Button bsStyle="info">Add Recipes</Button>
                </ButtonToolbar>

            </div>

        )
    }
}

export default RecipePanel;