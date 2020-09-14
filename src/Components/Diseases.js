import React from 'react';

//Material UI
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

//Images
import Image1 from '../Images/Image1.jpg';
import Image2 from '../Images/Image2.jpg';
import Image3 from '../Images/Image3.jpg';
import Image4 from '../Images/Image4.jpg';

//Imported

const useStyles = ()=>({
    cardClass: {
      width:'90%'
    },
    media: {
      height: 140,
    }
});

class Diseases extends React.Component{

    state={
        images:[
            {name:'Cancer',imagePath:Image1,description:'Cancer is a group of diseases involving abnormal cell growth with the potential to invade or spread to other parts of the body. These contrast with benign tumors, which do not spread.'},
            {name:'Covid-19',imagePath:Image2,description:'Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus. Protect yourself and others from infection by washing hands using an alcohol'},
            {name:'Tuberculosis',imagePath:Image3,description:'Tuberculosis (TB) is an infectious disease caused by Mycobacterium tuberculosis bacteria. Tuberculosis generally affects the lungs, but can also affect other parts of the body.'},
            {name:'Jaundice',imagePath:Image4,description:'Jaundice is a condition in which the skin, whites of the eyes and mucous membranes turn yellow because of a high level of bilirubin, a yellow-orange bile pigment.'}
        ]
    }

    render(){
        const { classes } = this.props;
        return(
            <Grid container spacing={3}>
                {this.state.images.map( (ele,index)=>{
                    return(
                        <Grid item xs ={6} sm ={6} md={6} lg={4} key={index}>
                            <Card className={classes.cardClass}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image={ele.imagePath}
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {ele.name}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {ele.description}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        Share
                                    </Button>
                                    <Button size="small" color="primary">
                                        Learn More
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                )
    })}
            </Grid>
)};

}

export default withStyles(useStyles)(Diseases); 