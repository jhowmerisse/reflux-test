import React from 'react';
import Reflux from 'reflux';
import StatusStore from './StoreTest';
import Actions from './ActionTest';


class ComponentTest extends Reflux.Component {

  constructor() {
    super();
    this.state = {};
    this.store = StatusStore;

    this.onclick = this.onclick.bind(this);
  }

  onclick() {
    Actions.statusUpdate(this.state.flag === 'ONLINE' ? false : true);
  }
  render() {
    var flag = this.state.flag;
    return( <div>
      <button onClick = {this.onclick}>User is {flag}</button>
      </div>
    )}
}
export default ComponentTest;