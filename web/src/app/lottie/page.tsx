"use client"

import { useCallback, useState } from "react";
import {Box, Button} from "@kuma-ui/core";
import { Lottie } from "./lottie";

export default function Page() {
    const [on, setOn] = useState(false);
    const handleClick = useCallback(() => {
        setOn((prev) => !prev);
    }, []);

    return (
        <Box>
            <Button onClick={handleClick}>
                <Lottie on={on} />
            </Button>
        </Box>
    );
}