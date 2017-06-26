'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _react=require('react');var _react2=_interopRequireDefault(_react);var _numeral=require('numeral');var _numeral2=_interopRequireDefault(_numeral);var _mapRange=require('map-range');var _mapRange2=_interopRequireDefault(_mapRange);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function Bar(props){var mapped=(0,_mapRange2.default)(function(x){return x;},props.rangeStart,props.rangeEnd,0,1);return props.withScore?_react2.default.createElement('div',{className:'bar'},_react2.default.createElement('div',{className:'bar--full-bar'},_react2.default.createElement('div',{className:'bar--value-bar',style:{width:Math.round(mapped(props.score)*100)+'%'}})),_react2.default.createElement('div',{className:'bar--score'},(0,_numeral2.default)(props.score).format('0.00'))):_react2.default.createElement('div',{className:'bar'},_react2.default.createElement('div',{className:'bar--full-bar bar--full-bar_bar-only'},_react2.default.createElement('div',{className:'bar--value-bar',style:{width:Math.round(mapped(props.score)*100)+'%'}})));}Bar.propTypes={score:_react2.default.PropTypes.number,// percentage number from 0 - 100
withScore:_react2.default.PropTypes.bool,// show score or not
rangeStart:_react2.default.PropTypes.number,rangeEnd:_react2.default.PropTypes.number};Bar.defaultProps={score:0,withScore:true,rangeStart:0,rangeEnd:1};exports.default=Bar;module.exports=exports['default'];
//# sourceMappingURL=Bar.js.map