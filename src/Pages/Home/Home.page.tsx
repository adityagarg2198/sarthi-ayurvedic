import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import HeroSection from "../../components/HeroSection/HeroSection.component";
import {
  Coronavirus,
  HealthAndSafety,
  MedicalServicesRounded,
  PersonalInjury,
  ScienceRounded,
  SpaOutlined,
  VerifiedUser,
  WorkspacePremiumOutlined,
} from "@mui/icons-material";
import { FC, ReactNode } from "react";
import DiabetesIcon from "../../components/CustomIcons/Diabetes";
import InfertileIcon from "../../components/CustomIcons/Infertile";
import BpIcon from "../../components/CustomIcons/Bp";
import CancerIcon from "../../components/CustomIcons/Cancer";
import MigraineIcon from "../../components/CustomIcons/Migraine";
import Epilepsy from "../../components/CustomIcons/Epilepsy";
import IBSIcon from "../../components/CustomIcons/IBS";
import ThyroidIcon from "../../components/CustomIcons/Thyroid";
import PCODIcon from "../../components/CustomIcons/PCOD";
import LiverIcon from "../../components/CustomIcons/Liver";
import JpIcon from "../../components/CustomIcons/JointPain";
import KidneyIcon from "../../components/CustomIcons/Kidney";
import DoctorsIcon from "../../components/CustomIcons/Doctors";
import DrSanjeetRana from "../../assets/images/drrana.jpeg";

