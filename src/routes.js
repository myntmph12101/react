import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import ProductPage from "./pages/product";
import ContactPage from "./pages/contact";
import BlogPage from "./pages/blog";
import NotFoundPage from "./pages/404";
import LayoutAdmin from "./layouts/admin";
import LayoutWebsite from "./layouts/website";
import ProductManagerPage from "./pages/admin/product";
import AddProduct from "./pages/admin/product/add";
import DetailProduct from "./pages/detailProduct";
import CategoryManagerPage from "./pages/admin/category";
import AddCategory from "./pages/admin/category/add";
import SignUp from "./user/SignUp";
import SignIn from "./user/SignIn";
import EditProduct from "./pages/admin/product/edit";
import DetailBlog from "./pages/detailBlog";
import ContactManagerPage from "./pages/admin/contact";
import EditCategory from "./pages/admin/category/edit";
import DetailCategory from "./pages/detailCategory";
import PrivateRoute from "./auth/privateRoute";
import UserDashboard from "./user/userDashboard";
import AdminRoute from "./auth/adminRoute";
import AdminDashboard from "./user/adminDashboard";
import Nav from "./components/Nav";
const Routes = (props) => {
  return (
    <Router>
      <Switch>
        <AdminRoute path="/admin">
          <LayoutAdmin>
            <Switch>
              <Route exact path={`/admin/category/:id`}>
                <EditCategory {...props} />
              </Route>
              <Route exact path='/admin/dashboard'>
                <AdminDashboard />
              </Route>
              <Route exact path='/admin/products'>
                <ProductManagerPage {...props} />
              </Route>
              <Route exact path='/admin/categories'>
                <CategoryManagerPage {...props} />
              </Route>
              <Route exact path='/admin/contacts'>
                <ContactManagerPage {...props} />
              </Route>
              <Route exact path='/admin/products/add'>
                <AddProduct {...props} />
              </Route>
              <Route exact path={`/admin/product/:id`}>
                <EditProduct {...props} />
              </Route>
              <Route exact path='/admin/categories/add'>
                <AddCategory {...props} />
              </Route>
            </Switch>
          </LayoutAdmin>
        </AdminRoute>
        <Route exact path='/signup'>
          <Nav {...props} />
          <SignUp />
        </Route>
        <Route exact path='/signin'>
          <Nav {...props} />
          <SignIn />
        </Route>
        <PrivateRoute exact path="/user/dashboard">
          <Nav {...props} />
          <UserDashboard />
        </PrivateRoute>
        <Route>
          <LayoutWebsite>
            <Nav {...props} />
            <Switch>
              <Route exact path='/'>
                <HomePage {...props} />
              </Route>
              <Route exact path='/about'>
                <AboutPage {...props} />
              </Route>
              <Route exact path='/products'>
                <ProductPage {...props} />
              </Route>
              <Route exact path='/products/:id'>
                <DetailProduct />
              </Route>
              <Route exact path='/detailcategory/:id'>
                <DetailCategory {...props} />
              </Route>
              <Route exact path='/blogs/:id'>
                <DetailBlog />
              </Route>

              <Route exact path='/contacts'>
                <ContactPage {...props} />
              </Route>
              <Route exact path='/blogs'>
                <BlogPage {...props} />
              </Route>

              <Route path='*'>
                <NotFoundPage />
              </Route>
            </Switch>
          </LayoutWebsite>
        </Route>
      </Switch>
    </Router>
  );
};
export default Routes;
