import React, { FC } from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { AccessAlarm, Delete } from "@material-ui/icons";

import { TestCompoProp } from "../../types/personalType";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      maxWidth: 500
    },
    button: {
      margin: theme.spacing(1)
    }
  })
);

const TestCompo: FC<TestCompoProp> = ({ coolname, youngage }: TestCompoProp) => {
  // notices props must have exact same name as in type when des ass
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h6" gutterBottom>
        Hello there {coolname} at {youngage} years old. If see this, Material UI is running OK, icons included.
        <AccessAlarm></AccessAlarm>
      </Typography>
      <Button variant="contained" color="secondary" className={classes.button} startIcon={<Delete />}>
        Delete
      </Button>
    </div>
  );
};

export default TestCompo;
