import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import Grid from '@material-ui/core/Grid';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';

class HospitalLocator extends React.Component{
    render(){
        return(
            <>
                <Grid Container>
                    <Grid item xs={12} sm={12} md={12} lg={12} style={{textAlign:'center'}}>
                        <FormControl component="fieldset">
                        <RadioGroup row aria-label="position" name="position" defaultValue="top">
        
                        <FormControlLabel style={{marginTop:'7%'}}
                            value="Use current location"
                            control={<Radio color="primary" />}
                            label="Use current location"
                            labelPlacement="Use current location"
                        />
                        
                        <FormControlLabel style={{marginTop:'7%'}}
                            value="Use customized location"
                            control={<Radio color="primary" />}
                            label="Use customized location"
                            labelPlacement="Use customized location"
                        />

                        </RadioGroup>
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid container spacing ={0.5} style={{marginTop:'1%'}}>
                    <Grid item xs={9} sm={9} md={9} lg={9} style={{textAlign:'right'}} >
                    <TextField
                        style={{width:"60%",marginRight:"3%"}}
                        label="Pincode/Location"
                        id="filled-size-small"
                        defaultValue=""
                        variant="filled"
                        size="small"
                    />
                    </Grid>
                    <Grid item xs={3} sm={3} md={3} lg={3}>
                    <Button style={{marginTop:'1%'}}
                        variant="contained"
                        color="secondary"
                        startIcon={<SearchIcon />}
                    >
                        Search
                    </Button>
                    </Grid>
                </Grid>
            </>
        )
    }
}

export default HospitalLocator;