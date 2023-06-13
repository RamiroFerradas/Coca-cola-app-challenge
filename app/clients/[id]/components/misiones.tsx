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
  missionss: Mission[];
};
export default function Misiones({ missionss }: Props) {
  return (
    <>
      <p className="font-bold text-sm text-center">MISIONES</p>

      <TableContainer component={Paper}>
        <Table
          sx={{ width: "100vw" }}
          className="min-w-screen"
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              <TableCell align="center">SKU</TableCell>
              <TableCell align="center">Detalle</TableCell>
              <TableCell align="center">Cantidad</TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="w-screen">
            {missionss.slice(0, 6).map((row) => (
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
