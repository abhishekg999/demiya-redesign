import Image from "next/image"
import { HoursCard } from "../_components/HoursCard"
import { type LocationHourType } from "../_components/HoursCard"

const locationHours: LocationHourType[] = [
    {
        name: "Saratoga",
        hours: {
            "Monday": "Closed",
            "Tues-Thurs": "11:30am-1:00pm; 5:30pm-8:00pm",
            "Fri": "11:30am-1:00pm; 5:30pm-8:30pm",
            "Sat": "11:30am-1:30pm; 5:30pm-8:30pm",
            "Sunday": "11:30am-1:30pm; 5:30pm-7:30pm"
        }
    },
    {
        name: "De Anza",
        hours: {
            "Monday": "Closed",
            "Tues-Thurs": "11:30am-1:00pm; 5:30pm-8:00pm",
            "Fri": "11:30am-1:00pm; 5:30pm-8:30pm",
            "Sat": "11:30am-1:30pm; 5:30pm-8:30pm",
            "Sunday": "11:30am-1:30pm; 5:30pm-7:30pm"
        }
    },
    {
        name: "Dublin",
        hours: {
            "Monday": "Closed",
            "Tues-Fri": "11:30am-2:30pm; 5:00pm-8:00pm",
            "Sat": "11:30am-3:00pm; 5:00pm-8:00pm",
            "Sunday": "11:30am-3:00pm; 5:00pm-7:30pm"
        }
    },
    {
        name: "Fremont",
        hours: {
            "Monday": "Closed",
            "Tues-Sat": "11:30am-8:00pm",
            "Sunday": "11:30am-7:30pm"
        }
    }
]

export default function Hours() {
    return (
        <div className="container mx-auto py-8 px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {locationHours.map((location, index) => (
                    <HoursCard key={index} location={location} />
                ))}
            </div>

            <Image src="/eggcurry.jpeg" alt="Egg Curry" width={500} height={300} className="m-auto h-auto pt-8"></Image>
        </div>


    )
}