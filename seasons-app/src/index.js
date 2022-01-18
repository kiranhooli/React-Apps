import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './components/SeasonDisplay'
import Spinner from './components/Spinner'

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   //Initialize state: Type 1
  //   this.state = { lat: null, errMsg: '' };
  // }
  //Initialize state: Type 2
  state = { lat: null, errMsg: '' }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errMsg: err.message })
    )
  }

  renderBody() {
    if (this.state.lat && !this.state.errMsg) {
      return <SeasonDisplay lat={this.state.lat} />
    }
    if (this.state.errMsg && !this.state.lat) {
      return <div>Error : {this.state.errMsg}</div>
    }
    return <Spinner message="Please accept location request" />
  }
  render() {
    return (
      <div className="border red">
        {this.renderBody()}
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
