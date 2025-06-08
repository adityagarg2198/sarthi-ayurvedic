import SectionTemplate from "../../components/SectionTemplate/SectionTemplate.component";
import { Box, Paper, Stack, Typography } from "@mui/material";

import image1 from "../../assets/images/WhatsApp Image 2024-04-28 at 12.17.20.jpeg";
import image2 from "../../assets/images/WhatsApp Image 2024-04-28 at 12.17.21.jpeg";
import image3 from "../../assets/images/WhatsApp Image 2024-04-28 at 12.17.24 PM.jpeg";
import image4 from "../../assets/images/WhatsApp Image 2024-04-28 at 12.17.25 (2).jpeg";
import image5 from "../../assets/images/WhatsApp Image 2024-04-28 at 12.17.25 PM (1).jpeg";
import image6 from "../../assets/images/WhatsApp Image 2024-04-28 at 12.17.25 PM.jpeg";
import image7 from "../../assets/images/WhatsApp Image 2024-04-28 at 12.17.26 PM (1).jpeg";
import image8 from "../../assets/images/WhatsApp Image 2024-04-28 at 12.17.26 PM.jpeg";
import Carousel from "react-material-ui-carousel";
import { FC } from "react";

const ImageContainer: FC<{ src: string }> = ({ src }) => {
  return (
    <Box
      component={"img"}
      src={src}
      sx={{
        objectFit: "fill",
        margin: "0 auto",
        width: "100%",
        height: "100%",
        aspectRatio: "2/1",
      }}
    />
  );
};

const About = () => {
  const items = [
    {
      image: image1,
      key: "Image1",
    },
    {
      image: image2,
      key: "Image2",
    },
    {
      image: image3,
      key: "Image3",
    },
    {
      image: image4,
      key: "Image4",
    },
    {
      image: image5,
      key: "Image5",
    },
    {
      image: image6,
      key: "Image6",
    },
    {
      image: image7,
      key: "Image7",
    },
    {
      image: image8,
      key: "Image8",
    },
  ];
  return (
    <>
      <SectionTemplate
        heading="Welcome to Sarthi Ayurvedic Hospital"
        subHeading="About Us"
        backgroundColor="transparent"
      >
        <Stack
          gap="3rem"
          maxWidth={"80dvw"}
          margin={"0 auto"}
          textAlign={"justify"}
        >
          <Typography>
            Best Ayurved Hospital in Rajasthan, Established on June 12, 2022,
            Shree Rasamrita Ayurveda Hospital is dedicated to bringing the
            ancient wisdom of Ayurveda to the modern world. Located in the
            serene town of Chirawa, Rajasthan, our hospital is a sanctuary of
            holistic healing where traditional Ayurvedic practices meet
            contemporary healthcare standards.
          </Typography>
          <Typography>
            At Shree Rasamrita Ayurveda Hospital, we believe in the power of
            natural remedies and personalized care. Our experienced
            practitioners are committed to restoring and maintaining health
            through time-tested Ayurvedic therapies, herbal treatments, and
            lifestyle consultations.
          </Typography>
          <Typography>
            Whether you are seeking relief from chronic ailments, preventive
            care, or a rejuvenating retreat, Shree Rasamrita Ayurveda Hospital
            is your trusted partner in wellness. Our state-of-the-art
            facilities, serene environment, and compassionate staff ensure that
            every patient receives the highest level of care and attention.
          </Typography>
          <Typography>
            Join us on a journey to optimal health and discover the
            transformative benefits of Ayurveda at Shree Rasamrita Ayurveda
            Hospital.
          </Typography>
        </Stack>
      </SectionTemplate>
      <SectionTemplate
        heading="Experience Our Care"
        backgroundColor="transparent"
      >
        <Paper
          sx={{
            width: "75dvw",
            margin: "0 auto",
            padding: "7rem 5rem 2rem",
            background: "linear-gradient(to bottom, #FDFDFD, #D6EAF8)",
          }}
        >
          <Carousel
            autoPlay
            interval={1500}
            activeIndicatorIconButtonProps={{
              style: {
                background: "#2C3E50",
                fill: "#fff !important",
              },
            }}
            sx={{ width: "100%" }}
            navButtonsAlwaysVisible
            swipe
            stopAutoPlayOnHover={false}
          >
            {items.map((item) => (
              <ImageContainer key={item.key} src={item.image} />
            ))}
          </Carousel>
        </Paper>
      </SectionTemplate>
    </>
  );
};

export default About;
