import React from "react";

import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard } from "./";

const Videos = ({ videos, direction }) => {
  if (!videos?.length) return "Loading ...";

  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="start"
      gap={2}
    >
      {videos.map((item, index) => (
        <Box key={index}>
          {/* check if it's a video, then render in the videoCard component */}
          {item.id.videoId && <VideoCard video={item} />}

          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
