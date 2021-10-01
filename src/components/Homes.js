import React, { useEffect, useState } from 'react'
import apiClient from '../services/apiClient'

const Homes = () => {


    const [homesState, setHomesState] = useState([])

    useEffect(() => {

        const homesDataPromise = apiClient.getHomes()
        // const homesDataPromise = Promise.resolve([
        //     {
        //         title: "Test home 1",
        //         image: 'banner.jpg',
        //         location: 'Test location 1',
        //         price: '1',
        //     },
        //     {
        //         title: "Test home 2",
        //         image: 'banner.jpg',
        //         location: 'Test location 2',
        //         price: '2',
        //     },
        //     {
        //         title: "Test home 3",
        //         image: 'banner.jpg',
        //         location: 'Test location 3',
        //         price: '3',
        //     },
        // ]);

        homesDataPromise.then(homesData => setHomesState(homesData))
    }, [])

    let homes;


    homes = homesState.map((home, i) => {
        return (
            <div data-testid='home' key={i}>Home!</div>
        )
    })
    return (
        <div>
            {homes}
        </div>
    )
}

export default Homes
