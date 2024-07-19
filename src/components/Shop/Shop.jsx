// src/components/Shop/Shop.jsx

// npm modules
import { useState } from 'react';

import { inventoryData } from '../../data/data';

// components
import InventoryList from '../../components/InventoryList/InventoryList';

// css
import './Shop.css';

const Shop = () => {

    // console.log('Inventory Data:', inventoryData);
    // Create state variable and pass new inventory state
    // to the InventoryList component below
    // const [inventory, setInventory] = useState(inventoryData);
    const [shopInventory, setShopInventory] = useState(inventoryData);
    const [userInventory, setUserInventory] = useState([]);

    // Add the following function:
    const handleAddItem = (item) => {
        // setInventory([]);
        // setInventory([{ _id: 62345, name: 'Banana', price: 0.27 }]);
        // const newItemOne = { _id: 62345, name: 'Banana', price: 0.27 };
        // // Notice how we are placing newItemOne inside an array when setting state!
        // setInventory([newItemOne]);
        // const newItemOne = { _id: 62345, name: 'Banana', price: 0.27 };
        // const newItemTwo = { _id: 22345, name: 'Avocado', price: 2 };
        // Sets the inventory state to an array containing two objects
        // setInventory([newItemOne, newItemTwo]);
        setUserInventory([...userInventory, item]);
        setShopInventory(shopInventory.filter((el) => el._id !== item._id));
        // filter refresher: compares parameter argument and returns true/false
        // to match criteria to new list
        // i.e. only things that match the required definition may exist in this list
    };
    const handleRemoveItem = (item) => {
        setShopInventory([...shopInventory, item]);
        setUserInventory(userInventory.filter((el) => el._id !== item._id));
    };

    return (
        <main>
            <h1>Shop</h1>
            <section className="shop-section">
                {/* {inventoryData.map((item) => (
                        <li key={item._id}>
                            <p>{item.name}</p>
                            <p>Price: {item.price}</p>
                        </li>
                    ))} */}
                {/* <InventoryList inventory={inventoryData} /> */}
                {/* <InventoryList inventory={inventory} /> */}
                <InventoryList
                    title="Shop Inventory"
                    inventory={shopInventory}
                    handleAddItem={handleAddItem}
                />
                <InventoryList
                    title="User Inventory"
                    inventory={userInventory}
                    handleRemoveItem={handleRemoveItem}
                />
            </section>
        </main>
    );
};

export default Shop;
