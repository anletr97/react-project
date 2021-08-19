import { Grid } from "@material-ui/core";
import React from "react";
import Header from "./Header";
import Main from "./Main";
import NavBar from "./NavBar";

const Layout = () => {
  // toggle state
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    alert("Clicked");
    setMobileOpen(!mobileOpen);
  };

  const handleDrawerDesktop = () => {
    if (mobileOpen) setMobileOpen(false);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Header onClick={handleDrawerToggle} />
      </Grid>
      <Grid item xs={12} sm={4}>
        <NavBar
          onItemClick={handleDrawerDesktop}
          onClose={handleDrawerToggle}
          mobileOpen={mobileOpen}
        />
      </Grid>
      <Grid item xs={12} sm={8}>
        <Main />
      </Grid>
    </Grid>
  );
};

export default Layout;
