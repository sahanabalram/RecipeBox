import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import './Cards.css';
class RecipeCards extends Component {
    state = {
        recipes: this.props.recipes || []
    };
    render() {
        return (
            <div className="container">
                <Grid>
                    <Row>
                        {this
                            .state
                            .recipes
                            .map(recipeList => (
                                <Col s={12} m={4} lg={4}>
                                    <div className="card border-info mb-3">
                                        <div className="card-header">{recipeList.name}</div>
                                        <div className="card-body">
                                            <p className="card-text">{recipeList.ingredients}</p>
                                        </div>
                                    </div>
                                </Col>
                            ))}

                    </Row>
                </Grid>

            </div>

        )
    }
}

export default RecipeCards;