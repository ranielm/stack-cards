import Wizard from "./Wizard";

const App = () => {
  const steps = [
    {
      label: "Passo 1",
      content: <div>Conteúdo do Passo 1</div>,
    },
    {
      label: "Passo 2",
      content: <div>Conteúdo do Passo 2</div>,
    },
    {
      label: "Passo 3",
      content: <div>Conteúdo do Passo 3</div>,
    },
  ];

  return (
    <div>
      <h1>Wizard com Etapas Dinâmicas</h1>
      <Wizard steps={steps} />
    </div>
  );
};

export default App;
