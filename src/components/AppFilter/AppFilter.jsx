import React, {Component} from 'react';

class AppFilter extends Component {
  

    handleChange = e => {
        this.props.handleFilter(e.target.value); 
    };

    render() {
        return (
                <div>
                <select name="application" value='Applications' onChange={this.handleChange}>
                    {this.props.applications.map((application, idx) => <option key={idx} value={application}>{application}</option>)}
                </select>
                </div>
        )
    }
}

export default AppFilter;