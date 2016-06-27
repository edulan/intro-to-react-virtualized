'use strict';

var _ReactVirtualized = ReactVirtualized;
var VirtualScroll = _ReactVirtualized.VirtualScroll;
var createStyles = _ReactVirtualized.createStyles;

var items = Array(20000).fill(0);

var VirtualList = React.createClass({
  displayName: 'VirtualList',
  renderRow: function renderRow(_ref) {
    var index = _ref.index;

    return React.createElement(
      'div',
      { className: 'row' },
      'Row #',
      index + 1
    );
  },
  render: function render() {
    return React.createElement(VirtualScroll, {
      width: 300,
      height: 200,
      rowCount: items.length,
      rowHeight: 50,
      rowRenderer: this.renderRow,
    });
  }
});

var List = React.createClass({
  displayName: 'List',
  renderRow: function renderRow(_ref2) {
    var index = _ref2.index;

    return React.createElement(
      'div',
      { key: index, className: 'row', style: { height: 50 } },
      'Row #',
      index + 1
    );
  },
  render: function render() {
    var _this = this;

    return React.createElement(
      'div',
      { style: { width: 300, height: 200, overflowY: 'auto' } },
      items.map(function (_, index) {
        return _this.renderRow({ index: index });
      })
    );
  }
});


ReactDOM.render(React.createElement(VirtualList, null), document.getElementById('container'));
