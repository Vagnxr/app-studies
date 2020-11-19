import { Cards } from "../../components/cards/cards";

export const Home = () => {
  const resultado = [
    {
      nome: "Clóvis",
      descricao: "Danilo é um homem",
    },
    {
      nome: "Zenha",
      descricao: "Zenha é uma Mulher",
    },
    {
      nome: "Vagner",
      descricao: "Danilo é um homem",
    },
    {
      nome: "Fernanda",
      descricao: "Danilo é um homem",
    },
    {
      nome: "Afonso",
      descricao: "Danilo é um homem",
    },
    {
      nome: "Daniel",
      descricao: "Danilo é um homem",
    },
    {
      nome: "Danilo",
      descricao: "Danilo é um homem",
    },
    {
      nome: "Danilo",
      descricao: "Danilo é um homem",
    },
    {
      nome: "Danilo",
      descricao: "Danilo é um homem",
    },
    {
      nome: "Danilo",
      descricao: "Danilo é um homem",
    },
    {
      nome: "Danilo",
      descricao: "Danilo é um homem",
    },
    {
      nome: "Danilo",
      descricao: "Danilo é um homem",
    },
    {
      nome: "Danilo",
      descricao: "Danilo é um homem",
    },
    {
      nome: "Danilo",
      descricao: "Danilo é um homem",
    },
    {
      nome: "Danilo",
      descricao: "Danilo é um homem",
    },
    {
      nome: "Danilo",
      descricao: "Danilo é um homem",
    },
    {
      nome: "Danilo",
      descricao: "Danilo é um homem",
    },
  ];

  const handleMap = (prop) => {
    return (
      <Cards title={prop.nome} describe={prop.descricao} />
    )
  };

  return (
    <div>
      {resultado.map(handleMap)}
    </div>
  );
};
