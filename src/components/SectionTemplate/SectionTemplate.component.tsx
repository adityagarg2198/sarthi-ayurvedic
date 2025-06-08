import { SpaOutlined } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import { FC, ReactNode } from "react";

const SectionTemplate: FC<{
  backgroundColor?: string;
  heading: string;
  subHeading?: string;
  children: ReactNode;
}> = ({ backgroundColor = "#FDFDFD", heading, subHeading, children }) => {
  return (
    <Stack
      gap={"4rem"}
      sx={{
        backgroundColor,
      }}
      p={"5rem"}
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
        {heading && (
          <Typography variant="h2" textTransform={"capitalize"}>
            {heading}
          </Typography>
        )}
        {subHeading && (
          <Typography variant="h4" textTransform={"capitalize"}>
            {subHeading}
          </Typography>
        )}
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
        {children}
      </Stack>
    </Stack>
  );
};

export default SectionTemplate;
