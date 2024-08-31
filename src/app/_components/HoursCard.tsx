import React from "react";
import { Clock } from "lucide-react";

export type LocationHourType = {
    name: string;
    hours: {
        [day: string]: string;
    };
};

type HoursCardProps = {
    location: LocationHourType
}

export const HoursCard = ({ location }: HoursCardProps) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 mb-4 border">
            <h2 className="text-2xl font-bold text-red-700 mb-4">{location.name}</h2>
            <div className="grid grid-cols-2 gap-2">
                <div className="col-span-2 flex items-center">
                    <Clock className="mr-2 text-red-700" size={20} />
                    <span className="font-semibold">Hours</span>
                </div>
                {Object.entries(location.hours).map(([day, hours]) => (
                    <React.Fragment key={day}>
                        <div className="font-semibold text-gray-700">{day.charAt(0).toUpperCase() + day.slice(1)}:</div>
                        <div className="text-gray-600">{hours}</div>
                    </React.Fragment>
                ))}
            </div>
        </div>
    )
};