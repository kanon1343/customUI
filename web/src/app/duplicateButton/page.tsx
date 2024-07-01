import { Box } from "@kuma-ui/core";
import { DuplicateButton } from "./duplicateButton";

export default function Page() {

    return (
        <Box display="flex" alignItems="center" justifyContent="center" height="100vh">
            <DuplicateButton count={5} />
        </Box>
    );
};
