import { Link } from 'react-router-dom';
import { useCategoryData } from '../../contexts/CategoriesContext';
import { Button, CardActionArea, CardActions } from "@mui/material";
import { BootstrapTooltip } from "../UI/Themes";
import { iconStyle, cardStyle, cardImageStyle } from "../UI/Themes";
import { showMore } from "../mock-data/data";
import { CardsWrapper } from '../UI/CardsWrapper';
import { styles } from '../UI/CityObjectsCardStyles';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import LazyLoad from 'react-lazy-load';

export const CityObjectCard = () => {
  const { cultureData } = useCategoryData();

  const handleClick = () => {
    window.alert('Официалния сайт на този обект ще се отвори в нов прозорец.')
  }
  return (
    <CardsWrapper>
      {cultureData.map((culture) => {
        return (
          <Card
            sx={styles.cityObjectCard}
            key={culture.id}
          >
            <CardActionArea 
              sx={cardStyle}
              disableRipple>
              <LazyLoad>
                <CardMedia
                  component="img"
                  sx={cardImageStyle}
                  image={culture.img}
                  alt={culture.name}
                />
              </LazyLoad>
              <CardContent sx={styles.cardContent}>
                <Typography gutterBottom variant="h5" component="div">
                  {culture.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                <b>Кратко описание:</b> {culture.description.slice(0, 300)}
                <Link to={culture.linkTo}> ...Виж повече</Link>
                </Typography>
              </CardContent>
            </CardActionArea>
            
            <Box sx={{ maxWidth: 420, marginTop: '30px' }}>
              <BottomNavigation
                showLabels
              > 
              <BootstrapTooltip title='Телефон за връзка:'>
                <BottomNavigationAction
                  label={culture.phoneNumber}
                  icon={<PhoneForwardedIcon sx={iconStyle}/>}
                />
              </BootstrapTooltip>
              <BootstrapTooltip title='Работно време:'>
                <BottomNavigationAction
                  label={culture.workTime}
                  icon={<HistoryToggleOffIcon sx={iconStyle}/>}
                />
              </BootstrapTooltip>
              <BootstrapTooltip title='Адрес:'>
                <BottomNavigationAction
                  label={culture.address}
                  icon={<LocationOnIcon sx={iconStyle}/>}
                />
              </BootstrapTooltip>
              </BottomNavigation>
            </Box>

            <CardActions sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '15px'}}>
              <Link to={culture.linkTo} target='_blank'>
                <Button size="medium" color="primary" variant="outlined" sx={{marginTop: '15px'}} onClick={handleClick}> 
                  {showMore}
                </Button>
              </Link>
            </CardActions>
          </Card>
        );
      })}
    </CardsWrapper>
  );
};
