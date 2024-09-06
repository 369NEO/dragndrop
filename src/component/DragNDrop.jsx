
import React, { useState } from 'react';

const DND = () => {
// useState is a hook that lets us keep track of things that can change (like our list of items)
  // items is our list of things, and setItems is how we change it
  const [items, setItems] = useState([
    'Item 1', 
    'Item 2', 
    'Item 3', 
    'Item 4', 
    'Item 5', 
  ]);


  // This happens when you start dragging an item
  const handleDragStart = (e, index) => {
    // We tell the computer what item we're dragging (using its index or position in the list)
    e.dataTransfer.setData('text/plain', index); 
  };
  // This happens when you drag something over another item
  const handleDragOver = (e) => {
    // This line is important to let the browser know we want to drop the item here
    e.preventDefault(); 
  };
  // This happens when you drop an item
  const handleDrop = (e, targetIndex) => {
    // This line is important too, like the one above
    e.preventDefault(); 
    // We figure out where the item came from (sourceIndex)
    const sourceIndex = e.dataTransfer.getData('text/plain'); 
    // We make a copy of our list so we don't mess up the original
    const newItems = [...items]; 
    // We move the item from its old spot to its new spot in the list
    newItems.splice(targetIndex, 0, newItems.splice(sourceIndex, 1)[0]); 
    // We update our list with the new order
    setItems(newItems); 
  };


  
  // This is where we tell the computer what to show on the screen
  return (
    <ul> {/* This is an unordered list, like a list with bullet points */}
      {items.map((item, index) => ( 
        // We go through each item in our list
        <li 
          key={index} // This is like a special ID for each item
          draggable // This says we can drag this item
          onDragStart={(e) => handleDragStart(e, index)} // When we start dragging
          onDragOver={handleDragOver} // When we drag over something
          onDrop={(e) => handleDrop(e, index)} // When we drop the item
        >
          {item} {/* This shows the actual text of the item */}
        </li>
      ))}
    </ul>
  );
};


export default DND;
