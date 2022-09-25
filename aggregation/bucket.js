db.getCollection("persons").aggregate([
  {
      $bucket: {
          groupBy: "$dob.age",                        // Field to group by
          boundaries: [59, 69, 79], // Boundaries for the buckets
          default: "Other",                             // Bucket id for documents which do not fall into a bucket
      }
  },
])
