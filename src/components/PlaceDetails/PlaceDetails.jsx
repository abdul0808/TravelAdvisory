import React from "react";
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip} from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';

import useStyle from './styles.js';


const PlaceDetails = ({place, selected, refProp}) => {
    const classes = useStyle();

    if(selected) refProp?.current?.scrollIntoView({ behaviour: "smooth", block: "start"})

    return (
       
        <Card elevation={6}>
        <CardMedia 
            style={{ height: 350 }}
            image={place.photo ? place.photo.images.large.url : 'https://www.smbceo.com/wp-content/uploads/2020/06/plating-500.jpg'}
            title={place.name}
        />
        <CardContent>
            <Typography gutterBottom variant="h5">{place.name}</Typography>
            <Box display="flex" justifyContent="space-between" my={2}>
            <Rating value={Number(place.rating)} readOnly/>
                <Typography gutterBottom variant="subtitle1">Out of {place.num_reviews} reviews</Typography>
            </Box>
            <Box display="flex" justifyContent="space-between" my={2}>
                <Typography variant="subtitle1">Price</Typography>
                <Typography gutterBottom variant="subtitle1">{place.price_level}</Typography>
            </Box>
            <Box display="flex" justifyContent="space-between">
                <Typography variant="subtitle1">Ranking</Typography>
                <Typography gutterBottom variant="subtitle2">{place.ranking}</Typography>
            </Box>
            {place?.awards?.map((award) => (
                <Box display="flex" justifyContent="space-between" my={1} alignItems="center">
                <img src={award.images.small} />
                <Typography variant="subtitle2" color="textSecondary">{award.display_name}</Typography>
                </Box>
                ))}
            {place?.cuisine?.map(({ name }) => (
                <Chip key={name} size="small" label={name} className={classes.chip}/>
            ))}
            {place?.address && (
                <Typography gutterBottom variant="subtitle2" color="textSecondary" className={classes.subtitle}>
                    <LocationOnIcon /> {place.address}
                </Typography>
            )}
            {place?.phone && (
                <Typography gutterBottom variant="subtitle2" color="textSecondary" className={classes.spacing}>
                    <PhoneIcon /> {place.phone}
                </Typography>
            )}
            <CardActions>
                <Button size="small" color="primary" onClick={() => window.open(place.web_url, '_blank')}>
                    Trip Advisor
                </Button>
                <Button size="small" color="primary" onClick={() => window.open(place.website, '_blank')}>
                    Website
                </Button>
            </CardActions>

        </CardContent>
        </Card>
    );
}

export default PlaceDetails;