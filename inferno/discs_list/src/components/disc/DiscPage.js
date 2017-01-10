import Inferno from 'inferno';
import Component from 'inferno-component';
import Disc from './DiscComponent';
import {connect} from 'inferno-redux';

class DiscPage extends Component {
	render() {
		const discsToDisplay = (this.props.discs.albums) ? this.props.discs.albums : [];
        return (
            <div>
                <Disc discs={discsToDisplay} />
            </div>
        );
	}
}

function mapStateToProps(state) {
    return {        
        discs: state.discs
    };
}

const connectedStateAndProps = connect(mapStateToProps); 

export default connectedStateAndProps(DiscPage);