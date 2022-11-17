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
    <Card sx={{ width: 243 }}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="140px"
        bgcolor="#B2CEDE"
        textAlign="center"
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
            {maximum}° / {minimum}°
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
