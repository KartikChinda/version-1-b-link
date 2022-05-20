import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
    appBar: {
        borderRadius: 0,
        marginTop: '5px',
        padding: '15px',
        marginTop: '0',
        marginBottom: '30px',
        display: 'flex',
        flexDirection: 'row',
        background: '#fafafa',
        justifyContent: 'center',
        // alignItems: 'center',
    },
    heading: {
        color: 'rgba(0,0,0, 1)',
        fontFamily: 'Shizuru',
        paddingBottom: '3px',
        paddingTop: '10px'
    },
    image: {
        marginLeft: '15px',
        width: '140px'
    },
}));