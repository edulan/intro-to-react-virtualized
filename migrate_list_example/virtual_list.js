const VirtualList = React.createClass({
  renderRow({ index }) {
    const { name } = this.props.items[index];

    return (
      <div className='row'>
        {name}
      </div>
    );
  },

  render() {
    return (
      <VirtualScroll
        className='virtualList'
        width={300}
        height={100}
        rowHeight={50}
        rowCount={this.props.items.length}
        rowRenderer={this.renderRow}
       />
    );
  }
});
