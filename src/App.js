import React, {
  Component
} from 'react';
import './css/App.css';
import Form from './Form'

class App extends Component {
  render() {
    return (
      <div className = "App" >
        <div className = "FormWrapper">
          <p id = "reactTitle" >SIGN UP< /p>
          <Form />
        </div>
      </div>
    );
  }
}

export default App;
