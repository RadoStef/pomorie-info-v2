import { Link } from 'react-router-dom';
import { footerContacts, footerWebsites, footerFacebookGrous } from '../mock-data/data';
import { Divider } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import FacebookIcon from '@mui/icons-material/Facebook';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import styles from './Footer.module.css';

export const Footer = () => {
  const renderContacts = footerContacts.map((contact) => {
    return (
      <li key={contact.info}>
        {contact.icon} {contact.info}
      </li>
    );
  });

  const renderSites = footerWebsites.map((site) => {
    return (
      <li key={site.text}>
        <Link to={site.link}>{site.text} </Link>
      </li>
    );
  });

  const renderGroups = footerFacebookGrous.map((site) => {
    return (
      <li key={site.text}>
        <Link to={site.link}>{site.text} </Link>
      </li>
    );
  });

  return (
    <footer>
      <div className={styles['footer-wrapper']}>
        <div className={styles['footer-column']}>
          <p>
            <ContactSupportIcon
              fontSize='large'
              sx={{
                background:
                  'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(251,188,5,1) 0%, rgba(0,212,255,1) 100%)',
                color: 'white', borderRadius: '4px'
              }}
            />
          </p>
          <Divider />
          <ul>{renderContacts}</ul>
        </div>

        <div className={styles['footer-column']}>
          <p>
            <LanguageIcon
              fontSize='large'
              sx={{
                background:
                  'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(251,188,5,1) 0%, rgba(0,212,255,1) 100%)',
                color: 'white', borderRadius: '4px'
              }}
            />
          </p>
          <Divider />
          <ul>{renderSites}</ul>
        </div>
        <div className={styles['footer-column']}>
          <p>
            <FacebookIcon
              fontSize='large'
              sx={{
                background:
                  'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(251,188,5,1) 0%, rgba(0,212,255,1) 100%)',
                color: '#f1f1f1', borderRadius: '4px'
              }}
            />
          </p>
          <Divider />
          <ul>{renderGroups}</ul>
        </div>
      </div>
      <div style={{margin: "20px"}}>
        <p>
          <span >
            Код, дизайн и цялостна изработка: Радослав Стефанов - {new Date().getFullYear()}{' '}
          </span>
          <span>
            <Link to='https://github.com/RadoStef' target='_blank'>
              GitHub
            </Link>
          </span>
        </p>
      </div>
    </footer>
  );
};
