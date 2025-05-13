import { LoadedMap } from "./LoadedMap";
import { APILoadingStatus, useApiLoadingStatus } from "@vis.gl/react-google-maps";

export const MapContent = () => {
    const status = useApiLoadingStatus();

    switch (status) {
        case APILoadingStatus.NOT_LOADED:
        case APILoadingStatus.LOADING:
            return <div>Ładowanie mapy...</div>;

        case APILoadingStatus.FAILED:
            return <div>Nie udało się załadować mapy. Sprawdź połączenie lub odśwież stronę</div>;

        case APILoadingStatus.LOADED:
            return <LoadedMap />

        default:
            throw new Error(`Incorrect status: ${status}`);
    };
};