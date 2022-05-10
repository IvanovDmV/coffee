import { AppBar, Toolbar, Typography } from "@mui/material";

const Header = () => {
  return (
    <AppBar
      position="fixed"
      sx={{ bgcolor: "#BDB76B", color: "black", opacity: 0.8 }}
    >
      <Toolbar>
        <Typography
          align="center"
          variant="h4"
          component="span"
          sx={{
            flexGrow: 1,
            fontStyle: "italic",
          }}
        >
          Наш суперкофе
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
