import { Edit3Icon, User2 } from "lucide-react";
import StudentsHeader from "../components/header";
import { useEffect, useState } from "react";
import { API } from "../../API/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "@material-tailwind/react";

const estados = {
  "": "",
  AC: "Acre",
  AL: "Alagoas",
  AM: "Amazonas",
  AP: "Amapá",
  BA: "Bahia",
  CE: "Ceará",
  DF: "Distrito Federal",
  ES: "Espírito Santo",
  GO: "Goiás",
  MA: "Maranhão",
  MG: "Minas Gerais",
  MS: "Mato Grosso do Sul",
  MT: "Mato Grosso",
  PA: "Pará",
  PB: "Paraíba",
  PE: "Pernambuco",
  PI: "Piauí",
  PR: "Paraná",
  RJ: "Rio de Janeiro",
  RN: "Rio Grande do Norte",
  RO: "Rondônia",
  RR: "Roraima",
  RS: "Rio Grande do Sul",
  SC: "Santa Catarina",
  SE: "Sergipe",
  SP: "São Paulo",
  TO: "Tocantins",
};

interface Profile {
  name: string;
  email: string;
  birth: number;
  name_responsible: string;
  email_responsible: string;
  cpf_responsible: string;
  zip_code: string;
  city: string;
  address: string;
  phone_responsible: string;
  state: string;
  scholarship_holder: boolean;
}

