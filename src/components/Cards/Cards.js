import React, {Component} from 'react';
import {
    Panel,
    PanelGroup,
    ButtonToolbar,
    Button,
    ListGroup,
    ListGroupItem,
    Modal,
    FormGroup, ControlLabel,FormControl
} from 'react-bootstrap';
import './Cards.css';

class RecipePanel extends Component {
    state = {
        recipes: this.props.recipes || [],
        showAdd: false,
        showEdit:false,
        currentIndex: 0,
        newRecipe: {name:"",ingredients:[]}
    };

// create a new recipe
updateRecipeName(name,ingredients) {
    this.setState({newRecipe:{name:name,ingredients:ingredients}});
}
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
    // close and open the modal for add recipe
    close = () => {
        if(this.state.showAdd) {
            this.setState({ showAdd: false });
        } else if(this.state.showEdit) {
            this.setState({showEdit: false});
        }
    }
// open modal for add recipe
    open =(state) => {
        this.setState({[state]: true})
    }
    // save new recipe
    saveRecipe(newRecipe) {
        let recipes = this.state.recipes.slice();
        recipes.push(newRecipe);
        this.setState({recipes});
        // reset the recipe
        this.setState({newRecipe:{name: "",ingredients:[]}});
        this.close();
    }

    render() {
        const {recipes,newRecipe} = this.state;
         console.log(newRecipe);
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
                <Modal show={this.state.showAdd} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Recipe</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <FormGroup controlId="formBasicText">
                        <ControlLabel> Recipe Name</ControlLabel>
                        <FormControl
                        type="text"
                        value={newRecipe.name}
                        placeholder="Enter recipe name"
                        onChange = {(event) => this.updateRecipeName(event.target.value,newRecipe.ingredients)}>
                        </FormControl>
                    </FormGroup>
                    <FormGroup controlId="formControlsTextarea">
                        <ControlLabel> Ingredients</ControlLabel>
                        <FormControl
                        type="textarea"
                        value={newRecipe.ingredients}
                        placeholder="Enter ingredients (Separated By Comma)"
                        onChange = {(event) => this.updateRecipeName(newRecipe.name, event.target.value.split(","))}
                        >
                       
                        </FormControl>

                        
                    </FormGroup>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button bsStyle="success" onClick={(event) => this.saveRecipe(newRecipe)}>Save</Button>
                    </Modal.Footer>
                </Modal>

                {/*Modal for edit recipes code */}
                <Modal show={this.state.showEdit} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Recipe</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <FormGroup controlId="formBasicText">
                        <ControlLabel> Recipe Name</ControlLabel>
                        <FormControl
                        type="text"
                        value={recipes[currentIndex].name}
                        placeholder="Enter recipe name"
                        onChange = {(event) => this.updateRecipeName(event.target.value,currentIndex)}>
                        </FormControl>
                    </FormGroup>
                    <FormGroup controlId="formControlsTextarea">
                        <ControlLabel> Ingredients</ControlLabel>
                        <FormControl
                        type="textarea"
                        value={newRecipe.ingredients}
                        placeholder="Enter ingredients (Separated By Comma)"
                        onChange = {(event) => this.updateRecipeName(newRecipe.name, event.target.value.split(","))}
                        >
                       
                        </FormControl>

                        
                    </FormGroup>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button bsStyle="success" onClick={(event) => this.saveRecipe(newRecipe)}>Save</Button>
                    </Modal.Footer>
                </Modal>
                <ButtonToolbar>
                    <Button bsStyle="primary" onClick={(event)=>this.open("showAdd")}>Add Recipes</Button>
                </ButtonToolbar>

            </div>

        )
    }
}

export default RecipePanel;