"use client";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import { useRef, useState } from "react";
import QrReader from "react-qr-reader";

type ValidateUserFunction = (code: number) => void;

export type QrScannProps = {
  validateUser: ValidateUserFunction;
};

const QrScann: React.FC<QrScannProps> = ({ validateUser }) => {
  const [selected, setSelected] = useState("environment");
  const [startScan, setStartScan] = useState(false);
  const [loadingScan, setLoadingScan] = useState(false);
  const [scan, setScan] = useState(false);

  const handleScan = (data: any) => {
    if (data) {
      const code = parseInt(data.text);
      validateUser(code);
    }
  };
  console.log(selected);

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
  console.log(qrRef);
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
        delay={1000}
        style={previewStyle}
        onError={handleError}
        onScan={handleScan}
        // constraints={{
        //   facingMode: "environment",
        // }}
        key="environment"

        // facingMode={selected}
      />
      <select onChange={(e) => setSelected(e.target.value)}>
        <option value={"environment"}>Back Camera</option>
        <option value={"user"}>Front Camera</option>
      </select>
    </div>
  );
};

export default QrScann;
