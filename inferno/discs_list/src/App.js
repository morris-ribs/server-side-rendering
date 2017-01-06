import Inferno from 'inferno';
import Component from 'inferno-component';
import Logo from './logo';
import DiscPage from './components/DiscPage';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Logo width="80" height="80"/>
          <h2>Welcome to Inferno</h2>
        </div>
        <p className="App-intro">
          <DiscPage />
        </p>
      </div>
    );
  }
}

export default App;
