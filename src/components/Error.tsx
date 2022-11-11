import { Alert, AlertProps } from "@mui/material";

interface IErrorProps {
  message: string;
}
type IMuiProps = Pick<AlertProps, "severity">;
type Props = IMuiProps & IErrorProps;

const Error: React.FC<Props> = ({ message, severity }) => {
  return (
    <>
      <Alert severity={severity} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </>
  );
};

export default Error;
