import { makeStyles, useTheme, useMediaQuery, Grid, Typography, Zoom, Tooltip, Avatar } from '@material-ui/core'
import Cancel from "@material-ui/icons/Cancel";
import clsx from "clsx";
import simpleIcons from 'simple-icons'
import { skills } from '../data.json'
import { iconify } from "./utils";

const wrapper = (sk = []) => sk.map(v => {
    const iconified = simpleIcons.get(typeof v === "string" ? iconify(v) : iconify(v.icon)) || {
        title: v,
        hex: '424242',
        component: <Cancel />
    }
    return {
        alt: v.alt || v || iconified.title,
        backgroundColor: v.backgroundColor || ('#' + iconified.hex),
        icon: iconified.component || <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" height="100%" width="100%" xmlnsXlink="http://www.w3.org/1999/xlink">
            <title>{iconified.title}</title>
            <path d={iconified.path} fill="white" />
        </svg>,
    }
})

let wrappedSkills = {}
Object.getOwnPropertyNames(skills).forEach(type => {
    wrappedSkills[type] = wrapper(skills[type])
})

let iobj = {}
Object.values(wrappedSkills).forEach(oarr => {
    oarr.forEach(({ backgroundColor, alt }) => {
        iobj[alt] = { backgroundColor }
    })
})

const UseStyles = makeStyles(theme => ({
    cont: {
        minHeight: `calc(100vh - ${theme.spacing(4)}px)`,
        paddingBottom: theme.spacing(10)
    },
    skobj: {
        marginBottom: theme.spacing(4)
    },
    avatar: {
        height: theme.spacing(7),
        width: theme.spacing(7),
        padding: theme.spacing(1.5)
    },
    ...iobj
}))

export default function Skills() {

    const classes = UseStyles();

    const theme = useTheme();

    const mdDown = useMediaQuery(theme.breakpoints.down('sm'));

    const alignSkills = mdDown ? 'center' : 'flex-end';

    const textAlign = mdDown ? "center" : "right"

    return (
        <Grid container justifyContent="center" alignItems="center" spacing={10} className={classes.cont} /*rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}*/>
            <Grid item xs={12} lg={6}>
                <Typography variant={mdDown ? "h3" : "h2"} gutterBottom align="center">
                    Skills
                </Typography>
            </Grid>
            
            <Grid container item xs={12} lg={6} direction="column" alignItems={alignSkills} spacing={1}>
                {
                    Object.getOwnPropertyNames(wrappedSkills).map((title, id) =>
                        <Grid item key={id} className={classes.skobj}>
                            <Typography variant="h4" align={textAlign} gutterBottom component="p">
                                {title}
                            </Typography>
                            <Grid container item direction="row" spacing={1} justifyContent="center">
                                {
                                    wrappedSkills[title].map(({ icon, alt }, i) =>
                                        <Grid item key={i}>
                                            <Tooltip title={alt.replace("_", " ")} placement="top">
                                                <Avatar variant="rounded" className={clsx([classes.avatar, classes[alt]])}>
                                                    {icon}
                                                </Avatar>
                                            </Tooltip>
                                        </Grid>
                                    )
                                }
                            </Grid>
                        </Grid>
                    )
                }
            </Grid>
        </Grid>
    )
}