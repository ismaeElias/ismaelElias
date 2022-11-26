import { Box } from "@chakra-ui/react";
import React from "react";
import Lottie from "react-lottie";
import animationData from "../../assets/codingLottieFile.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
};

export default function CodingAnimation() {
  return (
    <div style={{ pointerEvents: "none" }}>
      <Box w={[300, 400, 600]} h={[300, 400]}>
        <Lottie options={defaultOptions} />
      </Box>
    </div>
  );
}
