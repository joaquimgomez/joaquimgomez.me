import { useTheme, useMediaQuery, Grid, Typography, Avatar, Hidden, Fade, makeStyles } from "@material-ui/core"
import { landing } from "../data.json"
import Image from "next/image"
import ReactTyped from "react-typed"
import simpleIcons from 'simple-icons'
import { iconify } from "./utils";
import Cancel from "@material-ui/icons/Cancel";
import clsx from "clsx";

const contactOptions = landing.contactOptions.map(({ icon, alt, link }) => {
    const iconified = simpleIcons.get(iconify(icon)) || {
        hex: '424242',
        component: <Cancel color="white" fontSize={36} />
    }
    return {
        icon: iconified.component || <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" height="100%" width="100%" xmlnsXlink="http://www.w3.org/1999/xlink">
                                <title>{icon}</title>
                                <path d={iconified.path} fill="white" />
                                </svg>,
        backgroundColor: '#' + iconified.hex,
        alt,
        link
    }
})

let iobj = {}
contactOptions.forEach(({ alt, backgroundColor }) => {
    iobj[alt] = { backgroundColor }
})

const useStyles = makeStyles(theme => ({
    cont: {
        minHeight: `calc(100vh - ${theme.spacing(4)}px)`,
        paddingBottom: theme.spacing(10)
    },
    subtitle: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(5)
    },
    avatar: {
        height: theme.spacing(8),
        width: theme.spacing(8),
        padding: theme.spacing(2)
    },
    ...iobj
}))

export default function Landing() {

    const classes = useStyles();

    const theme = useTheme();

    const mdDown = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Grid container justifyContent="center" alignItems="center" className={classes.cont} /*style={{ height: "100vh" }}*/>
            <Grid item xs={12} lg={6}>
                <Typography variant={mdDown ? "h2" : "h1"}>
                    {landing.title}
                </Typography>
                <Typography variant={mdDown ? "h5" : "h4"} component="h2" className={classes.subtitle}>
                    <ReactTyped 
                        strings={landing.subtitles}
                        typeSpeed={40}
                        backSpeed={50}
                        loop
                    />
                </Typography>
                <Grid container direction="row" spacing={2}>
                    {
                        contactOptions.map(({ icon, alt, link }, i) => 
                            <Grid item key={i}>
                                <a href={link} target="_blank" rel="noopener noreferrer">
                                    <Avatar variant="rounded" className={clsx([classes.avatar, classes[alt]])}>
                                        {icon}
                                    </Avatar>
                                </a>
                            </Grid>
                        )
                    }
                </Grid>
            </Grid>

            {/*<Hidden mdDown>
                <Fade in={true} style={{ transitionDelay: '100ms'}}>
                    <Grid item lg={6}>
                        <Image 
                            src={landing.image}
                            alt="Photo of Joaquim"
                            width="300"
                            height="200"
                        />
                    </Grid>
                </Fade>
            </Hidden>*/}
        </Grid>
    )
}