import Inferno from 'inferno';
import Component from 'inferno-component';
import {fetchDiscs} from '../../api/DiscApiClient';

/* eslint-disable no-console */
class DiscComponent extends Component {
    constructor(props) {
		super(props);
		this.state = {
            data: { "albums": [] }
		};
	}

    componentDidMount() {
		fetchDiscs().then(data => {
            this.setState({
				data
			});  
      }).catch(error => { 
          console.log(error.message);
      });
	}
    render() {        
        return ( 
            <div>
                <ul> 
                    {this.state.data.albums.map(disc => 
                        <li key={disc.title}>{disc.title}</li>
                    )} 
                </ul>             
            </div>
        );
    }
}

export default DiscComponent;