import React, { Component } from "react";
import styled from "styled-components";

const Border = styled.div`
  position: relative;
  padding: 0.1em;
  cursor: text;
  font-size: 14px;
`;
const Tags = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-item: baseline;
`;

const Tag = styled.div`
  padding: 0.2em 0.1em;
  margin: 0.2em;
  position: relative;
  display: flex;
  overflow: hidden;
  overflow-wrap: anywhere;
  align-items: center;
  justify-content: space-between;
`;

const Input = styled.div`
  width: auto;
  margin: 0.4em;
  flex: 1;
  min-width: 12%;
`;
const Input2 = styled.input`
  width: 100%;
  color: #fff;
  font-family: "PT Sans", sans-serif;
  font-weight: 700;
  border: 0;
  padding: 0 !important;
  font-size: 1.1em;
  margin: 0.2em 0em;
  outline: none;
  background-color: transparent;
  appearance: none;
  -webkit-touch-callout: none;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
`;

class Order extends Component {
  state = {
    tags: [],
    value: "",
  };
  render() {
    const { tags, value } = this.state;
    return (
      <Border>
        <Tags>
          {tags.map((tag, i) => {
            return <Tag>#{tag}</Tag>;
          })}
          <Input>
            <Input2
              placeholder={tags.length === 0 ? "#ключевые слова" : null}
              value={value}
              onChange={(e) => {
                this.setState({
                  value: e.target.value,
                });
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  if (tags.includes(value) || value.trim().length === 0) {
                    this.setState({
                      value: "",
                    });
                    return;
                  }
                  this.setState({
                    tags: [...tags, value],
                    value: "",
                  });
                }
                if (e.key === "Backspace" && value.length === 0) {
                  tags.splice(-1, 1);
                  this.setState({
                    tags: tags,
                  });
                }
              }}
              type="text"
            />
          </Input>
        </Tags>
      </Border>
    );
  }
}

export default Order;
