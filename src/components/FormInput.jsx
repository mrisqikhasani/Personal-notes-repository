import React from "react";

class FormInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      limit: 50,
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler= this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    if (event.target.value.length <= this.state.limit) {
      this.setState(() => {
        return {
          title: event.target.value,
        };
      });
    }
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event){
    event.preventDefault();
    this.props.addNotes(this.state);
    this.setState(()=>{
      return {
        title: '',
        body: ''
      }
    })
  }

  render() {
    return (
      <form onSubmit={this.onSubmitEventHandler}>
        <p className="note-input__title__char-limit">
          Character limits: {this.state.limit - this.state.title.length}
        </p>
        <input
          onChange={this.onTitleChangeEventHandler}
          value={this.state.title}
          type="text"
          className="note-input_-title"
          placeholder="Insert the title..."
          required
        />
        <textarea
          onChange={this.onBodyChangeEventHandler}
          value={this.state.body}
          className="note-input__body"
          type="text"
          placeholder="Insert your Notes..."
          required
        ></textarea>
        <button type="submit">Create</button>
      </form>
    );
  }
}

export default FormInput;
