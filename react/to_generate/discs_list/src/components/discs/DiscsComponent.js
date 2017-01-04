import React, { Component, PropTypes } from 'react';

class DiscComponent extends Component {
    render(){
       const discs = this.props.discs;
       if (discs && discs.length){
            return (
                <ul>
                    {this.props.discs.map(disc => 
                        <li key={disc.id}>{disc.title} - {disc.artist} ({disc.year})</li>
                    )}
                </ul>
            );
       }
       return <div />;
    }
}

DiscComponent.propTypes = {
    discs: PropTypes.array
};

export default DiscComponent;