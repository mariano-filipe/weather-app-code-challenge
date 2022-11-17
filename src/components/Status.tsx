import {
  Alert,
  AlertProps,
  AlertTitle,
  Collapse,
  Snackbar,
} from "@mui/material";

interface Props {
  message: string;
  title: string;
  openSnackbar: boolean;
  setOpenSnackbar: (open: boolean) => void;
  onClose: () => void;
}

type IMuiProps = Pick<AlertProps, "severity">;
type IStatusProps = IMuiProps & Props;

const Status: React.FC<IStatusProps> = ({
  message,
  severity,
  title,
  openSnackbar,
  onClose,
}) => {
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
            severity={severity}
            onClose={onClose}
          >
            <AlertTitle>{title}</AlertTitle>
            {message}
          </Alert>
        </Collapse>
      </Snackbar>
    </>
  );
};

export default Status;
