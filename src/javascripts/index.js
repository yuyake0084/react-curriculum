import React, { PureComponent } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './Header';
import Navigation from './Navigation';

import Home from './Home';
import TodoList from './TodoList';

class App extends PureComponent {
  constructor() {
    super();
  }

  getRouteList() {
    return [
      {
        exact: true,
        path: '/',
        component: Home,
      },
      {
        path: '/todo_list',
        component: TodoList,
      }
    ];
  }

  getNavList() {
    return [
      {
        name: 'Todo List',
        href: '/todo_list',
      },
    ];
  }

  render() {
    return (
      <BrowserRouter>
        <div className="wrapper">
          <Header />

          <Navigation navList={this.getNavList()} />

          <main className="l-main">
            <div className="u-inner">
              <Switch>
                {this.getRouteList().map((route, i) =>
                  <Route
                    key={i}
                    exact={route.exact || false}
                    path={route.path}
                    render={props => <route.component {...props} />}
                  />
                )}
              </Switch>
            </div>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

render(
  <App />,
  document.getElementById('app')
);

