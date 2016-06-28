import React from 'react';
import Popover from './popover';

export default class Highlights extends React.Component {

  componentDidMount() {
    window.addEventListener('mouseup', this.selected.bind(this));
  }

  onSave = () => {
    const popover = this.refs.popover;
    const {target, selection, paragraph_id } = popover.state;
    const {anchorOffset, focusOffset} = selection;
    popover.hide();
    this.markParagraph(paragraph_id, anchorOffset, focusOffset);
  }

  selected = (event) => {
    const selection = document.getSelection();
    const {anchorOffset, focusOffset} = selection;
    if(anchorOffset !== focusOffset &&
      this.rootDOM.contains( event.target ) &&
      !this.refs.popover.contains(event)
     ) {
      this.refs.popover.show(event.target, selection);
    } else {
      this.refs.popover.hide();
    }
  }

  markParagraph = (paragraph_id, anchorOffset, focusOffset) => {
    const paragraph = this.findParagraph(paragraph_id);
    if(paragraph) {
      paragraph.innerHTML = '<!-- ' + paragraph.childNodes[0].textContent + ' -->' +
        paragraph.textContent.replace(paragraph.textContent.substring(anchorOffset, focusOffset),
          (text) => `<span class="highlight">${text}</span>`) +
        '<!-- ' + paragraph.childNodes[2].textContent + ' -->';
    }
  }

  findParagraph = (paragraph_id) => {
    return Array.prototype.filter.call(this.rootDOM.querySelectorAll('p'), function(paragraph){
      let achou = false;
      const comment = paragraph.childNodes[0];
      if( comment && comment.textContent) {
        var text = comment.textContent;
        var count = text.match(`react-text: ${paragraph_id}`);
        achou = count && count.length;
      }
      return achou;
    })[0];
  }

  render() {
    return (
      <div ref={(ref) => {this.rootDOM = ref}}>
        <Popover ref="popover" onSave={this.onSave.bind(this)} />
        {this.props.children}
      </div>
    );
  }
}
