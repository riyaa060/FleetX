import React from 'react'

// Functional component to display a popup for a new ride
const RidePopUp = (props) => {
    return (
        <div>
            {/* Close button at the top - hides the ride popup panel when clicked */}
            <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={() => {
                props.setRidePopupPanel(false)
            }}>
                <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
            </h5>

            {/* Header indicating a new ride is available */}
            <h3 className='text-2xl font-semibold mb-5'>New Ride Available!</h3>

            {/* User info and distance display */}
            <div className='flex items-center justify-between p-3 bg-yellow-400 rounded-lg mt-4'>
                <div className='flex items-center gap-3 '>
                    {/* User avatar */}
                    <img
                        className='h-12 rounded-full object-cover w-12'
                        src="https://i.pinimg.com/236x/af/26/28/af26280b0ca305be47df0b799ed1b12b.jpg"
                        alt=""
                    />
                    {/* User's full name (safely accessing nested properties with optional chaining) */}
                    <h2 className='text-lg font-medium'>
                        {props.ride?.user.fullname.firstname + " " + props.ride?.user.fullname.lastname}
                    </h2>
                </div>

                {/* Static distance display (could be dynamic in future) */}
                <h5 className='text-lg font-semibold'>2.2 KM</h5>
            </div>

            {/* Ride details: pickup, destination, and fare */}
            <div className='flex gap-2 justify-between flex-col items-center'>
                <div className='w-full mt-5'>

                    {/* Pickup location */}
                    <div className='flex items-center gap-5 p-3 border-b-2'>
                        <i className="ri-map-pin-user-fill"></i>
                        <div>
                            <h3 className='text-lg font-medium'>562/11-A</h3>
                            <p className='text-sm -mt-1 text-gray-600'>{props.ride?.pickup}</p>
                        </div>
                    </div>

                    {/* Destination location */}
                    <div className='flex items-center gap-5 p-3 border-b-2'>
                        <i className="text-lg ri-map-pin-2-fill"></i>
                        <div>
                            <h3 className='text-lg font-medium'>562/11-A</h3>
                            <p className='text-sm -mt-1 text-gray-600'>{props.ride?.destination}</p>
                        </div>
                    </div>

                    {/* Fare display */}
                    <div className='flex items-center gap-5 p-3'>
                        <i className="ri-currency-line"></i>
                        <div>
                            <h3 className='text-lg font-medium'>₹{props.ride?.fare}</h3>
                            <p className='text-sm -mt-1 text-gray-600'>Cash Cash</p>
                        </div>
                    </div>
                </div>

                {/* Action buttons: Accept and Ignore */}
                <div className='mt-5 w-full'>
                    {/* Accept button: triggers confirmRide and shows confirm popup */}
                    <button onClick={() => {
                        props.setConfirmRidePopupPanel(true); // Show confirm ride panel
                        props.confirmRide(); // Trigger confirm ride function
                    }}
                        className='bg-green-600 w-full text-white font-semibold p-2 px-10 rounded-lg'>
                        Accept
                    </button>

                    {/* Ignore button: simply closes the ride popup */}
                    <button onClick={() => {
                        props.setRidePopupPanel(false);
                    }}
                        className='mt-2 w-full bg-gray-300 text-gray-700 font-semibold p-2 px-10 rounded-lg'>
                        Ignore
                    </button>
                </div>
            </div>
        </div>
    )
}

export default RidePopUp
