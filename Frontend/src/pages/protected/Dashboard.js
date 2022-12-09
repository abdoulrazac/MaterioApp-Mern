import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import AppsIcon from "@mui/icons-material/Apps";
import SearchIcon from "@mui/icons-material/Search";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import MovieIcon from "@mui/icons-material/Movie";
import GroupIcon from "@mui/icons-material/Group";
import GroupsIcon from "@mui/icons-material/Groups";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import {
  Avatar,
  Grid,
  InputAdornment,
  Menu,
  MenuItem,
  TextField,
  Tooltip,
} from "@mui/material";
import { DashboardContent } from "./DashboardContent";
import { useNavigate } from "react-router-dom";
import LocalStorageService from "../../Services/LocalStorageService";
import Language from "../../components/common/Language";
import { useTranslation } from "react-i18next";
const drawerWidth = 240;
const settings = [
  { title: "Profile", path: "/profile" },
  { title: "Account", path: "#" },
  { title: "Dashboard", path: "#" },
  { title: "Logout", path: "logout" },
];
function Dashboard(props) {
  const { t, i18n } = useTranslation();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const Navigate = useNavigate();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handlePath = (path) => {
    path === "logout" ? Logout() : Navigate(`${path}`);
  };
  const Logout = () => {
    LocalStorageService.clearToken();
    i18n.changeLanguage("en");
    Navigate("/login");
  };
  const drawer = (
    <>
      <Box
        onClick={() => Navigate("/dashboard")}
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          alignSelf: "center",
          marginTop: "10px",
          cursor: "pointer",
        }}
      >
        <svg
          width="30"
          height="25"
          version="1.1"
          //viewBox="0 0 30 23"
          xmlns="http://www.w3.org/2000/svg"
          // xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          {/* stroke-width="1" fill-rule="evenodd" */}
          <g stroke="none" fill="none">
            <g id="Artboard" transform="translate(-95.000000, -51.000000)">
              <g id="logo" transform="translate(95.000000, 50.000000)">
                <path
                  id="Combined-Shape"
                  fill="#9155FD"
                  d="M30,21.3918362 C30,21.7535219 29.9019196,22.1084381 29.7162004,22.4188007 C29.1490236,23.366632 27.9208668,23.6752135 26.9730355,23.1080366 L26.9730355,23.1080366 L23.714971,21.1584295 C23.1114106,20.7972624 22.7419355,20.1455972 22.7419355,19.4422291 L22.7419355,19.4422291 L22.741,12.7425689 L15,17.1774194 L7.258,12.7425689 L7.25806452,19.4422291 C7.25806452,20.1455972 6.88858935,20.7972624 6.28502902,21.1584295 L3.0269645,23.1080366 C2.07913318,23.6752135 0.850976404,23.366632 0.283799571,22.4188007 C0.0980803893,22.1084381 2.0190442e-15,21.7535219 0,21.3918362 L0,3.58469444 L0.00548573643,3.43543209 L0.00548573643,3.43543209 L0,3.5715689 C3.0881846e-16,2.4669994 0.8954305,1.5715689 2,1.5715689 C2.36889529,1.5715689 2.73060353,1.67359571 3.04512412,1.86636639 L15,9.19354839 L26.9548759,1.86636639 C27.2693965,1.67359571 27.6311047,1.5715689 28,1.5715689 C29.1045695,1.5715689 30,2.4669994 30,3.5715689 L30,3.5715689 Z"
                ></path>
                <polygon
                  id="Rectangle"
                  opacity="0.077704"
                  fill="#000"
                  points="0 8.58870968 7.25806452 12.7505183 7.25806452 16.8305646"
                ></polygon>
                <polygon
                  id="Rectangle"
                  opacity="0.077704"
                  fill="#000"
                  points="0 8.58870968 7.25806452 12.6445567 7.25806452 15.1370162"
                ></polygon>
                <polygon
                  id="Rectangle"
                  opacity="0.077704"
                  fill="#000"
                  points="22.7419355 8.58870968 30 12.7417372 30 16.9537453"
                  transform="translate(26.370968, 12.771227) scale(-1, 1) translate(-26.370968, -12.771227) "
                ></polygon>
                <polygon
                  id="Rectangle"
                  opacity="0.077704"
                  fill="#000"
                  points="22.7419355 8.58870968 30 12.6409734 30 15.2601969"
                  transform="translate(26.370968, 11.924453) scale(-1, 1) translate(-26.370968, -11.924453) "
                ></polygon>
                <path
                  id="Rectangle"
                  fill-opacity="0.15"
                  fill="#FFF"
                  d="M3.04512412,1.86636639 L15,9.19354839 L15,9.19354839 L15,17.1774194 L0,8.58649679 L0,3.5715689 C3.0881846e-16,2.4669994 0.8954305,1.5715689 2,1.5715689 C2.36889529,1.5715689 2.73060353,1.67359571 3.04512412,1.86636639 Z"
                ></path>
                <path
                  id="Rectangle"
                  fill-opacity="0.35"
                  fill="#FFF"
                  transform="translate(22.500000, 8.588710) scale(-1, 1) translate(-22.500000, -8.588710) "
                  d="M18.0451241,1.86636639 L30,9.19354839 L30,9.19354839 L30,17.1774194 L15,8.58649679 L15,3.5715689 C15,2.4669994 15.8954305,1.5715689 17,1.5715689 C17.3688953,1.5715689 17.7306035,1.67359571 18.0451241,1.86636639 Z"
                ></path>
              </g>
            </g>
          </g>
        </svg>
        <Typography
          sx={{ fontWeight: "bold", alignSelf: "center" }}
          variant="h6"
        >
          Materio
        </Typography>
      </Box>
      <div>
        <List>
          {[
            {
              title: `${t("drawer.dashboard")}`,
              icons: <HomeIcon />,
              color: "purple !important",
              path: "/dashboard",
            },
            {
              title: `${t("drawer.profile")}`,
              icons: <AccountCircleIcon />,
              color: "purple !important",
              path: "/profile",
            },
            {
              title: `${t("drawer.users")}`,
              icons: <GroupIcon />,
              path: "/users",
            },
            {
              title: `${t("drawer.movies")}`,
              icons: <MovieIcon />,
              path: "/movies",
            },
            {
              title: `${t("drawer.followers")}`,
              icons: <GroupsIcon />,
              path: "/followers",
            },
            {
              title: `${t("drawer.icons")}`,
              icons: <AppsIcon />,
              path: "/#",
            },
          ].map((text, index) => (
            <ListItem key={text.title} disablePadding>
              <ListItemButton
                // disableRipple
                // sx={{
                //   "&:focus": {
                //     backgroundColor: "#9155FD",
                //   },
                //boxShadow: "0px 4px 8px -4px rgb(58 53 65 / 42%)",
                //borderRightRadius:"20px"
                // }}
                onClick={() => handlePath(text.path)}
              >
                <ListItemIcon>{text.icons}</ListItemIcon>
                <ListItemText primary={text.title} />
              </ListItemButton>
              <Divider />
            </ListItem>
          ))}
        </List>
      </div>
    </>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      {/* height: "100vh" */}
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "transparent",
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          boxShadow: "none !important",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          {/* <Typography variant="h6" noWrap component="div">
            Responsive drawer
          </Typography> */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexGrow: 1,
            }}
          >
            <TextField
              size="small"
              placeholder="search here..."
              sx={{
                ".MuiInputBase-root": {
                  borderRadius: "50px",
                },
                "& .MuiOutlinedInput-root.Mui-focused": {
                  "& > fieldset": {
                    borderColor: "rgba(0, 0, 0, 0.23)",
                  },
                },
                "& .MuiOutlinedInput-root:hover": {
                  "& > fieldset": {
                    borderColor: "rgba(0, 0, 0, 0.23)",
                  },
                },

                borderRadius: "50px",
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment>
                    <IconButton>
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <Box sx={{ flexGrow: 0, display: "flex" }}>
              <Box>
                <Language />
              </Box>
              <IconButton>
                <NightsStayIcon />
              </IconButton>
              <IconButton>
                <NotificationsOutlinedIcon />
              </IconButton>
              <Tooltip title="Open profile">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt="Remy Sharp"
                    src="https://thumbs.dreamstime.com/b/businessman-icon-image-male-avatar-profile-vector-glasses-beard-hairstyle-179728610.jpg"
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem
                    key={setting}
                    onClick={() => {
                      handleCloseUserMenu();
                      handlePath(setting.path);
                    }}
                  >
                    <Typography textAlign="center">{setting.title}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      {/* <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ mr: 2, display: { sm: "none" } }}
      >
        <MenuIcon />
      </IconButton> */}
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#ededed",
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#ededed",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          height: "auto",
        }}
      >
        <Toolbar />
        <Grid>{props.children}</Grid>
      </Box>
    </Box>
  );
}

export default Dashboard;
