import { computeDistance } from "../src/utils/computeDistance";

const testData = [
  {
    title: "Location A",
    location: {
      coordinates: { latitude: 34, longitude: -7 },
    },
  },
  {
    title: "Location B",
    location: {
      coordinates: { latitude: 30, longitude: -7 },
    },
  },
  {
    title: "Location C",
    location: {
      coordinates: { latitude: 31, longitude: -7 },
    },
  },
];

describe("computeDistance", () => {
  test("should sort data based on distance", () => {
    const userLatitude = 29;
    const userLongitude = -7;

    const result = computeDistance(testData, userLatitude, userLongitude);

    expect(result[0].title).toBe("Location B");
    expect(result[1].title).toBe("Location C");
    expect(result[2].title).toBe("Location A");
  });

  test("should handle empty data array", () => {
    const userLatitude = 29;
    const userLongitude = -7;

    const result = computeDistance([], userLatitude, userLongitude);

    expect(result).toEqual([]);
  });
});
