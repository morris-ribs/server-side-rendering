import Inferno from 'inferno';
import Component from 'inferno-component';

/* eslint-disable no-console */
class DiscComponent extends Component {
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

export default DiscComponent;