const CustomBox: FC<{ text1: string; text2: string; icon: ReactNode }> = ({
  text1,
  text2,
  icon,
}) => {
  return (
    <Paper
      variant="outlined"
      sx={{
        flex: "0 0 40%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        p: "4rem 2rem",
        gap: "2rem",
        cursor: "pointer",
        transition: "transform 0.3s ease",
        "&:hover": {
          animation: "bounce 0.5s ease",
        },
        "@keyframes bounce": {
          "0%": {
            transform: "scale(1)",
          },
          "50%": {
            transform: "scale(1.1)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
        ".MuiSvgIcon-root": { fontSize: "5rem", color: "#5DADE2 !important" },
      }}
    >
      <Typography
        variant="h5"
        sx={{
          textAlign: "center",
          textTransform: "capitalize",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          alignItems: "center",
        }}
      >
        {icon}
        {text1}
      </Typography>
      <Typography variant="body2" textAlign={"center"}>
        {text2}
      </Typography>
    </Paper>
  );
};

const DoctorCard: FC<{ drName: string; image: string }> = ({
  drName,
  image,
}) => {
  return (
    <Paper
      sx={{
        p: "5rem",
        width: "100%",
        display: "flex",
        gap: "10rem",
        flexDirection: "row",
        background: "linear-gradient(to bottom, #FDFDFD, #D6EAF8)",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <Stack gap={"2rem"}>
        <Box
          component={"img"}
          src={image}
          width={"40rem"}
          borderRadius={"1.5rem"}
          border={"0.5rem solid #D6EAF8"}
          sx={{
            aspectRatio: "1",
            objectFit: "contain",
          }}
        />
        <Typography variant="h4" textAlign={"center"}>
          {drName}
        </Typography>
      </Stack>
      <Stack>
        <Typography variant="body1" textAlign={"center"}>
          {drName}
        </Typography>
      </Stack>
    </Paper>
  );
};

const Home = () => {
  var items = [
    {
      name: "PROFESSOR(DR.) SANJEET SINGH RANA",
      image: DrSanjeetRana,
    },
    {
      name: "PROFESSOR(DR.) SANJEET SINGH RANA",
      image: DrSanjeetRana,
    },
  ];

  return (
    <>
      <HeroSection />
      <Stack
        p={"10rem 5rem"}
        flexDirection={"row"}
        gap={"1rem"}
        justifyContent={"flex-start"}
        alignItems={"flex-start"}
      >
        <Stack flex={1} flexDirection={"row"} gap={"3rem"} flexWrap={"wrap"}>
          <CustomBox
            text1="100% authentic ayurvedic medicines"
            text2="We use 100% authentic ayurvedic medicines only."
            icon={<VerifiedUser />}
          />
          <CustomBox
            text1="Chemical Less"
            text2="There is no chemical in any of our product or services."
            icon={<ScienceRounded />}
          />
          <CustomBox
            text1="Genuine Services"
            text2="Sarthi Ayurved provides genuine services."
            icon={<MedicalServicesRounded />}
          />
          <CustomBox
            text1="pure Ayurveda"
            text2="We believe in using and treating with pure Ayurved"
            icon={<VerifiedUser />}
          />
        </Stack>
        <Stack
          flex={1}
          gap={"1rem"}
          alignItems={"flex-start"}
          sx={{
            ".MuiSvgIcon-root": {
              color: "#5DADE2 !important",
              fontSize: "8rem",
            },
          }}
        >
          <SpaOutlined />
          <Typography variant="h2" textTransform={"capitalize"}>
            why choose us
          </Typography>
          <Typography variant="h4">Best For You</Typography>
          <Stack gap={"2rem"}>
            <Typography>
              Shree Rasamrita Ayurveda:Best Ayurved Hospital situated in Jaipur,
              Rajisthan. At Shree Rasamrita Ayurveda Hospital, we believe in the
              power of natural remedies and personalized care. Our experienced
              practitioners are committed to restoring and maintaining health
              through time-tested Ayurvedic therapies, herbal treatments, and
              lifestyle consultations.
            </Typography>
            <Typography>
              Whether you are seeking relief from chronic ailments, preventive
              care, or a rejuvenating retreat, Shree Rasamrita Ayurveda Hospital
              is your trusted partner in wellness. Our state-of-the-art
              facilities, serene environment, and compassionate staff ensure
              that every patient receives the highest level of care and
              attention.
            </Typography>
            <Typography>
              Join us on a journey to optimal health and discover the
              transformative benefits of Ayurveda at Shree Rasamrita Ayurved
              Hospital.
            </Typography>
          </Stack>
          <Button
            sx={{
              bgcolor: "#5DADE2",
              color: "#FDFDFD",
              p: "1rem 3rem",
              fontSize: "2.2rem",
              borderRadius: "4rem",
              mt: "2rem",
              ":hover": {
                bgcolor: "#2C3E50",
              },
            }}
          >
            Read More
          </Button>
        </Stack>
      </Stack>
      <Stack
        p={"8rem 5rem"}
        gap={"4rem"}
        justifyContent={"flex-start"}
        alignItems={"center"}
        bgcolor={"#FDFDFD"}
      >
        <Stack
          flex={1}
          gap={"2rem"}
          alignItems={"center"}
          sx={{
            ".MuiSvgIcon-root": {
              color: "#5DADE2 !important",
              fontSize: "8rem",
            },
          }}
        >
          <SpaOutlined />
          <Typography variant="h2" textTransform={"capitalize"}>
            top services
          </Typography>
          <Typography variant="h4" textTransform={"capitalize"}>
            what we do best
          </Typography>
        </Stack>
        <Stack
          flexDirection={"row"}
          flexWrap={"wrap"}
          justifyContent={"space-around"}
          width={"100%"}
        >
          <Paper
            sx={{
              background: "linear-gradient(to bottom, #FDFDFD, #D6EAF8)",
              p: "4rem",
              flex: "0 0 25%",
            }}
          >
            <Box
              component={"img"}
              src="https://picsum.photos/seed/picsum/200/300"
              sx={{
                aspectRatio: "4/3",
                objectFit: "fill",
                width: "100%",
                mb: "3rem",
              }}
            />
            <Typography variant="h5" textAlign={"center"}>
              Panchkarma
            </Typography>
          </Paper>
          <Paper
            sx={{
              background: "linear-gradient(to bottom, #FDFDFD, #D6EAF8)",
              p: "4rem",
              flex: "0 0 25%",
            }}
          >
            <Box
              component={"img"}
              src="https://picsum.photos/seed/picsum/200/300"
              sx={{
                aspectRatio: "4/3",
                objectFit: "fill",
                width: "100%",
                mb: "3rem",
              }}
            />
            <Typography variant="h5" textAlign={"center"}>
              OPD
            </Typography>
          </Paper>
          <Paper
            sx={{
              background: "linear-gradient(to bottom, #FDFDFD, #D6EAF8)",
              p: "4rem",
              flex: "0 0 25%",
            }}
          >
            <Box
              component={"img"}
              src="https://picsum.photos/seed/picsum/200/300"
              sx={{
                aspectRatio: "4/3",
                objectFit: "fill",
                width: "100%",
                mb: "3rem",
              }}
            />
            <Typography variant="h5" textAlign={"center"}>
              IPD
            </Typography>
          </Paper>
        </Stack>
      </Stack>
      <Stack
        bgcolor={"#D6EAF8"}
        gap={"1rem"}
        p={"7rem 5rem 14rem"}
        justifyContent={"flex-start"}
        alignItems={"center"}
        position={"relative"}
        flexWrap={"wrap"}
        width={"100%"}
      >
        <Stack
          flex={1}
          gap={"2rem"}
          alignItems={"center"}
          sx={{
            ".MuiSvgIcon-root": {
              color: "#5DADE2 !important",
              fontSize: "8rem",
            },
          }}
        >
          <SpaOutlined />
          <Typography variant="h2" textTransform={"capitalize"}>
            Benefit from choosing the best
          </Typography>
          <Typography variant="h4" textTransform={"capitalize"}>
            Our recent achievements
          </Typography>
        </Stack>
        <Stack
          position={"absolute"}
          flexDirection={"row"}
          justifyContent={"space-between"}
          width={"100%"}
          flexWrap={"wrap"}
          p={"0 5rem"}
          gap={"2rem"}
          top={"80%"}
          zIndex={1}
          sx={{
            ".MuiSvgIcon-root": {
              color: "#5DADE2 !important",
              fontSize: "6rem",
            },
          }}
        >
          <Paper
            sx={{
              p: "2rem",
              flex: "0 0 22%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              background: "linear-gradient(to bottom, #FDFDFD, #D6EAF8)",
              gap: "1rem",
            }}
          >
            <WorkspacePremiumOutlined />
            <Typography variant="h4" textAlign={"center"}>
              Panchkarma
            </Typography>
            <Typography variant="h5" textAlign={"center"}>
              Panchkarma
            </Typography>
          </Paper>
          <Paper
            sx={{
              p: "2rem",
              flex: "0 0 22%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1rem",
              background: "linear-gradient(to bottom, #FDFDFD, #D6EAF8)",
            }}
          >
            <PersonalInjury />
            <Typography variant="h4" textAlign={"center"}>
              Panchkarma
            </Typography>
            <Typography variant="h5" textAlign={"center"}>
              Panchkarma
            </Typography>
          </Paper>
          <Paper
            sx={{
              p: "2rem",
              flex: "0 0 22%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              background: "linear-gradient(to bottom, #FDFDFD, #D6EAF8)",
              gap: "1rem",
            }}
          >
            <Coronavirus />
            <Typography variant="h4" textAlign={"center"}>
              Panchkarma
            </Typography>
            <Typography variant="h5" textAlign={"center"}>
              Panchkarma
            </Typography>
          </Paper>
          <Paper
            sx={{
              p: "2rem",
              flex: "0 0 22%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1rem",
              background: "linear-gradient(to bottom, #FDFDFD, #D6EAF8)",
            }}
          >
            <HealthAndSafety />
            <Typography variant="h4" textAlign={"center"}>
              Panchkarma
            </Typography>
            <Typography variant="h5" textAlign={"center"}>
              Panchkarma
            </Typography>
          </Paper>
        </Stack>
      </Stack>
      <Stack
        gap={"4rem"}
        bgcolor={"#fdfdfd"}
        p={"15rem 5rem 5rem"}
        justifyContent={"flex-start"}
        alignItems={"center"}
        position={"relative"}
        flexWrap={"wrap"}
        width={"100%"}
      >
        <Stack
          flex={1}
          gap={"1rem"}
          alignItems={"center"}
          sx={{
            ".MuiSvgIcon-root": {
              color: "#5DADE2 !important",
              fontSize: "8rem",
            },
          }}
        >
          <SpaOutlined />
          <Typography variant="h2" textTransform={"capitalize"}>
            Diseases We Treat
          </Typography>
          <Typography variant="h4" textTransform={"capitalize"}>
            Treatment
          </Typography>
        </Stack>
        <Stack
          flexDirection={"row"}
          justifyContent={"space-between"}
          width={"100%"}
          flexWrap={"wrap"}
          gap={"3rem"}
          sx={{
            ".MuiSvgIcon-root": {
              fill: "#5DADE2 !important",
            },
          }}
        >
          <Paper
            sx={{
              p: "1rem",
              flex: "0 0 22%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <DiabetesIcon
              sx={{
                fontSize: "10rem",
              }}
            />
            <Typography variant="h4" textAlign={"center"}>
              Diabetes
            </Typography>
          </Paper>
          <Paper
            sx={{
              p: 1,
              flex: "0 0 22%",
              display: "flex",
              gap: "2rem",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <InfertileIcon
              sx={{
                fontSize: "6rem",
                mt: "1.5rem",
              }}
            />
            <Typography variant="h4" textAlign={"center"}>
              Infertility
            </Typography>
          </Paper>
          <Paper
            sx={{
              p: 1,
              flex: "0 0 22%",
              display: "flex",
              gap: "2rem",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <BpIcon
              sx={{
                fontSize: "6rem",
                mt: "1.5rem",
              }}
            />
            <Typography variant="h4" textAlign={"center"}>
              Blood Pressure
            </Typography>
          </Paper>
          <Paper
            sx={{
              p: 1,
              flex: "0 0 22%",
              display: "flex",
              gap: "2rem",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <CancerIcon
              sx={{
                fontSize: "6rem",
                mt: "1.5rem",
              }}
            />
            <Typography variant="h4" textAlign={"center"}>
              Cancer
            </Typography>
          </Paper>
          <Paper
            sx={{
              p: 1,
              flex: "0 0 22%",
              display: "flex",
              gap: "2rem",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <MigraineIcon
              sx={{
                fontSize: "6rem",
                mt: "1.5rem",
              }}
            />
            <Typography variant="h4" textAlign={"center"}>
              Migraine
            </Typography>
          </Paper>
          <Paper
            sx={{
              p: 1,
              flex: "0 0 22%",
              display: "flex",
              gap: "2rem",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Epilepsy
              sx={{
                fontSize: "6rem",
                mt: "1.5rem",
              }}
            />
            <Typography variant="h4" textAlign={"center"}>
              Epilepsy
            </Typography>
          </Paper>
          <Paper
            sx={{
              p: 1,
              flex: "0 0 22%",
              display: "flex",
              gap: "2rem",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <IBSIcon
              sx={{
                fontSize: "6rem",
                mt: "1.5rem",
              }}
            />
            <Typography variant="h4" textAlign={"center"}>
              IBS
            </Typography>
          </Paper>
          <Paper
            sx={{
              p: 1,
              flex: "0 0 22%",
              display: "flex",
              gap: "2rem",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <ThyroidIcon
              sx={{
                fontSize: "6rem",
                mt: "1.5rem",
              }}
            />
            <Typography variant="h4" textAlign={"center"}>
              Thyroid
            </Typography>
          </Paper>
          <Paper
            sx={{
              p: 1,
              flex: "0 0 22%",
              display: "flex",
              gap: "2rem",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <PCODIcon
              sx={{
                fontSize: "6rem",
                mt: "1.5rem",
              }}
            />
            <Typography variant="h4" textAlign={"center"}>
              PCOD/PCOS
            </Typography>
          </Paper>
          <Paper
            sx={{
              p: 1,
              flex: "0 0 22%",
              display: "flex",
              gap: "2rem",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <LiverIcon
              sx={{
                fontSize: "6rem",
                mt: "1.5rem",
              }}
            />
            <Typography variant="h4" textAlign={"center"}>
              Liver
            </Typography>
          </Paper>
          <Paper
            sx={{
              p: 1,
              flex: "0 0 22%",
              display: "flex",
              gap: "2rem",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <JpIcon
              sx={{
                fontSize: "6rem",
                mt: "1.5rem",
              }}
            />
            <Typography variant="h4" textAlign={"center"}>
              Joint Pain
            </Typography>
          </Paper>
          <Paper
            sx={{
              p: 1,
              flex: "0 0 22%",
              display: "flex",
              gap: "2rem",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <KidneyIcon
              sx={{
                fontSize: "6rem",
                mt: "1.5rem",
              }}
            />
            <Typography variant="h4" textAlign={"center"}>
              Kidney
            </Typography>
          </Paper>
        </Stack>
      </Stack>
      <Stack
        bgcolor={"#D6EAF8"}
        gap={"5rem"}
        p={"8rem 5rem"}
        justifyContent={"flex-start"}
        alignItems={"center"}
        flexWrap={"wrap"}
        width={"100%"}
      >
        <Stack
          flex={1}
          gap={"1rem"}
          alignItems={"center"}
          sx={{
            ".MuiSvgIcon-root": {
              fontSize: "10rem",
            },
          }}
        >
          <DoctorsIcon
            sx={{
              fill: "#5DADE2",
            }}
          />
          <Typography variant="h2" textTransform={"capitalize"}>
            Doctor's Panel
          </Typography>
        </Stack>
        <Carousel autoPlay sx={{ width: "100%" }} navButtonsAlwaysInvisible>
          {items.map((item, i) => (
            <DoctorCard key={i} drName={item.name} image={item.image} />
          ))}
        </Carousel>
      </Stack>
    </>
  );
};

export default Home;
