import * as React from 'react';

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';

import User from './user';

const USERS_BY_PAGE = 6;

const List = ({ data, total }) => {
    
    const [page, setPage] = React.useState(1);
    const [start, setStart] = React.useState(0);
    const [end, setEnd] = React.useState(USERS_BY_PAGE);

    React.useEffect(() => {
        setPage(1);
        setStart(0);
        setEnd(USERS_BY_PAGE);
    }, [data]);

    const handleChange = (event, page) => {
        setPage(page);
        setStart((page-1)*USERS_BY_PAGE);
        setEnd(((page-1)*USERS_BY_PAGE + USERS_BY_PAGE) > total ? total : (page-1)*USERS_BY_PAGE + USERS_BY_PAGE);
    };

    return (
        <Stack spacing={2} className='content'>
            { data.length > 0 &&
                <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 3, md: 3 }}>
                    { 
                        data
                        .slice(start, end)
                        .map(user => {
                            return <User user={user} />;
                        })
                    }
                </Grid>
            }
            <Pagination 
                count={Math.ceil(total / USERS_BY_PAGE)} 
                page={page}
                onChange={handleChange}
                variant="outlined" 
                shape="rounded" 
                className='paginator'/>
        </Stack>
    );
};

export default List;
