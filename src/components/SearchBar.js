import React from 'react';

class SearchBar extends React.Component {

// legacy solution of the this problem,
// creates entirely new function and replaces the 'broken' one
//    constructor () {
//        this.onFormSubmit = this.onFormSubmit.bind(this);
//    }

    state = { term: '' };

//    onFormSubmit(event) {
//        event.preventDefault();
//         will produce error "Cannot read property 'state' of undefined"
//         this in js function is what is the function called on i.e
//         car.drive() - "this" in "drive" will be "car"
//         console.log(this.state.term);
//    }

// using arrow function solves the problem
    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    render () {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={ this.onFormSubmit }>
                    <div className="field">
                        <label>Image search</label>
                        <input type="text"
                            value={ this.state.term }
                            onChange={ (e) => this.setState({term: e.target.value}) }
                        />
                    </div>
                </form>
            </div>
        );
    }
};

export default SearchBar;