/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.createTable("media", (table) => {
    table.bigIncrements("id").primary();
    table.text("image");
    table.string("title")
    table.text("synopsis")
    table.float("rating");
    table.string("type")
    table.bigInteger("released");
    table.string("runtime");
    table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now());
    table.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now());
  })
};

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
  return knex.schema.dropTableIfExists("media");
};
