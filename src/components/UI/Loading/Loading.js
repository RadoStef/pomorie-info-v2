import SailingIcon from '@mui/icons-material/Sailing';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export const Loading = () => {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      background: 'white',
      color: 'black',
    }}>
      <SailingIcon sx={{ fontSize: "55px", color: '#4bbdff'}}/>
      <h3>Страницата се зарежда, моля изчакайте...</h3>
      <Box sx={{ width: '30%', marginTop: '100px' }}>
        <LinearProgress />
      </Box>
    </div>
  );
};
