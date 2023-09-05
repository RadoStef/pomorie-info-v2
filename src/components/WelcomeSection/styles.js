import cover from '../../assets/cover5.jpg';
import cover1 from '../../assets/cover.jpg';
import cover2 from '../../assets/cover2.jpg';
import cover3 from '../../assets/cover3.jpg';
import cover4 from '../../assets/cover4.jpg';
import cover5 from '../../assets/cover1.jpg';
import cover6 from '../../assets/cover6.jpg';
import cover7 from '../../assets/cover7.jpg';
import cover8 from '../../assets/cover8.jpg';
import cover9 from '../../assets/cover9.jpg';
import cover10 from '../../assets/cover10.jpg';
import cover11 from '../../assets/cover11.jpg';
import cover12 from '../../assets/cover12.jpg';
import cover13 from '../../assets/cover13.jpg';
import cover14 from '../../assets/cover14.jpg';
import cover15 from '../../assets/cover15.jpg';
import cover16 from '../../assets/cover16.jpg';

const backgroundImages = [cover, cover1, cover2, cover3, cover4, cover5, cover6, cover7, cover8, cover9, 
cover10, cover11, cover12, cover13, cover14, cover15, cover16];
const randomIndex = Math.floor(Math.random() * backgroundImages.length);
const selectedImage = backgroundImages[randomIndex];

export const styles = {
    container: {
        marginTop: '80px',
        background: 'white',
    },
    boxStyle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: `url(${selectedImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '850px',
        opacity: 0.9,
    },
    welcomeTextBox: {
        width: '30%',
        position: 'absolute',
        top: '200px',
        left: '55%',
        backgroundColor: '#f1f1f1',
        borderRadius: '10px',
        border: '1px solid #fbbc05',
        boxShadow: '0px 6px 13px -6px rgba(0,0,0,0.55)',
    },
    typewriterSpan: {
        height: '25px',
    }
};