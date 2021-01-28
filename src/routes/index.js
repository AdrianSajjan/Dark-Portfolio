import React from "react";
import Home from "pages/Home";
import About from "pages/About";
import Error404 from "pages/404";
import Projects from "pages/Projects";
import { AnimatePresence } from "framer-motion";
import { Route, Switch, useLocation } from "react-router-dom";
import Contact from "pages/Contact";

const Navigation = () => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.key}>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} exact />
        <Route path="/contact" component={Contact} exact />
        <Route path="/projects" component={Projects} exact />
        <Route component={Error404} />
      </Switch>
    </AnimatePresence>
  );
};

export default Navigation;
