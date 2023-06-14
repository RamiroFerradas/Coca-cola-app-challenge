import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

type Props = {};
export default function Promotions({}: Props) {
  const dynamics = [
    { id: 1, dynamic: "Dinamica 1 - Promo 20%" },
    { id: 2, dynamic: "Dinamica 2 - Promo 25%" },
    { id: 3, dynamic: "Dinamica 3 - Promo 30%" },
    { id: 4, dynamic: "Dinamica 4 - Promo 35%" },
    { id: 5, dynamic: "Dinamica 5 - Promo 40%" },
    { id: 6, dynamic: "Dinamica 6 - Promo 45%" },
    { id: 7, dynamic: "Dinamica 7 - Promo 50%" },
    { id: 8, dynamic: "Dinamica 8 - Promo 55%" },
    { id: 9, dynamic: "Dinamica 9 - Promo 60%" },
    { id: 10, dynamic: "Dinamica 10 - Promo 65%" },
  ];
  return (
    <>
      <p className="font-bold text-sm text-center">
        PROMOCIONES QR web consumidores
      </p>

      <TableContainer component={Paper}>
        <Table sx={{ width: "100vw" }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Origen</TableCell>
              <TableCell align="center">Cantidad</TableCell>
              <TableCell align="center">Entregado</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dynamics
              .sort(() => Math.random() - 0.5)
              .slice(0, 3)
              .map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell size="small" component="th" scope="row">
                    {row.dynamic}
                  </TableCell>
                  <TableCell size="small" align="center">
                    {Math.floor(Math.random() * 5) + 1}
                  </TableCell>
                  <TableCell size="small" align="center">
                    <LocalShippingIcon className="text-red-500" />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
