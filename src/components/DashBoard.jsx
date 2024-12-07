import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { createTheme } from "@mui/material/styles";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { useDemoRouter } from "@toolpad/core/internal";
import SemesterDetails from "./SemesterDetails.jsx";

const NAVIGATION = [
  {
    segment: "sem1",
    title: "Semester 1",
    icon: <DashboardIcon />,
  },
  {
    segment: "sem2",
    title: "Semester 2",
    icon: <ShoppingCartIcon />,
  },
  {
    segment: "sem3",
    title: "Semester 3",
    icon: <ShoppingCartIcon />,
  },
  {
    segment: "sem4",
    title: "Semester 4",
    icon: <ShoppingCartIcon />,
  },
  {
    segment: "sem5",
    title: "Semester 5",
    icon: <ShoppingCartIcon />,
  },
  {
    segment: "sem6",
    title: "Semester 6",
    icon: <ShoppingCartIcon />,
  },
  {
    segment: "sem7",
    title: "Semester 7",
    icon: <ShoppingCartIcon />,
  },
  {
    segment: "sem8",
    title: "Semester 8",
    icon: <ShoppingCartIcon />,
  },
];

const demoTheme = createTheme({
  palette: {
    mode: "dark",
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function DemoPageContent({ pathname }) {
  return (
    <Box
      sx={{
        py: 4,
        display: "flex",
        flexDirection: "column",
        // alignItems: "center",
        // textAlign: "center",
      }}
    >
      <Typography>
        <SemesterDetails />
      </Typography>
    </Box>
  );
}

DemoPageContent.propTypes = {
  pathname: PropTypes.string.isRequired,
};

function DashboardLayoutBranding(props) {
  const { window } = props;

  const router = useDemoRouter("/dashboard");

  // Remove this const when copying and pasting into your project.
  const demoWindow = window !== undefined ? window() : undefined;

  return (
    <AppProvider
      navigation={NAVIGATION}
      branding={{
        // logo: <img src="https://mui.com/static/logo.png" alt="MUI logo" />,
        title: "CIT.AI",
      }}
      router={router}
      theme={demoTheme}
      window={demoWindow}
    >
      <DashboardLayout>
        <DemoPageContent pathname={router.pathname} />
      </DashboardLayout>
    </AppProvider>
  );
}

DashboardLayoutBranding.propTypes = {
  window: PropTypes.func,
};

export default DashboardLayoutBranding;
