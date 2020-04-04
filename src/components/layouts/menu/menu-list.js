import React, {useState, useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import classNames from 'classnames';
import {menuItems} from './menu-items'
import {findLocationPath} from '../../../utils/find-location-path';

function MenuList(props) {
  const [activeItem, setActiveItem] = useState(findLocationPath(props.history.location.pathname));

  useEffect(() => {
    const currentPath = findLocationPath(props.history.location.pathname);
    setActiveItem(currentPath)
  }, [props.history.location.pathname]);

  return (
    <ul className="menu mCustomScrollbar">
      {menuItems.map(item => (
        <li
          key={item.id}
          className={classNames('menu-item', 'icon_for_child', {'active-menu-item': activeItem === item.name})}
          onClick={()=>props.history.push(item.route)}
        >
          <a>
            <i className={item.icon}/>
          </a>
        </li>
      ))}
    </ul>
  )
}

export default withRouter(MenuList);
