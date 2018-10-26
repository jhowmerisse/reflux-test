import Reflux from 'reflux';
import Actions from './ActionTest'

class StatusStore extends Reflux.Store {
  
  constructor() {
    super();
    this.listenables = Actions;
    this.state = { flag : 'OFFLINE'};
  }

  onStatusUpdate(status) {
    var newFlag = status ? 'ONLINE' : 'OFFLINE';
    this.setState({flag: newFlag});
  }
}
export default StatusStore;