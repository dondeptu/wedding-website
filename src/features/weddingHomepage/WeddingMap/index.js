import { MapWrapper } from "./styled";
import { Map, Marker } from "@vis.gl/react-google-maps";
import { WEDDING_LOCATION } from "./weddingLocation";

export const WeddingMap = () => (
    <MapWrapper>
        <Map center={WEDDING_LOCATION} zoom={14}>
            <Marker
                position={WEDDING_LOCATION}
                title="Zajazd REN Iwiczno"
            />
        </Map>
        
    </MapWrapper>
);