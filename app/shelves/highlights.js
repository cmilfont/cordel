import React from 'react';
import Popover from './popover';

export default class Highlights extends React.Component {

  componentDidMount() {
    window.addEventListener('mouseup', this.selected.bind(this));

    if( this.props.highlights ) {
      this.props.highlights.forEach(this.markParagraph, this);
    }

  }

  onSave = () => {
    const popover = this.refs.popover;
    const {paragraph_id, selection} = popover.state;
    popover.hide();
    this.markParagraph( { paragraph_id, text: selection.toString() } );
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

  templating = (text) => `<span class="highlight">${text}</span>`;

  markParagraph = ({paragraph_id, text}) => {

    console.log(paragraph_id, text);

    const paragraph = this.findParagraph(paragraph_id);

    if(paragraph) {
      let textContent = paragraph.textContent.replace(text, this.templating);
        const commentStart = paragraph.childNodes[0].textContent;
        const commentEnd = paragraph.childNodes[2].textContent;

      paragraph.innerHTML = `<!-- ${commentStart} --> ${textContent} <!-- ${commentEnd} -->`;
    }
  }

  findParagraph = (paragraph_id) => {
    return Array.prototype.filter.call(this.rootDOM.querySelectorAll('p'), function(paragraph){
      let found = false;
      const comment = paragraph.childNodes[0];
      if( comment && comment.textContent) {
        let text = comment.textContent;
        let count = text.match(`react-text: ${paragraph_id}`);
        found = count && count.length;
      }
      return found;
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
