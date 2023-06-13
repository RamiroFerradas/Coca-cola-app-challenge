import { Product } from "@/app/models/Product";
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
  products: Product[];
};
export default function Resumen({ products }: Props) {
  return (
    <>
      <p className="font-bold text-sm text-center">MISIONES</p>

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
            {products.slice(0, 6).map((row) => (
              <TableRow
                key={row.SKU}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell size="small" component="th" scope="row">
                  {row.SKU}
                </TableCell>
                <TableCell size="small" align="left">
                  {row.detalle}
                </TableCell>
                <TableCell size="small" align="center">
                  {row.quantity}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
