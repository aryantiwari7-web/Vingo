import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { serverUrl } from '../App'


function useGetCurrentUser() {
    const [user,setUser]=useState('null');
    try {
        useEffect(() => {
            const feachUser = async () => {
                try {
                    const result = await axios.get(`${serverUrl}/api/user/current`, { withCredentials: true });
                    setUser(result);
                } catch (error) {
                    console.log(error);
                }
            }
            feachUser();
        }, []);

    } catch (error) {
        console.log(error);
    }
    return user;
}

export default useGetCurrentUser;