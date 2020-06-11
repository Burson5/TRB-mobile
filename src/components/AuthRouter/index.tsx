import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import { ContextStore } from '~/stores/context';
interface IProps {
  component: any;
  path: string;

  exact?: boolean;
  context?: ContextStore;
}
@inject('context')
@observer
export class AuthRouter extends Component<IProps> {
  render() {
    const { component: TobeRender, exact, ...rest } = this.props;
    return (
      <Route
        {...rest}
        exact={exact}
        render={(props) => {
          this.props.context.setHistory(props.history);
          return <TobeRender {...props} />;
        }}
      />
    );
  }
}
