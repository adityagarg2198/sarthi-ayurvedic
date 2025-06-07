import { Box, Stack, Typography } from "@mui/material";
import {
  CompostOutlined,
  LocalFloristOutlined,
  LocalPharmacyOutlined,
  ScienceOutlined,
  VaccinesOutlined,
} from "@mui/icons-material";
import { FC, ReactNode } from "react";
import ReactDOMServer from "react-dom/server";
import Background from "../CustomIcons/Background";

const ServiceIcon: FC<{
  icon: ReactNode;
  text: string;
  top: number;
  left: number;
  translate: number;
}> = ({ icon, text, left, top, translate }) => {
  return (
    <Stack
      alignItems={"center"}
      justifyContent={"center"}
      sx={{
        position: "absolute",
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(${translate}px)`,
        width: 50,
        height: 50,
        textAlign: "center",
      }}
    >
      {icon}
      <Typography fontWeight={500} fontSize={"1.5rem"}>
        {text}
      </Typography>
    </Stack>
  );
};

const HeroSection = () => {
  const svgString = ReactDOMServer.renderToStaticMarkup(<Background />);
  const encoded = `url("data:image/svg+xml;utf8,${encodeURIComponent(svgString)}")`;
  return (
    <Stack
      p={"3rem"}
      mt={"3rem"}
      justifyContent={"space-between"}
      minHeight={"80vh"}
      position={"relative"}
      sx={{
        backgroundImage: encoded,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "bottom",
      }}
    >
      <Typography variant="h2" textAlign={"center"} width={"50dvw"}>
        Discover the Healing Power of Ayurveda & Panchkarma at
        <Typography variant="h1" fontWeight={700} mt={"4rem"}>
          Sarthi Ayurvedic Hospital
        </Typography>
      </Typography>
      <Box
        borderRadius={"100%"}
        position={"absolute"}
        right={"10dvw"}
        top={"20dvh"}
      >
        <Box
          sx={{
            position: "relative",
            width: "35rem",
            height: "35rem",
            borderRadius: "100%",
            zIndex: 0,
            overflow: "hidden",
            "::before": {
              content: '""',
              position: "absolute",
              inset: 0,
              padding: "11rem",
              borderRadius: "100%",
              background: "linear-gradient(to bottom, #FDFDFD, #D6EAF8)",
              WebkitMask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
            },
          }}
        >
          <ServiceIcon
            icon={
              <CompostOutlined
                sx={{
                  fontSize: "6rem",
                  color: "#5DADE2 !important",
                }}
              />
            }
            text="Ayurveda"
            left={25}
            top={11}
            translate={60}
          />
          <ServiceIcon
            icon={
              <LocalFloristOutlined
                sx={{
                  fontSize: "6rem",
                  color: "#5DADE2 !important",
                }}
              />
            }
            text="Personalize"
            left={75}
            top={35}
            translate={5}
          />
          <ServiceIcon
            icon={
              <LocalPharmacyOutlined
                sx={{
                  fontSize: "6rem",
                  color: "#5DADE2 !important",
                }}
              />
            }
            text="Dietry Care"
            left={58}
            top={72}
            translate={25}
          />
          <ServiceIcon
            icon={
              <VaccinesOutlined
                sx={{
                  fontSize: "5.5rem",
                  color: "#5DADE2 !important",
                }}
              />
            }
            text="Medicine"
            left={15}
            top={70}
            translate={30}
          />
          <ServiceIcon
            icon={
              <ScienceOutlined
                sx={{
                  fontSize: "5.5rem",
                  color: "#5DADE2 !important",
                }}
              />
            }
            text="Chemical Less"
            left={10}
            top={38}
            translate={0}
          />
        </Box>
      </Box>
    </Stack>
  );
};

export default HeroSection;
