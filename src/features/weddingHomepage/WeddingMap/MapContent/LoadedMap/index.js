import { InfoWindow, Map, Marker, useMarkerRef } from "@vis.gl/react-google-maps";
import { WEDDING_LOCATION } from "../../weddingLocation";
import { InfoWindowLink, InfoWindowHeader, MapWrapper, Address } from "./styled";
import { useCallback, useState } from "react";

export const LoadedMap = () => {
    const [makerRef, marker] = useMarkerRef();
    const [infoWindowShown, setInfoWindowShown] = useState(true);

    const handleMarkerClick = useCallback(
        () => setInfoWindowShown(isShown => !isShown),
        []
    );

    const handleClose = useCallback(() => setInfoWindowShown(false), []);

    return (
        <MapWrapper>
            <Map
                defaultZoom={14}
                defaultCenter={WEDDING_LOCATION}
            >
                <Marker
                    ref={makerRef}
                    position={WEDDING_LOCATION}
                    onClick={handleMarkerClick}
                    title="Zajazd REN Iwiczno"
                />
                {infoWindowShown && (
                    <InfoWindow
                        headerContent={
                            <InfoWindowHeader>Zajazd REN Iwiczno</InfoWindowHeader>
                        }
                        anchor={marker}
                        onClose={handleClose}
                    >
                        <Address>Wczasowa 32, 83-260 Iwiczno</Address>
                        <InfoWindowLink
                            href={`https://www.google.com/maps/dir/?api=1&destination=
                                ${encodeURIComponent("Zajazd REN Iwiczno, Iwiczno")}`}
                            target="_blank"
                            rel="noopener noreferre"
                        >
                            Wskazówki dojazdu
                        </InfoWindowLink>
                    </InfoWindow>
                )}
            </Map>
        </MapWrapper>
    );
};