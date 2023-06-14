import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import { useRef, useState } from "react";
import QrReader from "react-qr-reader";

type ValidateUserFunction = (code: number) => void;

export type QrScannProps = {
  validateUser: ValidateUserFunction;
  scan: boolean;
  setScan: (value: boolean) => void;
};

const QrScann: React.FC<QrScannProps> = ({ validateUser, scan, setScan }) => {
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
        delay={500}
        style={previewStyle}
        onError={handleError}
        onScan={handleScan}

        // facingMode={selected}
      />
    </div>
  );
};

export default QrScann;
