import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import Base from '../common/base-common';
import RideAPI from '../api/RideAPI';
import Distance from './Distance';
import Duration from './Duration';
import Price from './Price';

const Ride = () => {
    // Example ride ID
    const rideIdToShow = 1;
    const initialRide = {
        id: null,
        name: '',
        status: 'new',
        distance: 0,
        duration: 0,
        startTime: ''
    };
    const [ride, setRide] = useState(initialRide);
    const [price, setPrice] = useState(0);

    const handleStart = () => {
        RideAPI.create([])
        .then(response => {
            setRide({
                id: response.data.id,
                name: response.data.name,
                status: response.data.status,
                distance: response.data.distance,
                duration: response.data.duration,
                startTime: response.data.startTime,
            });
        })
        .catch(e => {
            // todo
        });
    }

    const handleCancel = () => {
        if (ride.id) {
            RideAPI.remove(ride.id)
            .then(response => {
                setRide(initialRide);
                setPrice(0)
            })
            .catch(e => {
                // todo
            });
        }
    }

    const handleEnd = () => {
        if (ride.id) {
            // todo : set status to done
        }
    }

    const handleShow = () => {
        RideAPI.get(rideIdToShow)
        .then(response => {
            setRide({
                id: response.data.id,
                name: response.data.name,
                status: response.data.status,
                distance: response.data.distance,
                duration: response.data.duration,
                startTime: response.data.startTime,
            });
        })
        .catch(e => {
            // todo
        });
    }

    useEffect(() => {
        if (ride.id) {
            RideAPI.getPrice(ride.id)
            .then(response => {
                setPrice(response.data.price);
            })
            .catch(e => {
                // todo
            });
        }
    }, [ride])

    return (
        <div className='Ride'>
            <p>Ride n° {ride.id} started at :<i> {Base.foramtDate(ride.startTime)}</i></p>
            <div className='form-row'>
                <Price value={price} />
                <Distance value={ride.distance} />
                <Duration value={ride.duration} />
            </div>

            <div className='buttons text-center'>
                <Button variant='primary' onClick={handleStart}>
                    Start
                </Button>
                <Button variant='danger' onClick={handleCancel}>
                    Cancel
                </Button>
                <Button variant='success' onClick={handleEnd}>
                    End
                </Button>
                <Button variant='info' onClick={handleShow}>
                    Show
                </Button>
            </div>
        </div>
    );
}

export default Ride;
