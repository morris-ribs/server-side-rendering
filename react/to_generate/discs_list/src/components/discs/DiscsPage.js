import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import Discs from './DiscsComponent';

/* eslint-disable no-console */
class DiscsPage extends Component { 
    constructor(props, context) {
        super(props, context);

        this.state = {
          candidate: Object.assign({}, this.props.candidate)
        };
    }
    
    render() {   
        const discs = this.props.discs;
        
        return (
            <div>
                <h3>Your music store is here (in React)!</h3>
                <Discs discs={discs} />
            </div>
        );
    }
}

DiscsPage.propTypes = {
    discs: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {        
        discs: state.discs
    };
}
const connectedStateAndProps = connect(mapStateToProps); 

export default connectedStateAndProps(DiscsPage);