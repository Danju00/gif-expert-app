import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";



export const useFechGifs = (category) =>{
    
    const [state, setState] = useState({
        data:[],
        loading: true
    });

    useEffect(() => {

        
        getGifs(category)
        .then(imgs => {

            setTimeout(() => {

                console.log(imgs);

                setState ({
                data: imgs,
                loading: false
            });

            }, 300);
            
        })


    }, [category])


    




    return state; // {data:[], loading: true};
    }
