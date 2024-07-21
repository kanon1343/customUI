import { Player } from "@lottiefiles/react-lottie-player";
import { useEffect, useRef } from "react";
import SuccessAnimation from "@/app/assets/animation/successAnimation.json";
import kamihubukiAnimation from "@/app/assets/animation/kamihubuki.json";
import { Box } from "@kuma-ui/core";

type Props = {
  on: boolean;
};

export const Lottie: React.FC<Props> = ({ on }: Props) => {
  const playerRef = useRef<Player>(null);

  useEffect(() => {
    if (!playerRef.current) {
      return;
    }
    if (on) {
      playerRef.current.play();
    } else {
      playerRef.current.stop();
    }
  }, [on]);

  return (
    <Box width={800} height={800} position={"relative"}>
      <Box
        zIndex={100}
        top={30}
        bottom={30}
        left={30}
        right={30}
        position={"absolute"}
      >
        <Player
          speed={1.5}
          ref={playerRef}
          autoplay
          src={kamihubukiAnimation}
        />
      </Box>
      <Box position={"absolute"} top={300} bottom={300} left={300} right={300}>
        <Player ref={playerRef} autoplay src={SuccessAnimation} />
      </Box>
    </Box>
  );
};
