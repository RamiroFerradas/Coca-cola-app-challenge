import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import QrReader from "react-qr-reader";

type Props = {
  scan: boolean;
  validateUser: (code: number) => void;
  setScan: (value: boolean) => void;
};
export default function QrScann({ validateUser, scan, setScan }: Props) {
  const handleScan = (data: any) => {
    if (data) {
      const code = parseInt(data);

      validateUser(code);
    }
  };

  const handleError = (err: Error) => {
    console.error(err);
  };

  const previewStyle = {
    height: 100,
    width: 300,
    margin: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return !scan ? (
    <div
      className="flex flex-col justify-center items-center gap-3"
      onClick={() => setScan(true)}
    >
      <QrCodeScannerIcon fontSize="large" style={{ fontSize: "5rem" }} />
      <p className="font-semibold text-lg">ESCANEAR QR CLIENTE</p>
    </div>
  ) : (
    <div className="absolute">
      <QrReader
        delay={500}
        style={previewStyle}
        onError={handleError}
        onScan={handleScan}

        // facingMode={selected}
      />
    </div>
  );
}
