import React from "react";
import Select from "react-select";

class SelectComponent extends React.Component {
  options = [
    { value: "relevancy", label: "Relevancy" },
    { value: "points", label: "Points" }
  ];
  render() {
    return (
      <Select
        options={this.options}
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            borderColor: "grey",
            marginBottom: "20px"
          })
        }}
        placeholder="Sort by"
      />
    );
  }
}

export default SelectComponent;
