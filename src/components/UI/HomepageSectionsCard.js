import React from 'react';
import classes from './HomepageSectionsCard.module.css';

export const HomepageSectionsCard = ({children}) => {
    return (
        <div className={classes['section-wrapper']}>
            {children}
        </div>
    )
};