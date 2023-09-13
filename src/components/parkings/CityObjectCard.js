import { Link } from 'react-router-dom';
import { Button, CardActionArea, CardActions } from "@mui/material";
import { BootstrapTooltip } from "../UI/Themes";
import { iconStyle, cardStyle, cardImageStyle } from "../UI/Themes";
import { showMore } from "../mock-data/data";
import { CardsWrapper } from "../UI/CardsWrapper";
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
import PaidIcon from '@mui/icons-material/Paid';
import Chip from '@mui/material/Chip';
import LazyLoad from 'react-lazy-load';


export const CityObjectCard = ({parkingsData}) => {

  return (
    <CardsWrapper>
      {parkingsData.map((parking) => {
        return (
          <Card
            sx={styles.cityObjectCard}
            key={parking.id}
          >
            <CardActionArea 
              sx={cardStyle}
              disableRipple>
              <LazyLoad>
                <CardMedia
                  component="img"
                  sx={cardImageStyle}
                  image={parking.img}
                  alt={parking.name}
                />
              </LazyLoad>
              <CardContent sx={styles.cardContent}>
                <Typography gutterBottom variant="h5" component="div">
                  {parking.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                <b>Кратко описание:</b> {parking.description.slice(0, 300)}
                <Link to={parking.linkTo}> ...Виж повече</Link>
                </Typography>
              </CardContent>
            </CardActionArea>
            
            <Box sx={{ maxWidth: 420, marginTop: '30px' }}>
              <BottomNavigation
                showLabels
              > 
              <BootstrapTooltip title='Режим на паркинга:'>
                <BottomNavigationAction
                  label={parking.status}
                  icon={<PaidIcon sx={iconStyle}/>}
                />
              </BootstrapTooltip>
              <BootstrapTooltip title='Цени за паркиране:'>
                <BottomNavigationAction
                  label={parking.prices}
                  icon={<HistoryToggleOffIcon sx={iconStyle}/>}
                />
              </BootstrapTooltip>
              <BootstrapTooltip title='Адрес:'>
                <BottomNavigationAction
                  label={parking.address}
                  icon={<LocationOnIcon sx={iconStyle}/>}
                />
              </BootstrapTooltip>
              </BottomNavigation>
            </Box>

            <CardActions sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '15px'}}>
              <Chip label={parking.tag} color={parking.tag === 'Буферен / Безплатен' ? 'success' : 'info'} sx={{marginTop: '15px'}}/>
              <Link to={parking.linkTo}>
                <Button size="medium" color="primary" variant="outlined" sx={{marginTop: '15px'}}>
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
