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

const QuayIcon = () => {
  const classes = useStyles();

  return (
      <svg
          viewBox="0 0 256 236"
          xmlns="http://www.w3.org/2000/svg"
          data-name="Layer 1"
          className={classes.svg}
      >
        <path
            d="M200.134 0l55.555 117.514-55.555 117.518h-47.295l55.555-117.518L152.84 0h47.295zM110.08 99.836l20.056-38.092-2.29-8.868L102.847 0H55.552l48.647 102.898 5.881-3.062zm17.766 74.433l-17.333-39.034-6.314-3.101-48.647 102.898h47.295l25-52.88v-7.883z"
            fill="#40B4E5"
        />
        <path
            d="M152.842 235.032L97.287 117.514 152.842 0h47.295l-55.555 117.514 55.555 117.518h-47.295zm-97.287 0L0 117.514 55.555 0h47.296L47.295 117.514l55.556 117.518H55.555z"
            fill="#003764"
        />
      </svg>
  );
};

export default QuayIcon;
