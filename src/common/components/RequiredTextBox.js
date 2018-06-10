import React from 'react';
import PropTypes from 'prop-types';

class RequiredTextBox  extends React.Component {
  
  constructor(props) {
    super(props);
    this.focusRef = React.createRef();
  }

    handleTextChange = (e) =>  {            
      this.props.onTextChange(e.target.value, this.props.name);
    }
      
    render() {
      
      return <div className="controls">
                <label>{this.props.caption}</label>
                <input ref={this.focusRef}  type='text' value={this.props.text} className={`form-control ${this.props.text.length === 0 && 'input-validation-error'}`}  
                onChange={this.handleTextChange}/>
            </div>
    }

    componentDidMount() {
      if (this.props.focus) {
        this.focusRef.current.focus();
      }
    }
  }

  RequiredTextBox.propTypes = {
    onTextChange : PropTypes.func.isRequired,
    caption : PropTypes.string.isRequired,
    text : PropTypes.string,
    name : PropTypes.string.isRequired,
    focus : PropTypes.bool
  }


export default RequiredTextBox;