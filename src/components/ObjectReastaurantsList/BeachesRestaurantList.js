import { Link } from 'react-router-dom';
import styles from './BeachesRestaurantList.module.css';

export const BeachesRestaurantList = ({beachNum}) => {

  return (
    <div className={styles['restaurants-list-wrapper']}>
      
      <h4> Заведения на този плаж: </h4>
        <div>
            <ul className={styles.list}>
                {beachNum.openRestaurants.map((restaurant) => (
                <li key={restaurant.name}>
                    <Link to={restaurant.link}>{restaurant.name}</Link>
                </li>
                ))}
            </ul>
        </div>
    </div>
  );
};