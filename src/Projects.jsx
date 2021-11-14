import { makeStyles, Grid, Typography, Card, CardActionArea, CardHeader, CardContent, CardActions, Fade, Chip } from "@material-ui/core";
import { RepoIcon } from '@primer/octicons-react';

const useStyles = makeStyles(theme => ({
    cont: {
        minHeight: `calc(100vh - ${theme.spacing(4)}px)`,   // TODO: Mirar si esta en todos los components.
        paddingBottom: theme.spacing(10)
    },
    card: {
        height: '100%'
    },
    cardActionArea: {
        height: '100%',
    }
}));

export default function Projects({ projects }) {

    const classes = useStyles();

    return (
        <Grid container direction="row" justify="center" alignItems="center" spacing={10} className={classes.cont}>
            <Grid item xs={12} lg={6}>
                <Typography variant="h2" align="center">
                    Projects
                </Typography>
            </Grid>

            <Grid container item direction="row" xs={12} lg={6} spacing={1}>
            {
                    !!projects && projects.map((repo, i) =>
                        <Grid item sm={6} xs={12} key={i}>
                            <Card key={i} className={classes.card}>
                                <CardActionArea className={classes.cardActionArea} href={repo.value.html_url} target="_blank" rel="noopener noreferrer">
                                    <CardHeader
                                        title={<><RepoIcon verticalAlign='middle' /> {repo.value.name}</>}
                                    />
                                    <CardContent>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {repo.value.description.substring(0, repo.value.description.indexOf('.') + 1)}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Grid container direction="row" spacing={1}>
                                            {
                                                !!repo.value.languages &&
                                                repo.value.languages.map((lang, i) =>
                                                    <Grid item key={i}>
                                                        <Chip
                                                            key={i}
                                                            label={lang}
                                                            size="small"
                                                        />
                                                    </Grid>
                                                )
                                            }
                                        </Grid>
                                    </CardActions>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    )
                }
            </Grid>
        </Grid>
    )
}