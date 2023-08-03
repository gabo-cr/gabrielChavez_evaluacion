import * as React from 'react';

import axios from 'axios';

import Stack from '@mui/material/Stack';

import Header from '../../components/header';
import List from '../../components/list';

import '../../styles/styles.css';

const USERS_TOTAL = 30;

const Home = () => {
    const [users, setUsers] = React.useState([]);
    const [total, setTotal] = React.useState(USERS_TOTAL);
    const [usersFiltered, setUsersFiltered] = React.useState([]);
    const [searchText, setSearchText] = React.useState([]);

    const loadData = async () => {
        return await axios.get('https://random-data-api.com/api/v2/users?response_type=json&size=' + USERS_TOTAL);
    };

    React.useEffect(() => {
        const response = loadData();
        response.then(res => {
            console.log(res.data);
            setUsers(res.data);
            setUsersFiltered(res.data);
        });
    }, []);

    const handleSearch = ({target}) => {
        setSearchText(target.value);
        let filteredUsers = users.filter(user => {
            const username = user.first_name.toLowerCase() + ' ' + user.last_name.toLowerCase(); 
            return username.includes(target.value.toLowerCase());
        });
        setTotal(filteredUsers.length);
        setUsersFiltered(filteredUsers);
    };
    
    return (
        <Stack spacing={2} className='content'>
            <Header onSearch={handleSearch} text={searchText} />
            <List data={usersFiltered} total={total} />
        </Stack>
    );
};

export default Home;
