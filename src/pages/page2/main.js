import React from 'react';
import ReactDom from 'react-dom';

class Main extends React.Component {
  componentDidMount() {}

  render() {
    return <div>index</div>;
  }
}

ReactDom.render(<Main />, document.getElementById('root'));
