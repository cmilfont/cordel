import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import {grey600, grey900} from 'material-ui/styles/colors';

export default class Popover extends React.Component {

  state = { selection: {}, target: {} }

  hide = () => {
    const el = this.refs.el;
    el.style.display = 'none';
  }

  show = (target, selection) => {

    const paragraph_id = target.childNodes[0].textContent.replace(" react-text: ", "").trim();
    if( paragraph_id ) {
      this.setState({ target: target, selection: selection, paragraph_id: paragraph_id });
      let [top, left] = [0, 0];
      const el = this.refs.el;
      if(  selection.getRangeAt ) {
        const coords = selection.getRangeAt(0).cloneRange().getBoundingClientRect();
        top = coords.bottom;
        left = coords.left;
      }
      el.style.top =  `${top}px`;
      el.style.left = `${left}px`;
      el.style.display = 'block';
    } else {
      this.hide();
    }
  }

  contains = (event) => {
    return this.refs.el.contains( event.target );
  }

  render() {

    return (
      <div className="popover" ref="el">
        <FlatButton
          onClick={this.props.onSave}
          backgroundColor={grey900}
          hoverColor={grey600}
          style={{ 'margin' : 'auto' }}
          icon={<FontIcon className='fa fa-pencil' />}
        />
      </div>
    );
  }

}
