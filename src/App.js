import React from "react";
import Grid from "@material-ui/core/Grid";
import Alert from "@material-ui/lab/Alert";
import AlertTitle from "@material-ui/lab/AlertTitle";
import "./styles.css";
import sunAndCLoudUrl from "./img/sun-and-sky.png";
import moonAndStarUrl from "./img/moon-and-star.png";
import bulbLightOn from "./img/bulb-light-on.png";
import bulbLightOff from "./img/bulb-light-off.png";
import homeWithLightUrl from "./img/light-on.png";
import homeWithoutLightUrl from "./img/light-off.png";

const BddDemo = function() {
  const [myLight, setMyLight] = React.useState(false);
  const [myTime, setMyTime] = React.useState(true);

  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      spacing={3}
      className={myTime ? "day" : "night"}
    >
      <Grid item xs={12}>
        <Grid container spacing={5}>
          <Grid item sm={4}>
            <Grid item>
              <h1 className="banner-header">BDD Demo</h1>
            </Grid>
            <Grid item container direction="column" alignItems="flex-end">
              <h3>
                Change Context (GIVEN):{" "}
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={myTime}
                    test-data={myTime ? "day" : "night"}
                    onChange={event => {
                      setMyTime(event.target.checked);
                    }}
                  />
                  <span className="slider round" />
                </label>{" "}
                {/* Day */}
              </h3>
              <img
                src={myTime ? sunAndCLoudUrl : moonAndStarUrl}
                alt={myTime ? "Sun and cloud" : "moon and star"}
              />
              <p className="font-sty-italic">
                Maria reading the news papper in the {myTime} with light{" "}
                {myLight ? "on" : "off"}
              </p>
              <hr />
            </Grid>
            <Grid item container direction="column" alignItems="flex-end">
              <Grid item>
                <h3>
                  Trigger Action (WHEN):{" "}
                  <label className="switch">
                    <input
                      type="checkbox"
                      checked={myLight}
                      test-data={myLight ? "light-on" : "light-off"}
                      onChange={event => {
                        setMyLight(event.target.checked);
                      }}
                    />
                    <span className="slider round" />
                  </label>
                </h3>
              </Grid>
              <Grid item>
                <img
                  src={myLight ? bulbLightOn : bulbLightOff}
                  alt={myLight ? "Bulb light on" : "Bulb light off"}
                />
                <p className="font-sty-italic">Maria can perform this action</p>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm={8}>
            <img
              style={{ maxWidth: "500px" }}
              src={myLight ? homeWithLightUrl : homeWithoutLightUrl}
              alt="home"
            />
            <Grid container justify="center">
              <h2>
                <Alert
                  variant="filled"
                  icon={false}
                  severity={myTime || myLight ? "success" : "error"}
                  test-data={myTime || myLight ? "success" : "error"}
                >
                  <AlertTitle>Outcome (THEN):</AlertTitle>
                  Maria {myTime || myLight ? "can" : "can't"}{" "}
                  <strong>read the book</strong>{" "}
                </Alert>
              </h2>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

const Gherkins = () => (
  <Grid container direction="row" alignItems="center" spacing={3}>
    <Grid item xs={12}>
      <h1> </h1>
      <div>
        By{" "}
        <a href="https://twitter.com/anilbms75" target="_blank">
          @anilbms75
        </a>
        , for more details about the project refer on{" "}
        <a href="https://github.com/anilkk/bdd-cucumber-demo" target="_blank">
          Github
        </a>
        .
      </div>
    </Grid>
  </Grid>
);
export default function App() {
  return (
    <div className="App">
      <BddDemo />
      <Gherkins />
    </div>
  );
}
