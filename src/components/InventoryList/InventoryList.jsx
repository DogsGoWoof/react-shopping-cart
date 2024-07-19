// src/components/InventoryList/InventoryList.jsx

import './InventoryList.css';

const InventoryList = (props) => {
    return (
        <div className="inventory-list">
            <h2>{props.title}</h2>
            <ul>
                {props.inventory.length ? (
                    props.inventory.map((item) => (
                        <li key={item._id}>
                            <p>{item.name}</p>
                            <p>Price: {item.price}</p>
                            {props.handleAddItem ? (
                                <button onClick={() => props.handleAddItem(item)}>
                                    Add Item
                                </button>
                            ) : (
                                <button onClick={() => props.handleRemoveItem(item)}>
                                    Remove Item
                                </button>
                            )}
                        </li>
                    ))
                ) : (
                    <li>
                        <p>Empty</p>
                    </li>
                )}
            </ul>
        </div>
    );
};

export default InventoryList;
