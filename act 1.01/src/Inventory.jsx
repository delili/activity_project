import React from 'react';

const InventoryItem = (props) => (
  <div className="InventoryItem">
    <strong>{props.itemName}</strong>
    <hr />
    <p>{props.itemPrice}</p>
  </div>
);

function Inventory() {
  const items = [
    { itemName: 'Shoe', itemPrice: '$5' },
    { itemName: 'Sock', itemPrice: '$3' },
    { itemName: 'Bag', itemPrice: '$10' },
  ];

  return (
    <div className="Inventory">
      {items.map((item, index) => (
        <InventoryItem
          key={index}
          itemName={item.itemName}
          itemPrice={item.itemPrice}
        />
      ))}
    </div>
  );
}

export default Inventory;
