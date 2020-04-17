import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class ShortcutEditPage extends Component {
  
  state = {
    invalidForm: false,
    formData: {...this.props.getSelectedShortcut()},
  };

  formRef = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleUpdateShortcut(this.state.formData);
  };

  componentWillReceiveProps(nextProps) {
    // You don't have to do this check first, but it can help prevent an unneeded render
    if (nextProps.selectedShortcut !== this.state.formData) {
      this.setState({ formData: nextProps.selectedShortcut });
    }
  }

  handleChange = e => {
    this.setState({
      formData: {
        ...this.state.formData,
        [e.target.name]: e.target.value
      },
      invalidForm: !this.formRef.current.checkValidity()
    });
  };

  componentDidMount() {
    this.setState({
      formData: {...this.props.selectedShortcut}
    })
  }

  render() {
    console.log(this.props)
    return (
      <>
        <h1>Edit Shortcut</h1>
        <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
        <div>
          <div>
            <label>Application</label>
            <input
              name="application"
              value={this.state.formData.application}
              onChange={this.handleChange}
              required/>
          </div>
            <label>Function</label>
            <input
              name="func"
              value={this.state.formData.func}
              onChange={this.handleChange}
              required/>
          </div>
          <div>
            <label>Description</label>
            <input
              name="description"
              value={this.state.formData.description}
              onChange={this.handleChange}
              required/>
          </div>
          <div>
            <label>Keys</label>
            <input
              name="combo"
              value={this.state.formData.combo}
              onChange={this.handleChange}
              required/>
          </div>
          <div>
            <label>Menu</label>
            <input
              name="menu"
              value={this.state.formData.menu}
              onChange={this.handleChange}
              required/>
          </div>
          <button
            type="submit"
            className="btn"
            disabled={this.state.invalidForm}
          >
            SAVE CHANGES
          </button>&nbsp;&nbsp;
        </form>
        <button
          onClick={() => this.props.handleDeleteShortcut(this.props.selectedShortcut._id)}>
          X
        </button>
      </>
    );
  }
}

export default ShortcutEditPage;