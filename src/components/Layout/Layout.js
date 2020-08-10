import React, {Component} from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import Slidedrawer from '../Navigation/Sidedrawer/Slidedrawer';
import classes from './Layout.css';

class layout extends Component {
  state = {
    showSlideDrawer: false
  }

  canselShowSlideDrawer() {
    this.setState({showSlideDrawer: false});
  }

  openShowSlideDrawer() {
    this.setState((prevState) => {
      return {showSlideDrawer: !prevState.showSlideDrawer}
    });
  }

  render () {
    console.log(this.state)
    return (
      <Auxiliary>
        <div>
          <Toolbar DrawerToggleClicked={() => this.openShowSlideDrawer()} />
          <Slidedrawer closed={() => this.canselShowSlideDrawer()} open={this.state.showSlideDrawer}/>
        </div>
        <div className={classes.content}>
          {this.props.children}
        </div>
      </Auxiliary>
    )
  }
}

export default layout;