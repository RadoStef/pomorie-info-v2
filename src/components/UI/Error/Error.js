import ErrorIcon from '@mui/icons-material/Error';
import { Link } from 'react-router-dom';

export const Error = ({error}) => {
    return (
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center', 
        padding: '20px',
        height: '65vh',
        maxWidth: '70%',
        background: 'white',
        color: 'black',
      }}>
        <ErrorIcon sx={{ fontSize: "55px", color: '#cc0033', margin: '25px'}}/>
        <h3>Проблем със зареждането на обектите. Моля, опитайте по-късно. ({error.message})</h3>
        <Link to="/">Обратно</Link>
      </div>
    );
  };