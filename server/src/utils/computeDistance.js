// function to calculate the distance between two points using Haversine formula
function haversine(lat1, lon1, lat2, lon2) {
  const R = 6371; // radius of the Earth in kilometers
  const dLat = toRadians(lat2 - lat1);
  const dLon = toRadians(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c; // distance in kilometers
  return distance;
}

// function to convert degrees to radians
function toRadians(degrees) {
  return (degrees * Math.PI) / 180;
}

export function computeDistance(data, userLatitude, userLongitude) {
  // sort data based on distance
  data.sort((a, b) => {
    const distanceA = haversine(
      userLatitude,
      userLongitude,
      a.location.coordinates.latitude,
      a.location.coordinates.longitude
    );
    const distanceB = haversine(
      userLatitude,
      userLongitude,
      b.location.coordinates.latitude,
      b.location.coordinates.longitude
    );
    return distanceA - distanceB;
  });

  return data;
}
