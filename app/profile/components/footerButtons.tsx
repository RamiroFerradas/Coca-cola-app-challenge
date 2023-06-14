import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ButtonGroup,
  Button,
} from "@mui/material";

import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowRight";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import { useAuth } from "@/app/context/authClientContext";

type Props = {};
export default function FooterButtons({}: Props) {
  const { logout } = useAuth();

  const footerButtons = [
    {
      icon: <CardGiftcardIcon />,
      label: "Mis Puntos FEMSA",
    },
    {
      icon: <HeadsetMicIcon />,
      label: "Contacto",
    },
  ];

  return (
    <div className="flex flex-col">
      {footerButtons.map((item, i) => (
        <ListItemButton
          key={i}
          className="border-2 h-20 bg-gray-500/30 my-1 rounded-md py-2 px-3"
        >
          <ListItemIcon>{item.icon}</ListItemIcon>

          <ListItemText primary={item.label} />

          <ListItemIcon>
            <KeyboardArrowLeftIcon fontSize="large" />
          </ListItemIcon>
        </ListItemButton>
      ))}
      <ButtonGroup variant="text" className="w-full">
        <Button
          className="bg-red-500 w-full"
          variant="contained"
          color="error"
          onClick={() => logout()}
        >
          CERRAR SESION
        </Button>
      </ButtonGroup>
    </div>
  );
}
