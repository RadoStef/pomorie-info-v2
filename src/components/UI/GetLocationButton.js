import MyLocationIcon from '@mui/icons-material/MyLocation';
import { Button } from '@mui/material';

export const GetLocationButton = ({ onClick }) => {
  return (
    <Button
      variant='outlined'
      onClick={onClick}
    >
      <MyLocationIcon />
    </Button>
  );
};
