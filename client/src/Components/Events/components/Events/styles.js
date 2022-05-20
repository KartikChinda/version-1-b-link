import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
    mainContainer: {
        display: 'flex',
        direction: 'row',
        justifyContent: 'start',
        alignItems: 'center',
    },
    smMargin: {
        margin: theme.spacing(1),
    },
    actionDiv: {
        textAlign: 'center',
    },
    break: {
        height: '40px',

    }

}));