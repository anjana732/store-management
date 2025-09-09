
import React, { useEffect, useState } from 'react';
import axios from '../services/api';

export default function StoreList({ token }) {
    const [stores, setStores] = useState([]);

    useEffect(() => {
        axios.get('/stores', { headers: { Authorization: `Bearer ${token}` } })
            .then(res => setStores(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="p-4 grid grid-cols-3 gap-4">
            {stores.map(store => (
                <div key={store.id} className="p-4 border rounded shadow">
                    <h3 className="font-bold">{store.name}</h3>
                    <p>{store.address}</p>
                    <p>Avg Rating: {store.avg_rating}</p>
                </div>
            ))}
        </div>
    );
}
