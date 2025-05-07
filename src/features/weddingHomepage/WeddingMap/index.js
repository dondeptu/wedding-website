import { MapWrapper } from "./styled";
import { Map, Marker } from "@vis.gl/react-google-maps";
import { WEDDING_LOCATION } from "./weddingLocation";

export const WeddingMap = () => (
    <MapWrapper>
        <Map
            defaultZoom={14}
            defaultCenter={WEDDING_LOCATION}
        >
            <Marker
                position={WEDDING_LOCATION}
                title="Zajazd REN Iwiczno"
            />
        </Map>

    </MapWrapper>
);