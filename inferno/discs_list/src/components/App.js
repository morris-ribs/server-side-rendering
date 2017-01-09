// This component handles the App template used on every page
import Inferno, {PropTypes} from 'inferno';
import Component from 'inferno-component';
import DiscPage from '../components/disc/DiscPage';

class App extends Component {
    render() {
        return(
            <div>
                { this.props.children }
            </div>
        );
    }
}

export default App;