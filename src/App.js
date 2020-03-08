import { STATE_LOGIN, STATE_SIGNUP } from 'components/AuthForm';
import GAListener from 'components/GAListener';
import { EmptyLayout, LayoutRoute, MainLayout } from 'components/Layout';
import PageSpinner from 'components/PageSpinner';
import AuthPage from 'pages/AuthPage';
import React from 'react';
import componentQueries from 'react-component-queries';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './styles/reduction.scss';

import ListDish from './components/dish/list'
import CreateDish  from './components/dish/addDish'
import UpdateDish  from './components/dish/updateDish'
import ListMenu from './components/menu/list'
import CreateMenu  from './components/menu/addMenu'
import UpdateMenu  from './components/menu/updateMenu'
import ListRestaurant from './components/restaurant/list'

const DashboardPage = React.lazy(() => import('pages/DashboardPage'));

const getBasename = () => {
  return `/${process.env.PUBLIC_URL.split('/').pop()}`;
};

class App extends React.Component {
  render() {
    return (
      <BrowserRouter basename={getBasename()}>
        <GAListener className="App">
          <Switch>
            <LayoutRoute exact path="/login" layout={EmptyLayout} component={props => (<AuthPage {...props} authState={STATE_LOGIN} />)}/>
            <LayoutRoute
              exact
              path="/signup"
              layout={EmptyLayout}
              component={props => (
                <AuthPage {...props} authState={STATE_SIGNUP} />
              )}
            />

            <MainLayout breakpoint={this.props.breakpoint}>
              <React.Suspense fallback={<PageSpinner />}>
                <Route exact path="/" component={DashboardPage} />
                <Route path='/dish/list' component={ListDish} />
                <Route path='/dish/add' component={CreateDish} />
                <Route path='/dish/update' component={UpdateDish} />
                <Route path='/menu/list' component={ListMenu} />
                <Route path='/menu/add' component={CreateMenu} />
                <Route path='/menu/update' component={UpdateMenu} />
                <Route path='/restaurant/profile' component={ListRestaurant} />
                <Route path='/user/profile' component={ListRestaurant} />                
              </React.Suspense>
            </MainLayout>
            <Redirect to="/" />
          </Switch>
        </GAListener>
      </BrowserRouter>
    );
  }
}

const query = ({ width }) => {
  if (width < 575) {
    return { breakpoint: 'xs' };
  }

  if (576 < width && width < 767) {
    return { breakpoint: 'sm' };
  }

  if (768 < width && width < 991) {
    return { breakpoint: 'md' };
  }

  if (992 < width && width < 1199) {
    return { breakpoint: 'lg' };
  }

  if (width > 1200) {
    return { breakpoint: 'xl' };
  }

  return { breakpoint: 'xs' };
};


export default componentQueries(query)(App);
