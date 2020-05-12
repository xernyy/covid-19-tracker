import React, {useState, useEffect} from 'react';
import {NativeSelect, FormControl} from '@material-ui/core';
import styles from './CountryPicker.module.css'
import {fetchCountries} from '../../api';

const CountryPicker = ({handleCountryChange}) => {
    const [fetchCountry, setFetchedCountries]= useState([]);

    useEffect(()=>{
        const fetchAPI= async()=>{
            setFetchedCountries(await fetchCountries());
        }
        fetchAPI();
    }, []);
    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e)=>handleCountryChange(e.target.value)}>
                <option value="global">Global</option>
                {fetchCountry.map((country, i)=><option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    );
};

export default CountryPicker;