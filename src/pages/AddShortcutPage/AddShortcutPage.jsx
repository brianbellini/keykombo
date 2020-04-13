import React, {Component} from 'react';

class AddShortcutPage extends Component {
  state = {
    invalidForm: true,
    formData: {
      function: '',
      combo: '',
      menu: '',
      application: '',
    }
  };

  render(){
      return (
        <>
            <h1>Add a KeyKombo</h1>
        </>
      )
  }

}

export default AddShortcutPage;