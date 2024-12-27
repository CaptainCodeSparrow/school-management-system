/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2907260911")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE UNIQUE INDEX `idx_UiH8UuLvnH` ON `teachers` (`nickname`)",
      "CREATE UNIQUE INDEX `idx_qwppUptpKW` ON `teachers` (`users_id`)"
    ]
  }, collection)

  // add field
  collection.fields.addAt(2, new Field({
    "cascadeDelete": false,
    "collectionId": "_pb_users_auth_",
    "hidden": false,
    "id": "relation1739830333",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "users_id",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2907260911")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE UNIQUE INDEX `idx_UiH8UuLvnH` ON `teachers` (`nickname`)"
    ]
  }, collection)

  // remove field
  collection.fields.removeById("relation1739830333")

  return app.save(collection)
})
