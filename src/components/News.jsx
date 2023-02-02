import React from "react";
import Card from "./Card";
import SelectComponent from "./SelectComponent";

const api = "https://hn.algolia.com/api/v1/search?query=";

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      searchTerm: ""
    };
  }

  fetchData = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => this.setState({ news: data.hits }));
  };

  componentDidMount() {
    this.fetchData(api);
  }

  componentDidUpdate(currentProps, prevProps) {
    if (prevProps.searchTerm !== this.state.searchTerm) {
      this.fetchData(api + this.state.searchTerm);
    }
  }

  onSearchSubmit = (e) => {
    e.preventDefault();
    this.setState({ searchTerm: e.target.elements.search.value });
  };

  render() {
    const { news } = this.state;
    return (
      <>
        <form className="search-input" onSubmit={this.onSearchSubmit}>
          <input type="text" placeholder="Search" name="search" />
        </form>
        <SelectComponent />
        {news.map((item) => (
          <Card item={item} key={item.objectID} />
        ))}
      </>
    );
  }
}

export default News;
