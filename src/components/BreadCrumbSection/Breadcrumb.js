import { headerStyles } from '../HeaderSection/styles';
import { HomeButton } from '../UI/HomeButton';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

export const Breadcrumb = ({location, backLink}) => {

  return (
    <Container sx={headerStyles.breadCrumbs} maxWidth="xl">
      <Box sx={{ display: 'flex', alignItems: 'center'}}>
        <HomeButton/> {location}
        {backLink}
      </Box>
    </Container>
  );
};
