import { Cards, Button } from "../../components";
import { useState } from "react";

export const Home = () => {
  const [showComponent, setShowComponent] = useState(false);
  const resultado = [
    {
      nome: "Clóvis",
      descricao: "Danilo é um homem",
    },
  ];

  const handleClick = () => {
    setShowComponent((r) => !r);
  };


  const handleMap = (prop) => {
    return <Cards title={prop.nome} describe={prop.descricao} />;
  };

  return (
    <div>
      <Button onClick={handleClick} title="Teste" />
      {showComponent && <>{resultado.map(handleMap)}</>}
    </div>
  );
};
