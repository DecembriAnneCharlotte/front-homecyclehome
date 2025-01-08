// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { login } from '../../services/auth';
// import { setUser } from '../../store/authSlice';
// import { LogIn } from 'lucide-react';

// export const LoginForm: React.FC = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const dispatch = useDispatch();

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       const user = await login(email, password);
//       dispatch(setUser(user));
//     } catch (error) {
//       console.error('Erreur de connexion:', error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-8">
//       <div>
//         <label htmlFor="email" className="block text-sm font-medium text-gray-300">
//           Email
//         </label>
//         <input
//           type="email"
//           id="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="mt-1 block w-full rounded-md border-[#3f995d] shadow-sm focus:border-[#3f995d] focus:ring-[#3f995d] text-gray-700"
//         />
//       </div>
//       <div>
//         <label htmlFor="password" className="block text-sm font-medium text-gray-300">
//           Mot de passe
//         </label>
//         <input
//           type="password"
//           id="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="mt-1 block w-full rounded-md border-[#3f995d] shadow-sm focus:border-[#3f995d] focus:ring-[#3f995d] text-gray-700"
//         />
//       </div>
//       <div className="mt-16">
//       <button
//         type="submit"
//         className="flex justify-center items-center gap-2 rounded-md bg-[#3f995d] px-4 py-2 text-white hover:bg-[#42b267] w-[50%] mx-auto"
//       >
//         <LogIn className="h-5 w-5" />
//         Se connecter
//       </button>
//       </div>
//     </form>
//   );
// };

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { LogIn } from 'lucide-react';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/auth/login', { email, password });
      const { access_token, role } = response.data;
      console.log(response.data);
      // Stocker le token dans le localStorage ou un état global
      localStorage.setItem('access_token', access_token);

      // Rediriger en fonction du rôle de l'utilisateur
      if (role === 'admin') {
        navigate('/admin-dashboard');
      } else if (role === 'client') {
        navigate('/client-dashboard');
      } else if (role === 'technicien') {
        navigate('/technicien-dashboard');
      } else {
        navigate('/');
      }    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 block w-full rounded-md border-[#3f995d] shadow-sm focus:border-[#3f995d] focus:ring-[#3f995d] text-gray-700"
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-300">
          Mot de passe
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 block w-full rounded-md border-[#3f995d] shadow-sm focus:border-[#3f995d] focus:ring-[#3f995d] text-gray-700"
        />
      </div>
      <div className="mt-16">
      <button
        type="submit"
        className="flex justify-center items-center gap-2 rounded-md bg-[#3f995d] px-4 py-2 text-white hover:bg-[#42b267] w-[50%] mx-auto"
      >
        <LogIn className="h-5 w-5" />
        Se connecter
      </button>
      </div>
    </form>
);
};

export default LoginForm;
