import React, {Component} from 'react';

class ShortcutAdd extends Component {
  state = {
    invalidForm: true,
    formData: {
      application: '',
      func: '',
      description: '',
      combo: '',
      menu: '',
    }
  };

  formRef = React.createRef();

  handleChange = e => {
    const formData = {...this.state.formData, [e.target.name]: e.target.value};
    this.setState({
      formData,
      invalidForm: !this.formRef.current.checkValidity()
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleAddShortcut(this.state.formData);
  };

  render(){
    return (
      <>
        <h1>Add Shortcut</h1>
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
            disabled={this.state.invalidForm}>
            ADD SHORTCUT
          </button>
        </form>
        <h4>{}</h4>
      </>
    );
  }

}

export default ShortcutAdd;