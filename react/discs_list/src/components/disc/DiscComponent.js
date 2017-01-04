import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

/* eslint-disable no-console */
class DiscComponent extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    
    render() {
        const discsToDisplay = this.props.discs;

        return (
            <div>
               {discsToDisplay.title}
            </div>
        );
    }
}

DiscComponent.propTypes = {
    discs: PropTypes.object.isRequired
};

export default DiscComponent;