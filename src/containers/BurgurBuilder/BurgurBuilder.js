import React, {Component} from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Burgur from '../../components/Burgur/Burgur';

class BurgurBuilder extends Component {
  render () {
    return (
      <Auxiliary >
        <Burgur />
        <div>build controls</div>
      </Auxiliary>  
    );
  }
}

export default BurgurBuilder;