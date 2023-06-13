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
};
export default function Exchange({ unmissables }: Props) {
  return (
    <>
      <p className="font-bold text-sm text-center">
        CANJE DE PREMIOS - App clientes
      </p>

      <TableContainer component={Paper}>
        <Table sx={{ width: "100vw" }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="center">SKU</TableCell>
              <TableCell align="center">Detalle</TableCell>
              <TableCell align="center">Cantidad</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {unmissables.slice(0, 6).map((row) => (
              <TableRow
                key={row.SKU}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell size="small" component="th" scope="row">
                  {row.SKU}
                </TableCell>
                <TableCell size="small" align="left">
                  {row.detail}
                </TableCell>
                <TableCell size="small" align="left">
                  {Math.floor(Math.random() * 5) + 1}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
