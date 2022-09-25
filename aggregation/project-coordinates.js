

// projection make co-ordinates to type Pointer and Array 


db.getCollection("persons").aggregate([
  {
    $project: {
      _id: 0,
      name: 1,
      email: 1,
      location: {
        type: "Point",
        coordinates: [
          {
            $convert: {
              input: "$location.coordinates.longitude",
              to: "double",
              onError: 0,
              onNull: 0,
            },
          },
          {
            $convert: {
              input: "$location.coordinates.latitude",
              to: "double",
              onError:0,
              onNull:0
            },
          },
        ],
      },
    },
  },
  {
    $project: {
      _id: 0,
      gender: 1,
      email: 1,
      location: 1,
      fullName: { $toUpper: { $concat: ["$name.first", " ", "$name.last"] } },
    },
  },
]);
