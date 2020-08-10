import React, {Component} from 'react';
import classes from './Model.css';
import BackDrop from '../Backdrop/Backdrop';
import Auxiliary from '../../../hoc/Auxiliary';

class Model extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show;
  }

  render() {
    return (
      <Auxiliary>
        <BackDrop show={this.props.show} clicked={() => this.props.backDropClicked()}/>
        <div 
          className={classes.Model}
          style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? 1 : 0
          }}  
        >
        {this.props.children}
        </div>
    </Auxiliary>
    )
  }
}

export default Model;
