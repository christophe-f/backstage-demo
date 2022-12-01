import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  svg: {
    width: 'auto',
    height: 28,
  },
  path: {
    fill: '#7df3e1',
  },
});

const LogoIcon = () => {
  const classes = useStyles();

  return (
      <svg
          viewBox="0 0 192 145"
          xmlns="http://www.w3.org/2000/svg"
          data-name="Layer 1"
          className={classes.svg}
      >
        <path d="M157.77 62.61a14 14 0 01.31 3.42c0 14.88-18.1 17.46-30.61 17.46-48.64 0-84.94-30.23-84.94-39.49a6.43 6.43 0 01.22-1.94l-3.66 9.06a18.45 18.45 0 00-1.51 7.33c0 18.11 41 45.48 87.74 45.48 20.69 0 36.43-7.76 36.43-21.77 0-1.08 0-1.94-1.73-10.13z" />
        <path
            d="M127.47 83.49c12.51 0 30.61-2.58 30.61-17.46a14 14 0 00-.31-3.42l-7.45-32.36c-1.72-7.12-3.23-10.35-15.73-16.6C124.89 8.69 103.76.5 97.51.5 91.69.5 90 8 83.06 8c-6.68 0-11.64-5.6-17.89-5.6-6 0-9.91 4.09-12.93 12.5 0 0-8.41 23.72-9.49 27.16a6.43 6.43 0 00-.22 1.94c0 9.22 36.3 39.45 84.94 39.45M160 72.07c1.73 8.19 1.73 9.05 1.73 10.13 0 14-15.74 21.77-36.43 21.77-46.76.03-87.72-27.37-87.72-45.48a18.45 18.45 0 011.51-7.33C22.27 52 .5 55 .5 74.22c0 31.48 74.59 70.28 133.65 70.28 45.28 0 56.7-20.48 56.7-36.65 0-12.72-11-27.16-30.83-35.78"
            fill="#e00"
        />
      </svg>
  );
};

export default LogoIcon;
