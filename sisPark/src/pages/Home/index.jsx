import "./style.css";
import Lixeira from "../../assets/react.svg";

function Home() {
  const users = [
    {
      id: 1,
      name: "João",
      email: "joao@gmail.com",
      age: 66,
    },
    {
      id: 2,
      name: "João 2",
      email: "joao2@gmail.com",
      age: 76,
    },
  ];

  return (
    <div className="container">
      <form>
        <h1>Cadastro de Usuarios</h1>
        <input name="nome" type="text" placeholder="Nome" />
        <input name="idade" type="number" placeholder="idade" />
        <input name="email" type="email" placeholder="Email" />
        <button type="button">Cadastrar</button>
      </form>

      {users.map((user) => (
        <div key={user.id}>
          <div>
            <p>Nome: {user.name}</p>
            <p>Idade: {user.age}</p>
            <p>Email: {user.email}</p>
          </div>
          <button>
            <img src={Lixeira} />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;
