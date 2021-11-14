import { makeStyles, Grid, Typography, Avatar } from "@material-ui/core";
import Image from "next/image";
import { about } from "../data.json";

const useStyles = makeStyles(theme => ({
    cont: {
        minHeight: `calc(100vh - ${theme.spacing(4)}px)`,
        alignSelf: 'center',
        justifySelf: 'center',
        paddingBottom: theme.spacing(10)
    },
    dp: {
        height: theme.spacing(50),
        width: theme.spacing(50),
    },
}));

export default function About() {
    
    const classes = useStyles();

    return (
        <Grid container direction="row" justifyContent="center" alignItems="center" spacing={10} className={classes.cont}>
            <Grid item xs={12} lg={6}>
                <Typography variant="h2" gutterBottom component="p" align="right">
                    About me
                </Typography>
                <Typography variant="h6" align="right">
                    {about.text}
                </Typography>
            </Grid>

            <Grid container item xs={12} lg={6} justifyContent="center" alignItems="center">
                <Avatar variant="rounded" className={classes.dp} align="center">
                    <Image
                        alt="Display Picture"
                        src={about.image}
                        layout="fill"
                    />
                </Avatar>
            </Grid>
        </Grid>
    )
}