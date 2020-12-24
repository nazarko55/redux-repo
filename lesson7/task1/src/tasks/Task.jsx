import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class Task extends React.PureComponent {
  render() {
    const { id, name, description, price, text, done, onChange, onDelete } = this.props;
    const classes = classNames("list-item", { "list-item_done": done })
    return (
      <div className={classes}>

        <input type="checkbox"
          className="list-item__checkbox"
          defaultChecked={done}
          onChange={() => onChange(id)}
        />

        <img className="img-bag"
          src="https://res.cloudinary.com/sivadass/image/upload/v1493548928/icons/bag.png"
          alt="#"
        />

        <div>
          <span className="list-item__price">{price}</span>
          <span className="list-item__text">{text}</span>
          <span className="list-item__name">{name}</span>
        </div>

        <button className="list-item__delete-btn" onClick={() => onDelete(id)}></button>

      </div>
      //

    )
  }
};

export default Task;