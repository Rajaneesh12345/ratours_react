import 'mapbox-gl/dist/mapbox-gl.css';
import * as React from 'react';
import Map, {
	Marker,
	Popup,
	NavigationControl,
	FullscreenControl,
	ScaleControl,
	GeolocateControl
} from 'react-map-gl';
const MAPBOX_TOKEN =
	'pk.eyJ1IjoicmFqYW5lZXNoMTQyMTgxIiwiYSI6ImNsY3d4ZWZ4NTF4eTEzdmxoazBrazhlNnkifQ.35M9zhylCJJvIJ1zYwLxhQ';

function Root(props) {
	const { locations } = props;
	const [viewState, setViewState] = React.useState({
		longitude: locations[0].coordinates[0],
		latitude: locations[0].coordinates[1],
		zoom: 7
	});

	return (
		<section className="section-map">
			<Map
				{...viewState}
				scrollZoom={false}
				onMove={evt => setViewState(evt.viewState)}
				style={{
					width: 1125,
					height: 700,
					padding: [200, 150, 200, 150]
				}}
				mapStyle="mapbox://styles/rajaneesh142181/clcx32sf9011614pg9apon008"
				mapboxAccessToken={MAPBOX_TOKEN}
			>
				<GeolocateControl position="top-right" />
				<FullscreenControl position="top-right" />
				<NavigationControl position="top-right" />
				<ScaleControl />
				{locations.map((location, index) => {
					return (
						<>
							<Marker
								key={index}
								longitude={location.coordinates[0]}
								latitude={location.coordinates[1]}
								color={'red'}
							>
								<Popup
									anchor="top"
									longitude={location.coordinates[0]}
									latitude={location.coordinates[1]}
								>
									{location.description}
								</Popup>
							</Marker>
							<Marker
								key={index + 100}
								longitude={location.coordinates[0]}
								latitude={location.coordinates[1]}
								color={'red'}
							></Marker>
						</>
					);
				})}
			</Map>
		</section>
	);
}
export default Root;
