import PropTypes from 'prop-types';

function Navbar({ items }) {
  return (
    <nav>
      <ul>
        {items.map(
          (item) =>
            item.owned && (
              <li key={item.id}>
                <a href={`#/item/${  item.id}`}>
                  <img src={item.imageUrl} alt={item.name} /> {item.name}
                </a>
              </li>
            )
        )}
      </ul>
    </nav>
  );
}

Navbar.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      imageUrl: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      owned: PropTypes.bool.isRequired
    })
  ).isRequired
};

export default Navbar;
