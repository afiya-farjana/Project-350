import React from 'react';
import './special-instructions.scss';

var SpecialInstructions = React.createClass({

    propTypes: {
        handleSpecialInstructions: React.PropTypes.func
    },

    render: function() {
        return (
            <section id="special-instructions">
                <form>
                <textarea
                    onChange={this.props.handleSpecialInstructions}
                    placeholder="Your Contact Number"
                    rows="1"
                    cols="100" required ></textarea>
                    <input type="submit"></input>
                    </form>
            </section>
        )
    }
});

module.exports = SpecialInstructions;
