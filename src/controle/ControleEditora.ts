import Editora from "../modelo/Editora";



const editoras : Array<Editora> = [{
    codEditora: 1,
    nome: "Editora A"
},
{
    codEditora: 2,
    nome: "Editora B"
},
{
    codEditora: 2,
    nome: "Editora C"
},
{
    codEditora: 2,
    nome: "Editora D"
},
{
    codEditora: 3,
    nome: "Sem Editora"
}
];

export default class ControleEditora {
    public getNomeEditora(codEditora: number) {
        const resultados = editoras.filter(editora => editora.codEditora == codEditora);
        if (resultados.length == 0) return "Editora não encontrada";
        return resultados[0].nome;
    }

    public getEditoras() {
        return editoras;
    }
}