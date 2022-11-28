import {configureStore} from '@reduxjs/toolkit';
import Cartreducers from './slice';

const store = configureStore({
    reducer : {
        CartRes : Cartreducers
    }
});


export default store;