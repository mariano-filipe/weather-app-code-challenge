import {
  Alert,
  AlertProps,
  AlertTitle,
  Collapse,
  Snackbar,
} from "@mui/material";
import { IError } from "../types/weather";

interface Props {
  title: string;
  openSnackbar: boolean;
  setOpenSnackbar: (open: boolean) => void;
  onClose: () => void;
  details: any;
}

type IMuiProps = Pick<AlertProps, "severity">;
type IStatusProps = IMuiProps & Props;

const Status: React.FC<IStatusProps> = ({
  title,
  openSnackbar,
  onClose,
  details,
}) => {
  console.log("details", details);

  const showMessage = () => {
    if (!details.errorResponse) {
      return "Cidade não encotrada. Tente novamente.";
    }
    if (details.errorResponse.status === 401) {
      return "Erro interno. Tente Novamente mais tarde.";
    }
    return "Error";
  };
  console.log("error", details.errorResponse);

  return (
    <>
      <Snackbar
        open={openSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Collapse in={openSnackbar}>
          <Alert
            sx={{ borderRadius: "32px", width: "438px" }}
            icon={false}
            severity={details.severity}
            onClose={onClose}
          >
            <AlertTitle>{title}</AlertTitle>
            {showMessage()}
            {/* {message} */}
          </Alert>
        </Collapse>
      </Snackbar>
    </>
  );
};

export default Status;
