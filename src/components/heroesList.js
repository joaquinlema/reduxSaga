import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getAllHeroes, getHeroebyId, setLoading } from '../actions/heroes';

const HeroesList = () => {

    const dispatch = useDispatch();
    const { heroes, loading } = useSelector(state => state.hereoReducer);

    useEffect(() => {
        dispatch(setLoading());
        dispatch(getAllHeroes());
        // dispatch(getHeroebyId(1));
    }, [dispatch]);

    if (loading) return <span> ---Loading---</span>

    return (
        <ul>
            {heroes.length > 0 && heroes.map((heroe, index) => (
                <li key={index}> {heroe.name} </li>
            ))}
        </ul>
    )
}

export default HeroesList;