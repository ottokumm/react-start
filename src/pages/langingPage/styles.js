import { createStyles, makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles(() => {
  return createStyles({
      logo: {
          width: '100px',
          height: '100px',
      },
      link: {
          textDecoration: 'none',
      }
  });
});
