import { Product } from "@/app/models/Product";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

type Props = {
  products: Product[];
};
export default function Misiones({ products }: Props) {
  return (
    <>
      <p className="font-bold text-sm text-center">IMPERDIBLES</p>

      <TableContainer component={Paper}>
        <Table
          sx={{ width: "100vw" }}
          className="min-w-screen"
          size="small"
          aria-label="a dense table"
        >
          {/* <TableHead>
            <TableRow>
              <TableCell align="center">SKU</TableCell>
              <TableCell align="center">Detalle</TableCell>
              <TableCell className="opacity-0" align="center">
                Cantidad
              </TableCell>
            </TableRow>
          </TableHead> */}
          <TableBody className="w-screen">
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
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
