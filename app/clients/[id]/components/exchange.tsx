import { Unmissable } from "@/app/models/Unmissable";
import {
  TableContainer,
  Paper,
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
} from "@mui/material";

type Props = {
  unmissables: Unmissable[];
  theme: "dark" | "light";
};
export default function Exchange({ unmissables, theme }: Props) {
  return (
    <div>
      <p className="font-bold text-sm text-center">
        CANJE DE PREMIOS - App clientes
      </p>

      <TableContainer component={Paper}>
        <Table
          className={`${
            theme === "dark" ? "bg-gray-800 text-gray-200" : "bg-white"
          }`}
          sx={{ width: "100vw" }}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              <TableCell align="center">
                <span className={`${theme === "dark" && "text-gray-400"}`}>
                  SKU
                </span>
              </TableCell>
              <TableCell align="center">
                <span className={`${theme === "dark" && "text-gray-400"}`}>
                  Detalle
                </span>
              </TableCell>
              <TableCell align="center">
                <span className={`${theme === "dark" && "text-gray-400"}`}>
                  Cantidad
                </span>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {unmissables.slice(0, 6).map((row) => (
              <TableRow
                key={row.SKU}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell size="small" component="th" scope="row">
                  <span className={`${theme === "dark" && "text-gray-200"}`}>
                    {row.SKU}
                  </span>
                </TableCell>
                <TableCell size="small" align="left">
                  <span className={`${theme === "dark" && "text-gray-200"}`}>
                    {row.detail}
                  </span>
                </TableCell>
                <TableCell size="small" align="left">
                  <span className={`${theme === "dark" && "text-gray-200"}`}>
                    {Math.floor(Math.random() * 5) + 1}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
