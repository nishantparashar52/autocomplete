import React from 'react';
import { useApi } from '../hooks/useApi.ts';
export default function ListPage() {
    const { data, loading, error } = useApi('https://dummyjson.com/users')
    return (
        <div className='list_group'>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {data && data.users && data.users.map(user => {
            return (
                <div key={user.id} className='list'>
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                </div>
            )
        })}
        </div>

    )
}