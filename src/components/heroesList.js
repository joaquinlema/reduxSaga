import { Box, Grid } from '@mui/material';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getAllHeroes, getHeroebyId, setLoading } from '../actions/heroes';
import HeroeCard from './heroeCard';

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
        <Box sx={{
            m: '2px',
            backgroundColor: 'primary.dark',
        }} >
            <Grid container spacing={2}>
                {heroes.length > 0 && heroes.map((heroe, index) => (
                    <Grid item key={index} xs={3}>
                        <HeroeCard
                            data={heroe}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default HeroesList;