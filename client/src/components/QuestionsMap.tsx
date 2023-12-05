"use client";

import { Map, Source, Layer, LayerProps } from "react-map-gl";

const clusterLayer: LayerProps = {
  id: "clusters",
  type: "circle",
  source: "locations",
  filter: ["has", "point_count"],
  paint: {
    "circle-color": "#ff2c2c",
    "circle-radius": ["step", ["get", "point_count"], 20, 100, 30, 750, 40],
  },
};

const clusterCountLayer: LayerProps = {
  id: "cluster-count",
  type: "symbol",
  source: "locations",
  filter: ["has", "point_count"],
  layout: {
    "text-field": "{point_count_abbreviated}",
    "text-font": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
    "text-size": 12,
  },
};

const unclusteredPointLayer: LayerProps = {
  id: "unclustered-point",
  type: "circle",
  source: "locations",
  filter: ["!", ["has", "point_count"]],
  paint: {
    "circle-color": "#ee6b6e",
    "circle-radius": 8,
    "circle-stroke-width": 1,
    "circle-stroke-color": "#fff",
  },
};

export const QuestionsMap = ({ locations }: any) => {
  return (
    <Map
      mapLib={import("mapbox-gl")}
      initialViewState={{
        latitude: 33,
        longitude: -7,
        zoom: 4,
      }}
      style={{ width: "auto", height: "100%" }}
      mapStyle="mapbox://styles/abo007/ck90kt9zd0bk31ioa7g1v5z4v"
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
    >
      <Source
        id="locations"
        type="geojson"
        data={{
          type: "FeatureCollection",
          features: locations,
        }}
        cluster={true}
        clusterMaxZoom={14}
        clusterRadius={50}
      >
        <Layer {...clusterLayer} />
        <Layer {...clusterCountLayer} />
        <Layer {...unclusteredPointLayer} />
      </Source>
    </Map>
  );
};
