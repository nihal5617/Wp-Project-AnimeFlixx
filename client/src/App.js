import React, { useRef, useEffect,useState } from "react";
import { useLocation, Switch } from "react-router-dom";
import AppRoute from "./utils/AppRoute";
import ScrollReveal from "./utils/ScrollReveal";
import ReactGA from "react-ga";

// Layouts
import LayoutDefault from "./layouts/LayoutDefault";

// Views
import Home from "./views/Home";
import Auth from "./views/Auth/Auth";
import Main from "./views/Main";
import Modal from "./components/elements/Modal";

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = (page) => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {
  const childRef = useRef();
  let location = useLocation();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add("is-loaded");
    childRef.current.init();
    trackPage(page);
    setUser(JSON.parse(localStorage.getItem("profile")));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <>
      <ScrollReveal
        ref={childRef}
        children={() => (
          <Switch>
            {user ? (
              <AppRoute
                exact
                path="/"
                component={Main}
                layout={LayoutDefault}
              />
            ) : (
              <AppRoute exact path="/" component={Home} layout={LayoutDefault}/>
            )}
            {/* <AppRoute exact path="/" component={Home} layout={LayoutDefault} /> */}
            <AppRoute
              exact
              path="/auth"
              component={Auth}
              layout={LayoutDefault}
            />
            {/* <AppRoute
              exact
              path="/main"
              component={Main}
              layout={LayoutDefault}
            /> */}
            <AppRoute
              path="/anime/:video"
              component={Modal}
              layout={LayoutDefault}
            />
          </Switch>
        )}
      />
    </>
  );
};

export default App;
