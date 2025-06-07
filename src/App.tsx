import DashboardIcon from "@mui/icons-material/Dashboard";
import { ReactRouterAppProvider } from "@toolpad/core/react-router";
import { Outlet } from "react-router";
import type { Branding, Navigation } from "@toolpad/core";

import Logo from "./assets/images/logo.jpeg";
import {
  ContactPage,
  Diversity1,
  Info,
  MedicalServices,
} from "@mui/icons-material";
import hospitalTheme from "./theme";

const NAVIGATION: Navigation = [
  {
    title: "Home",
    icon: <DashboardIcon />,
  },
  {
    segment: "about",
    title: "About",
    icon: <Info />,
  },
  {
    segment: "services",
    title: "Services",
    icon: <MedicalServices />,
  },
  {
    segment: "doctors",
    title: "Doctors",
    icon: <Diversity1 />,
  },
  {
    segment: "contact",
    title: "Contact",
    icon: <ContactPage />,
  },
];

const BRANDING: Branding = {
  title: "Sarthi Ayurvedic Hospital",
  logo: <img src={Logo} alt="Sarthi Ayurvedic Hospital Logo" />,
};

export default function App() {
  return (
    <ReactRouterAppProvider
      navigation={NAVIGATION}
      branding={BRANDING}
      theme={hospitalTheme}
    >
      <Outlet />
    </ReactRouterAppProvider>
  );
}
