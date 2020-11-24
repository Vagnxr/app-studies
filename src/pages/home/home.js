import { Cards } from "../../components/cards/cards";

export const Home = () => {
  const resultado = [
    {
      nome: "Clóvis",
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
