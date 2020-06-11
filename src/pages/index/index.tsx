import React, { Component } from 'react';
import { render } from 'react-dom';
import { Redirect, Switch, HashRouter } from 'react-router-dom';
import { Toast } from 'antd-mobile';
import { routeConfig, PATHS } from '~/routes/route.config';
import { AuthRouter } from '~/components/AuthRouter';
import { RootStore } from '../../stores/index';
import { Provider } from 'mobx-react';
import './style.less';

export default class App extends Component {
  // 渲染路由
  renderRoute = (route) => {
    if (!route.component && !route.children) {
      return null;
    } else if (route.children && Array.isArray(route.children)) {
      return route.children.map(this.renderRoute);
    } else {
      return (
        <AuthRouter
          key={route.key}
          exact={route.isExact}
          path={route.path}
          component={route.component}
        />
      );
    }
  };

  render() {
    return (
      <HashRouter>
        <Switch>
          {routeConfig.map(this.renderRoute)}
          <Redirect
            exact
            to={`${PATHS.Main.HomePage}${window.location.search}`}
          />
        </Switch>
      </HashRouter>
    );
  }
}

render(
  <Provider {...new RootStore('TRB-mobile')}>
    <App />
  </Provider>,
  document.getElementById('root')
);
