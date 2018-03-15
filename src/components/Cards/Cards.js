import React, {Component} from 'react';

class RecipeCards extends Component {
    render() {
        return (
            <div class="card border-info mb-3">
                <div class="card-header">Header</div>
                <div class="card-body">
                    <h4 class="card-title">Info card title</h4>
                    <p class="card-text">Some quick example text to build on the card title and make
                        up the bulk of the card's content.</p>
                </div>
            </div>
        )
    }
}

export default RecipeCards;