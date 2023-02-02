import React from "react";

class Card extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    const { item } = this.props;
    return (
      <a href={item.url} className="card" target="_blank" rel="noreferrer">
        {item.title}
      </a>
    );
  }
}

export default Card;
