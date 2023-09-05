import { TypewriterText } from './TypewriterText';
import { styles } from './styles';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

export const WelcomeSection = ({ text }) => {
  return (
    <main>
    <Container sx={styles.container} maxWidth='xl'>
      <Box sx={styles.boxStyle}>
        <h1
          style={{
            fontSize: '28px',
            color: 'black',
            background: '#f1f1f1',
            padding: '20px',
            transform: 'skew(-15deg)',
            backgroundImage:
              'linear-gradient(to right top, #b9c4d4, #bed5dd, #cbe4e2, #dff1e6, #f8fded)',
            boxShadow: '4px 5px 9px -4px rgba(0,0,0,0.64)',
          }}
        >
          <TypewriterText text='Нещата за Поморие, които и GOOGLE не знае.' />
        </h1>
      </Box>
    </Container>
    </main>
  );
};
