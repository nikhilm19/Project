import React from 'react';
//Material UI
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import SimpleImageSlider from "react-simple-image-slider";

//Imported
import Image1 from '../Images/Image1.jpg';
import Image2 from '../Images/Image2.jpg';
import Image3 from '../Images/Image3.jpg';
import Image4 from '../Images/Image4.jpg';

class Home extends React.Component{
    render(){

        const images = [
            {
                url :Image1
            },
            {   url :Image2
            },
            {   url :Image3
            },
                {url :Image4
            }  
        ]

        return(
            <div>
                <Grid container>
                    <Grid item xs={8} sm={8} md={8} lg={8}>
                        <SimpleImageSlider
                        width={896}
                        height={504}
                        images={images}
                    />
                    </Grid>
                    <Grid item xs={4} sm={4} md={4} lg={4}>
                        yoyoyo
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Typography paragraph>
                            c smaaaaaaaaaaaaaaaaaanklncljdsnlcsdkckdsnckldnsckdsnk dk kd ncldskcdkl
                        </Typography>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default Home;