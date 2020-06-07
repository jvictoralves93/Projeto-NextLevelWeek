import Knex from "knex";

export async function seed(Knex: Knex){
    await Knex('items').insert([
        {title: 'Lâmpadas', image:'lampadas.svg'},
        {title: 'Pilhas e Baterias', image:'baterias.svg'},
        {title: 'Papéis e Papelão', image:'papeispapelao.svg'},
        {title: 'Resíduos Eletrônicos', image:'eletronicos.svg'},
        {title: 'Resíduos Orgâinicos', image:'organicos.svg'},
        {title: 'Óleo de Cozinhs', image:'oleo.svg'}
    ]);
}