import React from "react";
import { Box, Typography, Card, CardContent, CardMedia } from "@mui/material";

import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";

import { demoProfilePicture } from "../utils/constants";

const ChannelCard = ({ channelDetail }) => {
  return (
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: { xs: "356px", md: "320px" },
        height: "326px",
        margin: "auto",
      }}
    >
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            color: "white",
          }}
        >
          <CardMedia
            image={
              channelDetail?.snippet?.thumbnails?.high?.url ||
              demoProfilePicture ||
              "https://picsum.photos/200/300"
            }
            alt={channelDetail?.snippet?.title}
            sx={{
              borderRadius: "50%",
              height: "180px",
              width: "180px",
              mb: 2,
              borderRadius: "1px solid #e3e3e3",
            }}
          />
          <Typography variant="h6">
            {channelDetail?.snippet?.title}
            <CheckCircle
              sx={{
                fontSize: 14,
                color: "gray",
                marginLeft: "5px",
              }}
            />
          </Typography>

          {channelDetail?.statistics?.subscriberCount && (
            <Typography>
              {parseInt(
                channelDetail?.statistics?.subscriberCount
              ).toLocaleString()}{" "}
              Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
