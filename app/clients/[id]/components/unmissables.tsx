import { Product } from "@/app/models/Product";
import { Unmissable } from "@/app/models/Unmissable";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
} from "@mui/material";

type Props = {
  unmissables: Unmissable[];
  theme: "dark" | "light";
};
export default function Unmissables({ unmissables, theme }: Props) {
  return (
    <>
      <p className="font-bold text-sm text-center">IMPERDIBLES</p>

      <TableContainer component={Paper}>
        <Table
          className={`${
            theme === "dark" ? "bg-gray-800 text-gray-200" : "bg-white"
          }`}
          sx={{ width: "100vw" }}
          size="small"
          aria-label="a dense table"
        >
          <TableBody>
            {unmissables.slice(0, 6).map((row) => (
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
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
