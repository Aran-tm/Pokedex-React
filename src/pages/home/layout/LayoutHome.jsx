import axios from 'axios'
import { URL_POKEMON } from '../../../api/apiRest'
import { useEffect } from 'react'

const LayoutHome = () => {

    {/** Calling PokeApi with Axios Library */ }
    useEffect(() => {
    
        const api = async () => {

            const pokeApi = await axios.get(`${URL_POKEMON}`);
            console.log(pokeApi);
        }

         // caliing const 
        api();
    }, [])  

    return (
        <>
            <h1>Layout Home</h1>
        </>
    )
}

export default LayoutHome
