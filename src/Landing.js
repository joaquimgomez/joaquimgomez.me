import { Grid, Typography } from "@material-ui/core"
import { landing } from "../data.json"
import ReactTyped from "react-typed"

export default function Landing() {

    return (
        <Grid container justify="center" alignItems="center" /*style={{ height: "100vh" }}*/>
            <Grid item xs={12}>
                <Typography variant="h1">
                    {landing.title}
                </Typography>
                <Typography variant="h4">
                    <ReactTyped 
                        strings={landing.subtitles}
                        typeSpeed={40}
                        backSpeed={50}
                        loop
                    />
                </Typography>
            </Grid>
        </Grid>
    )
}