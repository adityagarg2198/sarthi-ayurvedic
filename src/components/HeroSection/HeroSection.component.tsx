import Carousel from 'react-material-ui-carousel';
import { Box, Stack, Typography, useTheme } from '@mui/material';
import image1 from '../../assets/WhatsApp Image 2024-04-28 at 12.17.24 PM.jpeg';
import image2 from '../../assets/WhatsApp Image 2024-04-28 at 12.17.25 PM (1).jpeg';
import image3 from '../../assets/WhatsApp Image 2024-04-28 at 12.17.25 PM.jpeg';
import image4 from '../../assets/WhatsApp Image 2024-04-28 at 12.17.26 PM (1).jpeg';
import image5 from '../../assets/WhatsApp Image 2024-04-28 at 12.17.26 PM.jpeg';

const HeroSection = () => {
  const {
    palette: {
      primary: { main },
      secondary: { light: secondaryLight },
    },
  } = useTheme();
  const items = [
    {
      src: image1,
    },
    {
      src: image2,
    },
    {
      src: image3,
    },
    {
      src: image4,
    },
    {
      src: image5,
    },
  ];
  return (
    <Stack
      flexDirection={'row'}
      alignItems={'center'}
      sx={{
        backgroundColor: main,
        background: `linear-gradient(90deg, rgba(114,151,134,1) 0%, rgba(255,255,255,1) 100%)`,
      }}>
      <Typography flex={1} variant='h2' padding={'2rem'} color={secondaryLight}>
        Discover the Healing Power of Ayurveda with
        <Typography variant='h1'>Sarthi Ayurveda</Typography>
      </Typography>
      <Carousel
        autoPlay={true}
        animation='fade'
        height={'60rem'}
        sx={{ flex: 1 }}
        indicators={false}
        navButtonsAlwaysInvisible
        stopAutoPlayOnHover={false}
        interval={2000}>
        {items.map((item) => (
          <Box
            component={'img'}
            src={item.src}
            width={'100%'}
            height={'100%'}
            key={item.src}
          />
        ))}
      </Carousel>
    </Stack>
  );
};

export default HeroSection;
