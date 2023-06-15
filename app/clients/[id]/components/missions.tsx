import { Mission } from "@/app/models/Mission";
import {
  TableContainer,
  Paper,
  Table,
  TableRow,
  TableCell,
  TableBody,
  TableHead,
} from "@mui/material";

type Props = {
  missions: Mission[];
  theme: "dark" | "light";
};
export default function Missions({ missions, theme }: Props) {
  return (
    <div>
      <p className="font-bold text-sm text-center">MISIONES</p>

      <TableContainer component={Paper}>
        <Table
          sx={{ width: "100vw" }}
          size="small"
          aria-label="a dense table"
          className={`${
            theme === "dark" ? "bg-gray-800 text-gray-200" : "bg-white"
          }`}
        >
          <TableHead>
            <TableRow>
              <TableCell
                className={`${theme === "dark" && "text-white"}`}
                align="center"
              >
                SKU
              </TableCell>
              <TableCell
                className={`${theme === "dark" && "text-white"}`}
                align="center"
              >
                Detalle
              </TableCell>
              <TableCell
                className={`${theme === "dark" && "text-white"}`}
                align="center"
              >
                Cantidad
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="w-screen">
            {missions.slice(0, 6).map((row) => (
              <TableRow
                key={row.SKU}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  className={`${theme === "dark" && "text-white"}`}
                  size="small"
                  component="th"
                  scope="row"
                >
                  {row.SKU}
                </TableCell>
                <TableCell
                  className={`${theme === "dark" && "text-white"}`}
                  size="small"
                  align="left"
                >
                  {row.detail}
                </TableCell>
                <TableCell
                  className={`${theme === "dark" && "text-white"}`}
                  size="small"
                  align="center"
                >
                  {row.quantity}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
