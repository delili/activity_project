import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      field: "",
      message: ""
    };
  }

  renderFieldLength() {
    return <p>{`${this.state.field.length} character(s).`}</p>;
  }

  updateFieldLength(event) {
    const field = event.target.value;
    this.setState({ field });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.field.length >= 100) {
      this.setState({ message: "You have submitted your post!" });
    } else {
      this.setState({ message: "Post must be at least 100 characters long." });
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Write a Blog Post</h1>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <textarea
            cols="80"
            rows="10"
            value={this.state.field}
            onChange={this.updateFieldLength.bind(this)}
            placeholder="Write your post here..."
          ></textarea>
          <br />
          {this.renderFieldLength()}
          <button type="submit">Submit Post</button>
        </form>
        {this.state.message && <p>{this.state.message}</p>}
      </div>
    );
  }
}

export default App;
