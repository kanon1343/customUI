import { Player } from "@lottiefiles/react-lottie-player";
import { useEffect, useRef } from "react";
import SuccessAnimation from "@/app/assets/animation/successAnimation.json";

type Props = {
    on: boolean;
}

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
        <Player ref={playerRef} speed={1.8} keepLastFrame src={SuccessAnimation} />
    );
};