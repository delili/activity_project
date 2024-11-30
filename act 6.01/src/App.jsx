import React, { Component } from "react";
import "./App.css";
import productData from "./products.json"; 

import { ProductListing } from "./components/Product";
import { Tags } from "./components/Tags";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTag: null, 
    };
  }

  handleTags = (tagName) => {
    this.setState({ selectedTag: tagName }); 
  };

  render() {
    const { products, ingredients } = productData;
    const { selectedTag } = this.state;

    return (
      <div className="container">
        <h1>Products</h1>
        <Tags
          tags={ingredients}
          selectedTag={selectedTag}
          handleTags={this.handleTags}
        />
        <ProductListing products={products} selectedTag={selectedTag} />
      </div>
    );
  }
}

export default App;
