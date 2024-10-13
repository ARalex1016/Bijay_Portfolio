import Stack from "@mui/material/Stack";
import LinearProgress from "@mui/material/LinearProgress";
import { useUserStore } from "../Store/userStore";

const Loader = () => {
  const { isLoading } = useUserStore();

  return (
    <>
      {isLoading && (
        <Stack
          sx={{ width: "100%", color: "grey.500" }}
          spacing={2}
          className="absolute top-0"
        >
          <LinearProgress color="secondary" />
        </Stack>
      )}
    </>
  );
};

export default Loader;
