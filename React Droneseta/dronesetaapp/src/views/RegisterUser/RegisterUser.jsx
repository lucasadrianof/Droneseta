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

function RegisterUser(props) {
    //
    //Implementação da lógica
    //
    const { classes } = props;
    return (
        <div>
            <Grid container>
                <GridItem xs={12} sm={12} md={4}></GridItem>
                <GridItem xs={12} sm={12} md={4}>
                    <Card>
                        <CardHeader color="primary">
                            <h4 className={classes.cardTitleWhite}>Dados Pessoais</h4>

                        </CardHeader>
                        <CardBody>
                            <Grid container>
                                <GridItem xs={12} sm={12} md={6}>
                                    <CustomInput
                                        labelText="Nome"
                                        id="nome"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={6}>
                                    <CustomInput
                                        labelText="CPF"
                                        id="city"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                    />
                                </GridItem>
                            </Grid>
                            <Grid container>
                                <GridItem xs={12} sm={12} md={12}>
                                    <CustomInput
                                        labelText="CPF"
                                        id="city"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                    />
                                </GridItem>
                            </Grid>

                        </CardBody>

                    </Card>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}></GridItem>

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
            <Grid container>
                <GridItem xs={12} sm={12} md={6}>
                    <Card>
                        <CardHeader color="primary">
                            <h4 className={classes.cardTitleWhite}>Endereço</h4>

                        </CardHeader>
                        <CardBody>
                            <Grid container>
                                <GridItem xs={12} sm={12} md={6}>
                                    <CustomInput
                                        labelText="Rua"
                                        id="rua"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={2}>
                                    <CustomInput
                                        labelText="Número"
                                        id="numero"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={4}>
                                    <CustomInput
                                        labelText="Complemento"
                                        id="complemento"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                    />
                                </GridItem>
                            </Grid>
                            <Grid container>
                                <GridItem xs={12} sm={12} md={6}>
                                    <CustomInput
                                        labelText="Bairro"
                                        id="bairro"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={6}>
                                    <CustomInput
                                        labelText="Cidade"
                                        id="cidade"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                    />
                                </GridItem>
                            </Grid>

                        </CardBody>
                    </Card>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                    <Card>
                        <CardHeader color="primary">
                            <h4 className={classes.cardTitleWhite}>Endereço de Entrega</h4>

                        </CardHeader>
                        <CardBody>
                            <Grid container>
                                <GridItem xs={12} sm={12} md={6}>
                                    <CustomInput
                                        labelText="Rua"
                                        id="rua"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={2}>
                                    <CustomInput
                                        labelText="Número"
                                        id="numero"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={4}>
                                    <CustomInput
                                        labelText="Complemento"
                                        id="complemento"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                    />
                                </GridItem>
                            </Grid>
                            <Grid container>
                                <GridItem xs={12} sm={12} md={6}>
                                    <CustomInput
                                        labelText="Bairro"
                                        id="bairro"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={6}>
                                    <CustomInput
                                        labelText="Cidade"
                                        id="cidade"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                    />
                                </GridItem>
                            </Grid>

                        </CardBody>
                    </Card>
                </GridItem>
            </Grid>
            <Grid container>
                <GridItem xs={12} sm={12} md={5}></GridItem>
                <GridItem xs={12} sm={12} md={2}>
                    <Card>
                        <CardFooter>
                        <Button color="primary" fullWidth onClick={function () {

                            // let url = "http://localhost:8080/JavaDroneseta/webresources/produtos/";
                            //
                            // let data = {
                            //     cpf: $('#inputCpf').val(),
                            //     nome: $('#inputNome').val(),
                            //     senha: $('#inputSenha').val(),
                            //     cartaoCredito: $('#inputCartao').val(),
                            //
                            //     endereco: {
                            //
                            //         rua: $('#inputRua').val(),
                            //         numero: $('#inputNumero').val(),
                            //         complemento: $('#inputComplemento').val(),
                            //         bairro: $('#inputBairro').val(),
                            //         cidade: $('#inputCidade').val()
                            //
                            //     },
                            //
                            //     enderecoEntrega: {
                            //
                            //         rua: $('#inputRuaEntrega').val(),
                            //         numero: $('#inputNumeroEntrega').val(),
                            //         complemento: $('#inputComplementoEntrega').val(),
                            //         bairro: $('#inputBairroEntrega').val(),
                            //         cidade: $('#inputCidadeEntrega').val()
                            //
                            //     }
                            //
                            // };
                            //
                            // fetch(url, {
                            //     headers: {
                            //         'Accept': 'application/json',
                            //         'Content-Type': 'application/json'
                            //     },
                            //     method: "POST",
                            //     body: JSON.stringify(data)
                            // });

                        }}>Cadastrar</Button>
                        </CardFooter>
                    </Card>
                </GridItem>
                <GridItem xs={12} sm={12} md={5}></GridItem>
            </Grid>
        </div>
    );
}

export default withStyles(styles)(RegisterUser);
