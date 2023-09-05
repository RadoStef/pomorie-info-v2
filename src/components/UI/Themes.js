import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';

export const BootstrapTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.black,
    },
}));

export const iconStyle = {marginBottom: '10px'};
export const cardStyle = {maxHeight: '600px', '&:hover': { cursor: 'default'}};
export const cardImageStyle = {maxHeight: '250px', '&:hover': {scale: '1.1'}, transition: 'all 0.3s'}