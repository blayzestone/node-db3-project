const db = require("../data/db-config");

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove,
};

function find() {
  return db("schemes").select("*");
}

function findById(id) {
  return db("schemes").select("*").where({ id }).first();
}

function findSteps(id) {
  return db("schemes")
    .select("scheme_name", "step_number", "instructions")
    .join("steps", "steps.scheme_id", "schemes.id")
    .where("schemes.id", id)
    .orderBy("steps.step_number");
}

function add(scheme) {
  return db("schemes").insert(scheme);
}

function update(changes, id) {
  return db("schemes").where({ id }).update(changes);
}

function remove(id) {
  return db("schemes").where({ id }).del();
}
