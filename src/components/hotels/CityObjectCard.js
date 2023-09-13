import { Link } from 'react-router-dom';
import { useCategoryData } from '../../contexts/CategoriesContext';
import { BootstrapTooltip } from '../UI/Themes';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { iconStyle, cardStyle, cardImageStyle } from '../UI/Themes';
import { showMore } from '../mock-data/data';
import { CardsWrapper } from '../UI/CardsWrapper';
import { styles } from '../UI/CityObjectsCardStyles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarIcon from '@mui/icons-material/Star';
import LazyLoad from 'react-lazy-load';

export const CityObjectCard = () => {
  const { hotelsData } = useCategoryData();

  const handleClick = () => {
    alert('Официалната страница на този хотел ще се отвори в нов прозорец.');
  }

  return (
    <CardsWrapper>
      {hotelsData.map((hotel) => {
        return (
          <Card sx={styles.cityObjectCard} key={hotel.id}>
            <CardActionArea sx={cardStyle} disableRipple>
              <LazyLoad><CardMedia component='img' sx={cardImageStyle} image={hotel.img} alt={hotel.name} /></LazyLoad>
              <CardContent sx={styles.cardContent}>
                <Typography gutterBottom variant='h5' component='div'>
                  {hotel.name} {hotel.star}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  <b>Кратко описание:</b> {hotel.shortDescription.slice(0, 300)}
                  <Link to={hotel.linkTo}> ...Виж повече</Link>
                </Typography>
              </CardContent>
            </CardActionArea>

            <Box sx={{ maxWidth: 420, marginTop: '30px' }}>
              <BottomNavigation showLabels>
                <BootstrapTooltip title={hotel.stars}>
                  <BottomNavigationAction label={hotel.star} icon={<StarIcon sx={iconStyle} />} />
                </BootstrapTooltip>
                <BootstrapTooltip title='Ценови диапазон:'>
                  <BottomNavigationAction
                    label={hotel.priceRange}
                    icon={<LocalOfferIcon sx={iconStyle} />}
                  />
                </BootstrapTooltip>
                <BootstrapTooltip title='Адрес:'>
                  <BottomNavigationAction
                    label={hotel.address}
                    icon={<LocationOnIcon sx={iconStyle} />}
                  />
                </BootstrapTooltip>
              </BottomNavigation>
            </Box>

            <CardActions sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '15px' }}>
              <Link to={hotel.linkTo} target='_blank'>
                <Button size='medium' color='primary' variant='outlined' sx={{ marginTop: '15px' }} onClick={handleClick}>
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
