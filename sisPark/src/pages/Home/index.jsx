/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useRef } from "react";
import "./style.css";
import Lixeira from "../../assets/react.svg";
import api from "../../services/api";

function Home() {
  const [user, setusers] = useState([]);

  const inputName = useRef();
  const inputAge = useRef();
  const inputEmail = useRef();

  // const [user, setusers] = useState([
  // { id: 1, name: "Teste", age: 99, email: "teste@email.com" }
  //]);

  async function getUsers() {
    const userFromApi = await api.get("/usuarios");
    setusers(userFromApi.data);
  }

  async function createUser() {
    await api.post("/usuarios", {
      name: inputName.current.value,
      age: inputAge.current.value,
      email: inputEmail.current.value,
    });
    getUsers();
  }

  async function deleteUser(id) {
    await api.delete(`/usuarios/${id}`);
    getUsers(); // Atualiza a lista após a exclusão
  }

  /*
  async function getUsers() {
  try {
    const userFromApi = await api.get('/usuarios');
    console.log("Resposta da API:", userFromApi.data); // <--- Aqui
    setusers(userFromApi.data);
  } catch (error) {
    console.error("Erro ao buscar usuários:", error);
  }
}*/

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="container">
      <form>
        <h1>Cadastro de Usuarios</h1>
        <input name="nome" type="text" placeholder="Nome" ref={inputName} />
        <input name="idade" type="number" placeholder="idade" ref={inputAge} />
        <input name="email" type="email" placeholder="Email" ref={inputEmail} />
        <button type="button" onClick={createUser}>
          Cadastrar
        </button>
      </form>

      {user.map((user) => (
        <div key={user.id} className="card">
          <div>
            <p>
              Nome: <span>{user.name}</span>
            </p>
            <p>
              Idade:<span>{user.age}</span>
            </p>
            <p>
              Email:<span>{user.email}</span>
            </p>
          </div>
          <button onClick={() => deleteUser(user.id)}>
            <img src={Lixeira} />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;
