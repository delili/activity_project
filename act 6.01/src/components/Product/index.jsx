import React, { Component } from "react";
class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDescription: false,
    };
  }

  toggleDescription = () => {
    this.setState((prevState) => ({
      showDescription: !prevState.showDescription,
    }));
  };

  render() {
    const { name, price, summary } = this.props.product;
    const { showDescription } = this.state;

    return (
      <div className="product">
        <div className="product_header">
          <h2>{name}</h2>
          <button onClick={this.toggleDescription}>
            {showDescription ? "-" : "+"}
          </button>
        </div>
        <strong>${price.toFixed(2)}</strong>
        {showDescription && <p>{summary}</p>}
      </div>
    );
  }
}

const ProductListing = ({ products, selectedTag }) => {
  const filteredProducts = selectedTag
    ? products.filter((product) => product.tags.includes(selectedTag))
    : products;

  return (
    <div>
      {filteredProducts.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export { Product, ProductListing };
