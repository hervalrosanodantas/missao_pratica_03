import Livro from "../modelo/Livro";

const livros : Array<Livro> = [{
    codigo: 1,
    codEditora: 1,
    titulo: "Poeta França, Antologia Poética",
    resumo: "Essa Antologia Poética reúne todos os trabalhos publicados e outras dezenas de textos inéditos do Poeta França, importante ícone da poesia matuta brasileira, falecido em 2010. Numa edição meticulosa de seu filho Herval Rosano Dantas, que organizou as publicações e seus cordeis em ordem cronológica de produção, a Antologia refaz o caminho de um dos maiores nomes da poesia potiguar, dono de um estilo meticuloso e ao mesmo tempo despojado, em que recria de forma pungente e, muitas vezes, divertida o modo de vida, anseios e memórias do homem sertanejo brasileiro.",
    autores: ["Produção Independente (eu)"]
},{
    codigo: 2,
    codEditora: 2,
    titulo: "Os miseráveis",
    resumo: "Um clássico da literatura mundial, esta obra é uma poderosa denúncia a todos os tipos de injustiça humana. Narra a emocionante história de Jean Valjean ― o homem que, por ter roubado um pão, é condenado a dezenove anos de prisão. Os miseráveis é um livro inquietantemente religioso e político, com uma das narrativas mais envolventes já criadas.",
    autores: ["Amazon books"]
},{
    codigo: 3,
    codEditora: 3,
    titulo: "Código limpo",
    resumo: "Mesmo um código ruim pode funcionar. Mas se ele não for limpo, pode acabar com uma empresa de desenvolvimento. Perdem-se a cada ano horas incontáveis e recursos importantes devido a um código mal escrito. Mas não precisa ser assim.O renomado especialista em software, Robert C. Martin, apresenta um paradigma revolucionário com Código limpo: Habilidades Práticas do Agile Software.",
    autores: ["Robert C. Martin"]
}];

export default class ControleLivro {
    incluir(livro: Livro) {
        livro.codigo = livros.length > 0
            ? livros.at(-1)!.codigo + 1
            : 1;
        livros.push(livro);
    }

    excluir(codigo: number) {
        const index = livros.findIndex(livro => livro.codigo == codigo);
        livros.splice(index, 1);
    }

    obterLivros() {
        return livros;
    }
}