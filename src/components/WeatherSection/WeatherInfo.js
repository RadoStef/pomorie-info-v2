import { headerStyles } from '../HeaderSection/styles';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

export const WeatherInfo = () => {
  const today = new Date();
  const summerEnd = new Date(2023, 8, 23);
  const daysLeftToSummerEnd = (date1, date2) => Math.round((date2 - date1) / (1000 * 60 * 60 * 24));

  return (
    <Container sx={headerStyles.weatherInfoBar} maxWidth="xl">
      {<Box>
        Здравейте и добре дошли в Поморие! Астрономическото лято свършва след <span style={{color: 'red'}}>{daysLeftToSummerEnd(today, summerEnd)}</span> дни, изживейте го максимално добре! 💥😎🎉
      </Box>}
    </Container>
  );
};
