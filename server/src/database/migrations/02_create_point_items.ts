import Knex from 'knex';

export async function up(Knex: Knex) {
//CRIAR A TABELA
return Knex.schema.createTable('point_items', table => {
        table.increments('id').primary();
        table.integer('point_id')
            .notNullable()
            .references('id').inTable('points');
        table.integer('item_id')
            .notNullable()
            .references('id').inTable('items');
    });

};

export async function down(Knex: Knex) {
//VOLTAR ATRAS (DELETAR A TABELA)
    return Knex.schema.dropTable('point_items');
}
