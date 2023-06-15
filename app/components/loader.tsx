import { CircularProgress } from "@mui/material";

export default function Loader() {
  return (
    <div className="h-96 flex items-center justify-center ">
      <CircularProgress color="error" size="4rem" />
    </div>
  );
}