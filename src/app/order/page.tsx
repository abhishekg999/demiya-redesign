import { LocationCard } from "../_components/LocationCard";

const locationInfo = [
    {
        name: "SARATOGA AVE",
        address: "375 Saratoga Ave G, San Jose, CA 95129",
        mapUrl: "https://www.google.com/maps/embed/v1/place?key=AIzaSyApM2qX3enVGPy1LQL4Vt-vMulLnCgQPyU&q=375+Saratoga+Ave+G%2C+San+Jose%2C+CA+95129",
        orderUrl: "https://order.toasttab.com/online/demiya-saratoga-ave-em-375-saratoga-ave-ste-g"
    },
    {
        name: "CUPERTINO",
        address: "1145 S De Anza Blvd, San Jose, CA 95129",
        mapUrl: "https://www.google.com/maps/embed/v1/place?key=AIzaSyApM2qX3enVGPy1LQL4Vt-vMulLnCgQPyU&q=1145+S+De+Anza+Blvd+%2C+San+Jose%2C+CA+95129",
        orderUrl: "https://order.toasttab.com/online/demiya-de-anza-em-1145-south-de-anza-boulevard"
    },
    {
        name: "DUBLIN",
        address: "7477 Village Pkwy, Dublin, CA 94568",
        mapUrl: "https://www.google.com/maps/embed/v1/place?key=AIzaSyApM2qX3enVGPy1LQL4Vt-vMulLnCgQPyU&q=7477+Village+Pkwy+%2C+Dublin+%2C+CA+94568",
        orderUrl: "https://order.toasttab.com/online/demiya-dublin-em-7477-village-parkway"
    },
    {
        name: "FREMONT",
        address: "46551 Mission Blvd, Fremont, CA 94539 (inside 99 Ranch)",
        mapUrl: "https://www.google.com/maps/embed/v1/place?key=AIzaSyApM2qX3enVGPy1LQL4Vt-vMulLnCgQPyU&q=46551+Mission+Blvd+%2C+Fremont+%2C+CA+94539",
        orderUrl: "https://order.toasttab.com/online/demiya-fremont-em-46551-mission-boulevard"
    }
];

export default function Order() {
    return (
        <div className="container mx-auto py-8 px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {locationInfo.map((location, index) => (
                    <LocationCard key={index} location={location} />
                ))}
            </div>

            <h3 className="text-center text-xl py-12">
                Customer Support: Only text messages are available at <strong>650-833-8775</strong>
            </h3>
        </div>
    )
}