import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
    mainContainer: {
        display: 'flex',
        direction: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    smMargin: {
        margin: theme.spacing(1),
    },
    actionDiv: {
        textAlign: 'center',
    },

}));