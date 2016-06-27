const List = React.createClass({
  renderRow({ name }) {
    return (
      <div className='row' style={{height: 50}}>
        {name}
      </div>
    );
  },

  render() {
    return (
      <div className='list' style={{width: 300, height: 100}}>
        {this.props.items.map(this.renderRow)}
      </div>
    );
  }
});
