import React, { Component } from 'react';

import style from './style.scss';
import { NavBar, Icon } from 'antd-mobile';

class HomePage extends Component {
  render() {
    return (
      <>
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => console.log('onLeftClick')}
          rightContent={[
            <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
            <Icon key="1" type="ellipsis" />,
          ]}
        >
          NavBar
        </NavBar>
        <div className={style.content}>
          Home Page
          <div className={style.box} />
        </div>
      </>
    );
  }
}

export { HomePage };
