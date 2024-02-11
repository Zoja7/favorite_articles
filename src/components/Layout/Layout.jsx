// import Loader from 'components/Loader/Loader';
// import React, { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from './Layout.module.css';
// import css from './Layout.module.css';
const Layout = () => {
  return (
    <div className={css.containerLayout}>
      <header className={css.headerWrapper}>
        <NavLink className={css.headerLink} to="/">
          Home
        </NavLink>
        <NavLink className={css.headerLink} to="/user-articles">
          User Articles
        </NavLink>
        <NavLink className={css.headerLink} to="/all-articles">
          All Articles
        </NavLink>
      </header>
      <main>
        {/* <Suspense fallback={<Loader />}> */}
        <Outlet />
        {/* </Suspense> */}
      </main>
    </div>
  );
};

export default Layout;
