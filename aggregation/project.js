db.getCollection("persons").aggregate([
  { $match: { gender: "female" } },
  {
    $project:
    {
      _id: 0,
      gender: 1,
      fullName: { $toUpper: { $concat: ["$name.first", " ", "$name.last"] } }
    },

  }
])