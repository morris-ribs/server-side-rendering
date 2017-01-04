import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import Disc from './DiscComponent';

/* eslint-disable no-console */
class DiscPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
          discs: Object.assign({}, this.props.discs)
        };
    }
    
    render() {
        const discsToDisplay = (this.props.discs.albums) ? this.props.discs.albums : [];
        return (
            <div>
                <Disc discs={discsToDisplay} />
            </div>
        );
    }
}

DiscPage.propTypes = {
    discs: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {        
        discs: state.discs
    };
}

const connectedStateAndProps = connect(mapStateToProps); 

export default connectedStateAndProps(DiscPage);