import { CardContent, Typography, Box, Card, CardMedia } from "@mui/material";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import moon from "../images/Moon.svg";

interface WeatherDataProps {
  degrees: string;
  date: string;
  minimum: number;
  maximum: number;
  description: string;
}

const WeatherCard: React.FC<WeatherDataProps> = ({
  degrees,
  date,
  minimum,
  maximum,
  description,
}) => {
  return (
    <Card
      sx={{
        width: 243,
        background: `rgba(62, 155, 206, 0.3)`,
        borderRadius: "16px",
        boxShadow: " 0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(3.4px)",
        border: "1px solid rgba(62, 155, 206, 0.15)",
      }}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="140px"
        bgcolor="#B2CEDE"
        textAlign="center"
        sx={{
          background: `rgba(255, 255, 255, 0.11)`,
          borderRadius: "16px",
          boxShadow: " 0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(3.4px)",
          border: "1px solid rgba(255, 255, 255, 0.15)",
        }}
      >
        <Typography
          sx={{ fontWeight: "light", position: "absolute" }}
          variant="h3"
        >
          {degrees}
        </Typography>
      </Box>
      <CardContent
        sx={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography variant="subtitle2">{date}</Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Máxima de {maximum}° / Minimo de {minimum}°
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
