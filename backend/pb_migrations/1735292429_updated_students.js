/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3827815851")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE UNIQUE INDEX `idx_Jc5VXwVSJX` ON `students` (`nickname`)",
      "CREATE UNIQUE INDEX `idx_MROC3U3PuY` ON `students` (`users_id`)"
    ]
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3827815851")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE UNIQUE INDEX `idx_Jc5VXwVSJX` ON `students` (`nickname`)"
    ]
  }, collection)

  return app.save(collection)
})
