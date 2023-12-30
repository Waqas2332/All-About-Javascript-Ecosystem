import express from "express";

const router = express.Router();

const DUMMYPLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the famous sky scrapers in the world",
    location: {
      lat: 40.7484474,
      lng: -73.9871516,
    },
    address: "20 W 34th St,New York,NY 10001",
    creator: "u1",
  },
];

router.get("/:id", (req, res) => {
  const id = req.params.id;
  const place = DUMMYPLACES.find((place) => place.id === id);

  res
    .status(200)
    .json({ message: "Place Found Successfully", place, ok: true });
});

router.get("/user/:uid", (req, res) => {
  const userId = req.params.uid;
  const userPlaces = DUMMYPLACES.find((place) => place.creator === userId);
  res
    .status(200)
    .json({ message: "Places Found Successfully", userPlaces, ok: true });
});

export default router;
