import { Routes, Route, useNavigate } from "react-router-dom";
import AddressInput from "./components/adresse/AdresseForm";
import { Layout } from "./components/layout/Layout";
import { Login } from "./views/login/Login";
import ForfaitsComponent from "./components/forfaits/ForfaitsComponent";
import { AdminDashboard } from "./views/admin/AdminDashboard";
import { ClientDashboard } from "./views/client/ClientDashboard";
import { TechnicienDashboard } from "./views/technicien/TechnicienDashboard";
import { PlanningCalendar } from "./components/calendar/PlanningCalendar";
import { useEffect, useState } from "react";

function App() {
  const navigate = useNavigate();
  const [selectedAddress, setSelectedAddress] = useState<string | null>(null);

  useEffect(() => {
    const address = localStorage.getItem("selectedAddress");
    if (address) {
      setSelectedAddress(address);
    }
  console.log(address)
  }, []);

  const handleBackToAddressSelection = () => {
    setSelectedAddress(null);
    localStorage.removeItem("selectedAddress");
  };

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
      <Route path="/client-dashboard" element={<ClientDashboard />} />
      <Route path="/technicien-dashboard" element={<TechnicienDashboard />} />
      <Route
        path="/"
        element={
          <div
            className="min-h-screen bg-cover bg-center bg-gray-600 text-white overflow-hidden"
            style={{
              backgroundImage: "url(../../assets/img/home.svg)",
              height: "100vh",
            }}
          >
            <Layout>
              {/* <div className="relative"> */}
              <div className="relative z-10 top-2">
                <div className="bg-black rounded-lg py-2 mx-auto w-1/3 text-white opacity-70">
                  <p className="py-2 px-4">
                    Votre cycloboutique préférée se déplace maintenant chez vous
                    pour entretenir et réparer votre vélo.
                  </p>
                </div>
                <div className="bg-black rounded-full mt-2 ml-[35%] w-8 h-8 text-white opacity-70"></div>
                <div className="bg-black rounded-full mt-2 ml-[38%] w-6 h-6 text-white opacity-70"></div>
                <div className="bg-black rounded-full mt-2 ml-[41%] w-4 h-4 text-white opacity-70"></div>
                <div className="bg-black rounded-full mt-2 ml-[43%] w-2 h-2 text-white opacity-70"></div>

                {/* {selectedAddress ? (
                  <>
                    <div className="mt-[20%]">
                      <AddressInput />
                    </div>
                    <ForfaitsComponent />
                  </>
                ) : (
                  <div>
                    <PlanningCalendar events={[]} onEventSelect={() => {}} />
                  </div>
                )} */}

{selectedAddress ? (
                    <div className="">
                      <PlanningCalendar events={[]} onEventSelect={() => {}} />
                      <div className="text-center mt-2">
                        <button
                          onClick={handleBackToAddressSelection}
                          className="bg-[#3f995d] hover:bg-[#42b267] opacity-90 text-white font-bold py-2 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
                        >
                          Changer l'adresse
                        </button>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="mt-[20%]">
                        <AddressInput />
                      </div>
                      <ForfaitsComponent />
                    </>
                  )}

                <div className="text-center mt-2">
                  <button
                    onClick={() => navigate("/login")}
                    className="bg-[#3f995d] hover:bg-[#42b267] opacity-90 text-white font-bold py-2 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
                  >
                    Se connecter
                  </button>
                </div>
              </div>
              {/* </div> */}
            </Layout>
          </div>
        }
      />
    </Routes>
  );
}

export default App;
