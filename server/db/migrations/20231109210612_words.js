export function up(knex) {
  return knex.schema.createTable('words', function (table) {
    table.increments()
    table.string('words')
    table.string('category')
  })
}
export function down(knex) {
  return knex.schema.dropTable('words')
}
