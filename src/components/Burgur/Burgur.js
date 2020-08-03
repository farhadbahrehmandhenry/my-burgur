import React from 'react';
import BurgurIngridient from './BurgurIngridient/BurgurIngridient';
import classes from './Burgur.css';

const burgur = (props) => {
  return (
    <div className={classes.Burgur}>
      <BurgurIngridient type='salad'/> 
      <BurgurIngridient type='meat'/> 
    </div>
  );
}

export default burgur;