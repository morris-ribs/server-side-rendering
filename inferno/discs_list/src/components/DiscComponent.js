import Inferno from 'inferno';
import Component from 'inferno-component';
import {fetchDiscs} from '../api/DiscApiClient';

/* eslint-disable no-console */
class DiscComponent extends Component {
    constructor(props) {
		super(props);
		this.state = {
			discs: []
		};
	}

    componentDidMount() {
		fetchDiscs().then(discs => {
            console.log(discs);
            this.setState({
				discs
			});  
      }).catch(error => { 
          console.log(error.message);
      });
	}
    render() {
        return ( 
            <div>
                <ul> 
                    {this.state.discs.map(disc => 
                        <li key={disc.title}>{disc.title}</li>
                    )} 
                </ul>             
            </div>
        );
    }
}

export default DiscComponent;