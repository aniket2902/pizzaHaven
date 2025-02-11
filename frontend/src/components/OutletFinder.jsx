import React, { useState, useEffect } from "react";
import axios from "axios";

const AddressPopup = ({ onClose, onSelect }) => {
    const [error, setError] = useState("");

    const handleUseCurrentLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const { latitude, longitude } = position.coords;

                    try {
                        const response = await axios.get(
                            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
                        );
                        const userAddress = response.data.display_name;
                        onSelect(latitude, longitude, userAddress);
                    } catch (error) {
                        setError("Failed to fetch address");
                    }
                },
                () => {
                    setError("Geolocation permission denied");
                }
            );
        } else {
            setError("Geolocation not supported by this browser");
        }
    };

    const [city, setCity] = useState("");

    const handleCitySubmit = async () => {
        try {
            const response = await axios.get(
                `https://nominatim.openstreetmap.org/search?format=json&q=${city}`
            );
            if (response.data.length > 0) {
                const { lat, lon, display_name } = response.data[0];
                console.log(lat,lon,display_name);
                onSelect(lat, lon, display_name);
            } else {
                setError("City not found");
            }
        } catch (error) {
            setError("Failed to fetch city coordinates");
        }
    };

    return (
        <div
            style={{
                position: "fixed",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(0, 0, 0, 0.42)",
                zIndex: 1000,
            }}
        >
            <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
                <button className="absolute top-2 right-2 text-gray-500" onClick={onClose}>X</button>
                <button className="w-full bg-green-500 text-white p-2 rounded" onClick={handleUseCurrentLocation}>
                    Use My Current Location
                </button>
                <input
                    type="text"
                    className="w-full mt-4 p-2 border rounded"
                    placeholder="Enter your city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <button className="w-full bg-blue-500 text-white p-2 rounded mt-2" onClick={handleCitySubmit}>
                    Use This City
                </button>
                {error && <p className="text-red-500 mt-2">{error}</p>}
            </div>
        </div>
    );
};

const OutletFinder = () => {
    const [showPopup, setShowPopup] = useState(true);
    const [outlet, setOutlet] = useState(null);
    const [selectedAddress, setSelectedAddress] = useState(null);
    const [ifAddress,setIfAddress]=useState(localStorage.getItem("outlet")?true:false); 
    const handleAddressSelect = (latitude, longitude, address) => {
        setSelectedAddress(address);
        setShowPopup(false);
        //debugger;
        axios
            .get("http://localhost:8081/outlet/nearest", {
                params: { latitude, longitude },
            })
            .then((response) => {
                let newOutlet=response.data.address;
                setOutlet(newOutlet);
                console.log("Location",newOutlet.city,selectedAddress);
                localStorage.setItem("outlet",JSON.stringify(newOutlet));
            })
            .catch(() => {
                alert("Error fetching Outlet data");
            });
    };

    useEffect(() => {
        if (outlet) {
            console.log("Updated Outlet:", outlet);
        }
    }, [outlet]);

    useEffect(() => {
        if (selectedAddress) {
            console.log("Updated Outlet:", selectedAddress);
        }
    }, [selectedAddress]);

    return (
        <>
        {!ifAddress && <div
            style={{
                position: "fixed",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                zIndex: 1
            }}
        >
            {showPopup && (
                <AddressPopup onClose={() => setShowPopup(false)} onSelect={handleAddressSelect} />
            )}

            {!showPopup && outlet ? (
                <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                    <h2 className="text-2xl font-bold">Closest outlet</h2>
                    <h3 className="text-xl">{outlet?.city}</h3>
                    <p>
                        {outlet?.street}, {outlet?.city}, {outlet?.state}, {outlet?.zipCode}, {outlet?.country}
                    </p>
                    <button className="w-full bg-green-500 text-white p-2 rounded" onClick={() => setIfAddress(true)}>Ok</button>
                </div>
            ) : (
                <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                    <h3 className="text-2xl font-bold">Not Deliverable in your area</h3>
                    <button className="w-full bg-green-500 text-white p-2 rounded" onClick={() => setIfAddress(true)}>Ok</button>
                </div>
            )}
        </div>}
        </>
    );
};

export default OutletFinder;
