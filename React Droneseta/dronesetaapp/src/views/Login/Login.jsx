import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import avatar from "assets/img/faces/marc.jpg";

const styles = {
    cardCategoryWhite: {
        color: "rgba(255,255,255,.62)",
        margin: "0",
        fontSize: "14px",
        marginTop: "0",
        marginBottom: "0"
    },
    cardTitleWhite: {
        color: "#FFFFFF",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none"
    }
};



function Login(props) {

    //
    //Implementação da lógica
    //
    const { classes } = props;
    return (
        <div>
            <Grid container>
                <GridItem xs={12} sm={12} md={4}>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                    <Card>
                        <CardHeader color="primary">
                            <h4 className={classes.cardTitleWhite}>Login</h4>

                        </CardHeader>
                        <CardBody>
                            <Grid container>
                                <GridItem xs={12} sm={12} md={12}>
                                    <CustomInput
                                        labelText="Login: CPF"
                                        id="username"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                    />
                                </GridItem>
                            </Grid>
                            <Grid container>
                                <GridItem xs={12} sm={12} md={12}>
                                    <CustomInput
                                        labelText="Senha"
                                        id="city"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                    />
                                </GridItem>
                            </Grid>

                        </CardBody>
                        <CardFooter>
                            <Button color="primary">Logar</Button>
                        </CardFooter>
                    </Card>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                </GridItem>
                {/*<GridItem xs={12} sm={12} md={4}>*/}
                {/*<Card profile>*/}
                {/*<CardAvatar profile>*/}
                {/*<a href="#pablo" onClick={e => e.preventDefault()}>*/}
                {/*<img src={avatar} alt="..." />*/}
                {/*</a>*/}
                {/*</CardAvatar>*/}
                {/*<CardBody profile>*/}
                {/*<h6 className={classes.cardCategory}>CEO / CO-FOUNDER</h6>*/}
                {/*<h4 className={classes.cardTitle}>Alec Thompson</h4>*/}
                {/*<p className={classes.description}>*/}
                {/*Don't be scared of the truth because we need to restart the*/}
                {/*human foundation in truth And I love you like Kanye loves Kanye*/}
                {/*I love Rick Owens’ bed design but the back is...*/}
                {/*</p>*/}
                {/*<Button color="primary" round>*/}
                {/*Follow*/}
                {/*</Button>*/}
                {/*</CardBody>*/}
                {/*</Card>*/}
                {/*</GridItem>*/}
            </Grid>
        </div>
    );
}

export default withStyles(styles)(Login);