export default function EditPerfil() {
  function isTimestamp(value: any): boolean {
    return !isNaN(value) && value > 0 && value <= 2147483648000;
  }

  function calcularIdade(dataNascimentoTimestamp: number): number {
    const dataNascimento = isTimestamp(dataNascimentoTimestamp)
      ? new Date(dataNascimentoTimestamp * 1000)
      : new Date(dataNascimentoTimestamp);

    const dataAtual = new Date();
    let diff = dataAtual.getTime() - dataNascimento.getTime();
    let idade = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));

    return idade;
  }
  const [userData, setUserData] = useState<Profile>({
    name: "",
    email: "",
    birth: 0,
    name_responsible: "",
    email_responsible: "",
    cpf_responsible: "",
    zip_code: "",
    phone_responsible: "",
    city: "",
    address: "",
    state: "",
    scholarship_holder: false,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");

        if (token) {
          const response = await API.get("/profile", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          const userDataFromAPI = response.data;
          const birthTimestamp = isTimestamp(userDataFromAPI.birth)
            ? userDataFromAPI.birth
            : Date.parse(userDataFromAPI.birth);
          const idade = calcularIdade(birthTimestamp);

          setUserData({
            ...userDataFromAPI,
            idade: idade,
          });
        } else {
          console.error("Token não encontrado");
        }
      } catch (error) {
        console.error("Erro ao buscar os dados do usuário:", error.message);
        toast.error("Erro ao buscar os dados do usuário");
      }
    };

    fetchData();
  }, []);

  /* Update */

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [editedUserData, setEditedUserData] = useState({ ...userData });

  const handleNameResponsibleChange = (e) => {
    setEditedUserData({ ...editedUserData, name_responsible: e.target.value });
  };

  const handleEmailResponsibleChange = (e) => {
    setEditedUserData({ ...editedUserData, email_responsible: e.target.value });
  };

  const handlePhoneResponsibleChange = (e) => {
    setEditedUserData({ ...editedUserData, phone_responsible: e.target.value });
  };

  const handleAddressChange = (e) => {
    setEditedUserData({ ...editedUserData, address: e.target.value });
  };

  const handleCityChange = (e) => {
    setEditedUserData({ ...editedUserData, city: e.target.value });
  };

  const handleStateChange = (e) => {
    setEditedUserData({ ...editedUserData, state: e.target.value });
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(e.target.value);
  };

  const handleUpdateProfile = async () => {
    try {
      if (newPassword !== confirmPassword) {
        toast.error("As senhas não coincidem.");
        return;
      }

      const token = localStorage.getItem("token");

      if (token) {
        const editedDataJSON = JSON.stringify(editedUserData);

        const response = await API.put("/profile", editedDataJSON, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        toast.success("Perfil atualizado com sucesso!");
        window.location.reload();
      } else {
        console.error("Token não encontrado");
      }
    } catch (error) {
      console.error("Erro ao atualizar o perfil:", error.message);
      toast.error("Erro ao atualizar o perfil");
    }
  };

  return (
    <div className="w-screen md:h-screen h-full bg-gradient-to-br from-[#4C3F99] to-[#0D1635] p-6">
      <StudentsHeader />
      <div className="w-full flex items-center justify-center mt-12">
        <main className="bg-roxo md:w-[1100px] w-full h-full md:h-[400px] rounded-xl flex flex-col md:flex-row justify-between items-center p-4 gap-4">
          <div className="bg-limeyellow w-80 h-full rounded-lg flex flex-col justify-center items-center gap-20 relative md:p-0 p-4">
            <div className="flex justify-center items-center flex-col">
              <div className="rounded-full bg-zinc-400 w-28 h-28 flex justify-center items-center">
                <User2 className="text-roxo w-12 h-12" />
              </div>
              <label
                htmlFor="fileInput"
                className="bg-roxo rounded-full p-1 absolute md:top-32 md:right-20 top-24 right-28 cursor-pointer hover:bg-roxo-normal duration-150"
              >
                <Edit3Icon className="text-limeyellow" />
              </label>
              <input
                type="file"
                id="fileInput"
                accept=".jpg, .jpeg, .png"
                multiple
                className="hidden"
              />
            </div>
            <div className="flex flex-col justify-center items-center gap-4">
              <span className="font-bold">{userData.name}</span>
              <div className="flex flex-col text-xs justify-center items-center gap-4">
                <span>{userData.email}</span>
                <span> {userData.idade} anos</span>
                <span>{userData.city}</span>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col items-center justify-center text-white gap-2">
            <h1 className="text-white font-bold text-2xl">Meu Perfil</h1>
            <div className="flex gap-2 w-full md:flex-row flex-col">
              <div className="flex flex-col w-full">
                <label>Nome do responsavel</label>
                <input
                  type="text"
                  className="rounded px-2 py-1 outline-none text-roxo"
                  value={editedUserData.name_responsible}
                  onChange={handleNameResponsibleChange}
                />
              </div>
              <div className="flex flex-col w-full">
                <label>Email do responsavel</label>
                <input
                  type="email"
                  className="rounded px-2 py-1 outline-none text-roxo"
                  value={editedUserData.email_responsible}
                  onChange={handleEmailResponsibleChange}
                />
              </div>
            </div>
            <div className="flex gap-2 w-full md:flex-row flex-col">
              <div className="flex flex-col w-full">
                <label>Telefone do responsavel</label>
                <input
                  type="number"
                  value={editedUserData.phone_responsible}
                  onChange={handlePhoneResponsibleChange}
                  className="rounded px-2 py-1 outline-none text-roxo"
                />
              </div>
              <div className="flex flex-col w-full">
                <label>Endereço</label>
                <input
                  type="text"
                  className="rounded px-2 py-1 outline-none text-roxo"
                  value={editedUserData.address}
                  onChange={handleAddressChange}
                />
              </div>
            </div>
            <div className="flex w-full gap-2">
              <div className="flex flex-col w-4/5">
                <label>Cidade</label>
                <input
                  type="text"
                  className="rounded px-2 py-1 outline-none text-roxo"
                  value={editedUserData.city}
                  onChange={handleCityChange}
                />
              </div>
              <div className="flex flex-col w-1/5">
                <label>UF:</label>
                <select
                  name="UF"
                  onChange={handleStateChange}
                  className="px-2 py-1.5 text-roxo rounded"
                >
                  {Object.entries(estados).map(([uf, estado]) => (
                    <option key={uf} value={editedUserData.state}>
                      {uf} - {estado}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex w-full gap-2 md:flex-row flex-col">
              <div className="flex flex-col w-full">
                <label>Alterar Senha</label>
                <input
                  type="password"
                  className="rounded px-2 py-1 outline-none text-roxo"
                  value={newPassword}
                  onChange={handlePasswordChange}
                />
              </div>
              <div className="flex flex-col w-full">
                <label>Confirmar Senha</label>
                <input
                  type="password"
                  className="rounded px-2 py-1 outline-none text-roxo"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                />
              </div>
            </div>
            <Button
              className="bg-limeyellow text-roxo"
              onClick={handleUpdateProfile}
            >
              {" "}
              Alterar
            </Button>
          </div>
        </main>
        <ToastContainer />
      </div>
    </div>
  );
}
