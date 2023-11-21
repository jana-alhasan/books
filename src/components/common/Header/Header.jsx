import React, { Fragment, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  TextField,
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  useTheme,
  InputAdornment,
  Link,
  Hidden,
  Grid,
} from "@material-ui/core";
import { Stack, Divider } from "@mui/material";
import {
  ShoppingCart,
  Favorite,
  Person,
  Menu as MenuIcon,
  Search,
  Brightness1,
  ImportContactsTwoTone,
  Phone,
} from "@material-ui/icons";
import SearchResult from "../../../utilities/Search/Search";
import useStyles from "./styles";

const Header = () => {
  const classes = useStyles();
  const { handleInputChange, searchTerm } = SearchResult();
  const menuItems = ["Privacy Policy", "Warranty", "Shopping", "Returns"];
  const secondryMenu = [
    "The must read",
    "News",
    "Promotion of the mount",
    "Plublishs",
    "Subscribe to the newsletter",
  ];

  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };
  return (
    <Fragment>
      <AppBar className={classes.menuBar}>
        <Toolbar className={classes.menuItem}>
          <Grid container alignItems="center" justifyContent={"center"}>
            <Grid item xs={6} sm={3} md={2} className={classes.logo}>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Typography className={classes.logoText}>
                  B-W
                  <Stack
                    direction="row"
                    alignItems="center"
                    className={classes.logoImg}
                  >
                    <Brightness1 className={classes.circleIcon} />
                  </Stack>
                  rld
                </Typography>
                <ImportContactsTwoTone className={classes.book} />
                <Divider orientation="vertical" className={classes.vLine} />
                <Typography className={classes.cap}>
                  We Love <br />
                  Books
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={2} sm={1} md={4} >
              <Hidden smDown>
                <TextField
                  size="small"
                  label="Type any book here"
                  variant="filled"
                  className={classes.search}
                  value={searchTerm}
                  onChange={handleInputChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton>
                          <Search />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Hidden>
              <Hidden mdUp>
                <IconButton>
                  <Search className={classes.searchIcon} />
                </IconButton>
              </Hidden>
            </Grid>
            <Grid item xs={1} sm={4} md={3} lg={4}>
              <Hidden smDown>
                <Stack
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  spacing={3}
                >
                  {menuItems.map((menuItem, index) => (
                    <Typography key={index} className={classes.rightMenu}>
                      {menuItem}
                    </Typography>
                  ))}
                </Stack>
              </Hidden>
              <Hidden mdUp xsDown>
                <Stack
                  direction="row"
                  justifyContent="flex-end"
                  alignItems="center"
                >
                  <Phone className={classes.phone} />
                  <Typography> +445 87 999 000 </Typography>
                </Stack>
              </Hidden>
            </Grid>
            <Grid item xs={3} sm={4} md={3} lg={1}>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent={"center" }
                spacing={1}
                className={classes.menuIcon}
              >
                <ShoppingCart />
                <Hidden xsDown>
                  <Divider orientation="vertical" className={classes.vLine} />
                  <Favorite />
                  <Divider orientation="vertical" className={classes.vLine} />
                  <Person />
                </Hidden>
                <Hidden mdUp>
                  <IconButton onClick={handleDrawerOpen} edge="end">
                    <MenuIcon />
                  </IconButton>
                  <Drawer
                    className={classes.drawer}
                    variant="temporary"
                    anchor="right"
                    open={isDrawerOpen}
                    onClose={handleDrawerClose}
                    classes={{ paper: classes.drawerPaper }}
                  >
                    <IconButton onClick={handleDrawerClose} edge="end">
                      <MenuIcon />
                    </IconButton>
                    <List>
                      {menuItems.map((menuItem, index) => (
                        <ListItem button key={index}>
                          <ListItemText primary={menuItem} />
                        </ListItem>
                      ))}
                    </List>
                  </Drawer>
                </Hidden>
              </Stack>
            </Grid>
          </Grid>
        </Toolbar>
        {/************* SecondHeader **************/}

        <Hidden smDown>
          <Toolbar className={classes.seconditem}>
            <Grid
              container
              alignItems="center"
              justifyContent="center"
              spacing={6}
              
            >
              <Grid item md={8} lg={7}>
                <Stack direction="row" alignItems="center" spacing={3}>
                  {secondryMenu.map((menuItem, index) => (
                    <Typography
                      noWrap
                      className={classes.secondryMenu}
                      key={index}
                    >
                      {menuItem}
                    </Typography>
                  ))}
                </Stack>
              </Grid>
              <Grid item md={4} lg={4}>
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={1}
                  className={classes.RsecondHead}
               
                >
                  <Phone className={classes.phone} />
                  <Typography noWrap> +445 87 999 000 </Typography>
                  <Button className={classes.call}>Request a Call</Button>
                </Stack>
              </Grid>
            </Grid>
          </Toolbar>
        </Hidden>
      </AppBar>
    </Fragment>
  );
};

export default Header;
