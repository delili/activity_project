import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";
import "./App.css";

const Inventory = [
  { id: 1, name: "Shoes", description: "Comfortable running shoes." },
  { id: 2, name: "Backpack", description: "A spacious backpack for travel." },
  { id: 3, name: "Travel Mug", description: "Keeps your beverages hot or cold." },
];

const HomePage = () => (
  <div className="page">
    <h1>Welcome to Our Store!</h1>
    <p>Click on the "Store" link to view our items.</p>
  </div>
);

const StorePage = () => (
  <div className="page">
    <h1>Store Items</h1>
    <div className="item-list">
      {Inventory.map((item) => (
        <div key={item.id} className="item">
          <Link to={`/store/items/${item.id}`}>{item.name}</Link>
        </div>
      ))}
    </div>
  </div>
);

const ItemDetailsPage = () => {
  const { itemId } = useParams();
  const item = Inventory.find((i) => i.id.toString() === itemId);

  if (!item) {
    return <NotFoundPage />;
  }

  return (
    <div className="page">
      <h1>{item.name}</h1>
      <p>{item.description}</p>
      <Link to="/store">Back to Store</Link>
    </div>
  );
};

const NotFoundPage = () => (
  <div className="page">
    <h1>404 - Page Not Found</h1>
    <p>Sorry, we couldn't find the page you're looking for.</p>
    <Link to="/">Go Back Home</Link>
  </div>
);

const App = () => (
  <Router>
    <div className="app">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/store">Store</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/store" element={<StorePage />} />
        <Route path="/store/items/:itemId" element={<ItemDetailsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  </Router>
);

export default App;
