import React from 'react'
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function LinearProgressWithLabel(props) {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: '100%', mr: 1 }}>
                <LinearProgress variant="determinate" {...props} />
            </Box>
            <Box sx={{ minWidth: 35 }}>
                <Typography variant="body2" color="text.secondary">{`${Math.round(
                    props.value,
                )}%`}</Typography>
            </Box>
        </Box>
    );
}

LinearProgressWithLabel.propTypes = {
    value: PropTypes.number.isRequired,
};

const Progress = () => {
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {

        setProgress((prevProgress) => (prevProgress === 100 ? 10 : prevProgress + 10));


    }, []);

    return (
        <Box sx={{ width: '90%' }}>
            <LinearProgressWithLabel value={progress} />
        </Box>
    );
}
export default Progress;