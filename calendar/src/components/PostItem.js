import React, { Component } from "react";

class PostItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      body: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

    handleChange(e){
      this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit(e){
      e.preventDefault();

      const post = {
          title: this.state.title,
          body: this.state.body
      };

      fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(post)
      })
          .then(res => res.json())
          .then(data =>  console.log(data))
    }


  render() {
    return (
        <div>
          <label>Title:</label>
            <br/>
            <input
                type="text"
                name="title"
                onChange={this.handleChange}
            />
            <br/>
            <textarea name="body"/>
            <button onClick={this.handleSubmit}>submit</button>
        </div>
    );
  }
}

export default PostItem;
