import React, {  } from 'react';
import { Grid } from '@material-ui/core';

import useStyles from './styles.js';
import Property from '../../components/Property';

const List = ({places}) => {
  const classes = useStyles();
  
   return (
    <div className={classes.container}>
          { <Grid container spacing={3} className={classes.list}>
            {places?.map((place, i) => (
              <Grid item key={i} xs={12}>
                <Property property={{ coverPhoto: {url: place.imgSrc}, price: place.price, rentFrequency: place.rentZestimate, rooms: place.bedrooms, title: '', baths: place.bathrooms, area: place.livingArea, agency: '', isVerified: '', externalID: place.zpid, currency: place.currency, withShadow: true }} />
              </Grid>
            ))}
          </Grid> }
       
    </div>
   );
}

export default List;
