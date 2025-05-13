import { Map, Marker } from "@vis.gl/react-google-maps";
import { WEDDING_LOCATION } from "../../weddingLocation";
import { MapWrapper } from "./styled";

export const LoadedMap = () => (
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