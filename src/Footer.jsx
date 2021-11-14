import { makeStyles, useTheme, AppBar, Container, Toolbar, Typography } from '@material-ui/core';
import { footer } from "../data.json"

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    appBar: {
        boxShadow: 'none',
        alignItems: 'center'
    },
    text: {
        width: '100%',
        alignItems: 'center'
    }
}));

export default function Footer() {

    const classes = useStyles();

    const theme = useTheme();

    return (
        <div className={classes.root}>
            <AppBar position="static" color="transparent" className={classes.appBar}>
                <Container maxWidth="md">
                    <Toolbar>
                        <Typography variant="body1" color="inherit" gutterBottom align="center" className={classes.text}>
                            {footer.text}
                        </Typography>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>  
    )
}