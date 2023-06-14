import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import { useRef, useState } from "react";
import QrReader from "react-qr-scanner";

type ValidateUserFunction = (code: number) => void;

export type QrScannProps = {
  validateUser: ValidateUserFunction;
};

const QrScann: React.FC<QrScannProps> = ({ validateUser }) => {
  const [scan, setScan] = useState(false);

  const handleScan = (data: any) => {
    if (data) {
      const code = parseInt(data.text);
      validateUser(code);
    }
  };

  const handleError = (err: Error) => {
    console.error(err);
  };

  const previewStyle = {
    height: 240,
    width: 320,
    margin: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  const qrRef = useRef(null);
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
        ref={qrRef}
        delay={100}
        style={previewStyle}
        onError={handleError}
        onScan={handleScan}
        // constraints={{
        //   facingMode: "environment",
        // }}
        facingMode="environment"
        // style={{ width: "100%" }}
      />
    </div>
  );
};

export default QrScann;
