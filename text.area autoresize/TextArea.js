import React, { Component } from "react";
import styled from "styled-components";

const Textarea = styled.textarea`
  position: relative;
  font-family: "PT Sans", sans-serif;
  font-weight: 700;
  font-size: 1.2em;
  width: 100%;
  outline: none;
  background-color: transparent;
  box-sizing: border-box;
  border: none;
  resize: none;
  line-height: 24px;
  overflow: auto;
  height: auto;
  padding: 8px;
  color: #fff;
`;

class TextArea extends Component {
  state = {
    value: "",
    rows: 5,
    minRows: 5,
    maxRows: 10,
  };

  handleChange = (event) => {
    const textareaLineHeight = 24;
    const { minRows, maxRows } = this.state;

    const previousRows = event.target.rows;
    event.target.rows = minRows; // reset number of rows in textarea

    const currentRows = ~~(event.target.scrollHeight / textareaLineHeight);

    if (currentRows === previousRows) {
      event.target.rows = currentRows;
    }

    if (currentRows >= maxRows) {
      event.target.rows = maxRows;
      event.target.scrollTop = event.target.scrollHeight;
    }

    this.setState({
      value: event.target.value,
      rows: currentRows < maxRows ? currentRows : maxRows,
    });
  };
  render() {
    return (
      <Textarea
        rows={this.state.rows}
        value={this.state.value}
        placeholder={"Опишите свой торт..."}
        onChange={this.handleChange}
      />
    );
  }
}

export default TextArea;
