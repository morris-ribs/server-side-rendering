import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

/* eslint-disable no-console */
class DiscComponent extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return ( 
            <div>
                <ul> 
                    {this.props.discs.map(disc => 
                        <li key={disc.title}>{disc.title}</li>
                    )} 
                </ul>             
            </div>
        );
    }
}

DiscComponent.propTypes = {
    discs: PropTypes.array.isRequired
};

export default DiscComponent;