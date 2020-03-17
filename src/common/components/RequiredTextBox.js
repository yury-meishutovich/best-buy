import React from 'react';
import PropTypes from 'prop-types';

class RequiredTextBox  extends React.Component {
  
  constructor(props) {
    super(props);
    this.focusRef = React.createRef();
  }

    componentDidMount() {
        if (this.props.focus) {
            this.focusRef.current.focus();
        }
    }

    handleTextChange = (e) =>  {            
      this.props.onTextChange(e.target.value, this.props.name);
    }
      
    render() {
      
        return (<div className="controls">
            <label>{this.props.caption}</label>
            <input ref={this.focusRef} type='text' value={this.props.text} className={`form-control ${this.props.text.length === 0 && 'input-validation-error'}`}
                onChange={this.handleTextChange} />
        </div>);
    }    
  }

RequiredTextBox.propTypes = {
    caption: PropTypes.string.isRequired,
    focus: PropTypes.bool,
    name: PropTypes.string.isRequired,
    onTextChange: PropTypes.func.isRequired,
    text: PropTypes.string    
};


export default RequiredTextBox;