import React from 'react';
import ReactDom from 'react-dom';
import styles from './scss/detail.scss';
import imgUrl from '../../assets/images/1.png';

class Main extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div className={styles.detail}>
        <img src={imgUrl} alt="" />
      </div>
    );
  }
}

ReactDom.render(<Main />, document.getElementById('root'));
