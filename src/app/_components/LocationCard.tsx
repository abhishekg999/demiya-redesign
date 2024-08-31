import { UtensilsCrossed } from 'lucide-react';

type LocationCardProps = {
    location: {
        name: string,
        address: string,
        mapUrl: string,
        orderUrl: string
    };
};

export const LocationCard = ({ location }: LocationCardProps) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border">
        <div className="p-4">
            <h2 className="text-xl font-bold text-red-700 mb-2">{location.name}</h2>
            <p className="text-gray-600 mb-4">{location.address}</p>
            <a href={location.orderUrl} className="text-red-700 hover:text-red-900 font-semibold flex items-center">
                <UtensilsCrossed className="mr-1" size={16} />
                Online order
            </a>
        </div>
        <iframe
            src={location.mapUrl}
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
    </div>
);