import { makeStyles, useTheme, useMediaQuery, Grid, Typography, Zoom, Tooltip, Avatar } from '@material-ui/core'
import EducationTimeline from "../src/EducationTimeline"

const UseStyles = makeStyles(theme => ({
    cont: {
        minHeight: `calc(100vh - ${theme.spacing(4)}px)`,
        paddingBottom: theme.spacing(10)
    }
}))

export default function Education() {

    const classes = UseStyles();

    const theme = useTheme();

    const mdDown = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Grid container direction="row-reverse" justifyContent="center" alignItems="center" spacing={10} className={classes.cont} /*rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}*/>
            <Grid item xs={12} lg={6}>
                <Typography variant={mdDown ? "h3" : "h2"} gutterBottom align="center">
                    Education
                </Typography>
            </Grid>
            
            <Grid container item xs={12} lg={6} direction="column" spacing={1}>
                <EducationTimeline />
            </Grid>
        </Grid>
    )
}