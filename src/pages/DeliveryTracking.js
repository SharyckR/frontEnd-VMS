import React, { useEffect } from 'react';
import JeepImage from "./images/Jeep.jpg"

const DeliveryTracking = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBDaeWicvigtP9xPv919E-RNoxfvC-Hqik&callback=iniciarMap`;
        script.async = true;
        document.body.appendChild(script);

        window.iniciarMap = () => {
            const coord1 = { lat: 10.311341555899427, lng: -75.40267533114935 };
            const coord2 = { lat: 4.689099, lng: -74.039432 };

            const map = new window.google.maps.Map(document.getElementById('map'), {
                zoom: 10,
                center: coord1
            });

            const marker1 = new window.google.maps.Marker({
                position: coord1,
                map: map,
                icon: {
                    url: 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png'
                }
            });

            const marker2 = new window.google.maps.Marker({
                position: coord2,
                map: map,
                icon: {
                    url: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png'
                }
            });

            const infoWindow1 = new window.google.maps.InfoWindow({
                content: 'Tu dirección actual'
            });
            marker1.addListener('click', () => {
                infoWindow1.open(map, marker1);
            });

            const infoWindow2 = new window.google.maps.InfoWindow({
                content: 'Dirección del destinatario'
            });
            marker2.addListener('click', () => {
                infoWindow2.open(map, marker2);
            });
        };

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className='container' style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
            <div className='left-content'>
                <h2>Product</h2>
                <img src={JeepImage} alt="Jeep" width='250px' height='200px' style={{borderRadius: '7px'}}/>
                <div>
                    <p>Delivery ID: { }</p>
                    <p>Price: { }</p>
                </div>
                <div>
                    <p>Buyer Information: ------------------------------------</p>
                    <p>Conveyor Information: --------------------------------</p>
                </div>
            </div>
            <div className='right-content'>
                <h2> Delivery Tracking </h2>
                <div className='Img-Container'>
                    <div id="map" style={{ height: '400px' }}></div>

                </div>
            </div>
        </div>
    );
};

export default DeliveryTracking;
