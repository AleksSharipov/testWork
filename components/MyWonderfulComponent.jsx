import Head from 'next/head';
import React, { useState, useEffect } from "react";
import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';

import { Grid } from '@mui/material';

const useStyles = makeStyles(() => ({
  wrapper: {
    maxWidth: 1200,
    width: '100%',
    margin: '20px auto 0'
  },
  titleColor: {
    color: 'red'
  }
}))

export default function MyWonderfulComponent({ id, options, children, count, str }) {
  const classes = useStyles();

  const [sum, setSum] = useState(count);

  useEffect(() => {
    if (id && options && options.params && options.params.fields && options.params.fields.isDynamic) {
      setSum(sum + 1); //prev
    }
  }, []);

  return (
    <section className={classes.wrapper}>
      <Head>
        <title>My wonderful component</title>
      </Head>
      <Typography variant="h1" className={classes.titleColor}>Hello World!</Typography>
      <Grid container >
        <Grid item xs={12}>
          <Typography paragraph={true}>{children}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography paragraph={true}>{sum}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography paragraph={true}>{str}</Typography>
        </Grid>
      </Grid>
    </section>
  );
}