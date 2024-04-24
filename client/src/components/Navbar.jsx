import React from 'react';

function Navbar({ items }) {
  return (
    <nav>
      <ul>
        {items.map(item => (
          item.owned && (
            <li key={item.id}>
              <a href={'#/item/' + item.id}>
                <img src={item.imageUrl} alt={item.name} /> {item.name}
              </a>
            </li>
          )
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;