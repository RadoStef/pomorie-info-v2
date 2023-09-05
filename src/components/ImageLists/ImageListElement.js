import { Link } from 'react-router-dom';
import { news } from '../mock-data/news';
import { BootstrapTooltip } from '../UI/Themes';
import { HomepageSectionsCard } from '../UI/HomepageSectionsCard';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

export const ImageListElement = () => {
  return (
    <HomepageSectionsCard>
    <ImageList sx={{ width: '95%', margin: '20px 0 30px 0', borderRadius: '4px' }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div" sx={{ backgroundColor: '#83aed3', color: 'white'}}><h2 style={{margin: 0}}>Новини</h2></ListSubheader>
      </ImageListItem>
      {news.map((item) => (
        <ImageListItem key={item.image}>
          <img
            src={`${item.image}?w=248&fit=crop&auto=format`}
            srcSet={`${item.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
            style={{height: '350px'}}
          />
          <ImageListItemBar
          sx={{ height: '80px', fontSize: '22px'}}
            title={item.title}
            subtitle={`Източник: ${item.author}`}
            actionIcon={
              <IconButton
                sx={{ marginRight: '15px', background: 'white', color: 'black' }}
                aria-label={`info about ${item.title}`}
              > 
              <BootstrapTooltip title={'Прочети новината...'}>
                  <Link to={item.source} target='_blank'><AutoStoriesIcon/></Link> 
              </BootstrapTooltip>
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
    </HomepageSectionsCard>
  );
};
