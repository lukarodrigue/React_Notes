<<<<<<< HEAD
import {
    createContext,
    useContext,
    useState,
    useEffect
  } from 'react';
  
  const AuthContext = createContext({});
  
  import { api } from "../services/api";
  
  function AuthProvider({ children }) {
=======
import { createContext, useContext, useState, useEffect } from "react";

import { api } from '../services/api';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
>>>>>>> 3987cb209ac9d381a2759f351c978a6edf1897e9
    const [data, setData] = useState({});
  
    async function signIn({ email, password }) {
      try {
        const response = await api.post("sessions", { email, password });
        const { token, user } = response.data;
  
        localStorage.setItem("@rocketnotes:user", JSON.stringify(user));
        localStorage.setItem("@rocketnotes:token", token);
  
        api.defaults.headers.authorization = `Bearer ${token}`;
  
        setData({ token, user });
  
      } catch (error) {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possível entrar.");
        }
      }
    };
  
    async function updatedProfile({ user, avatarFile }) {
      try {
  
        if (avatarFile) {
          const fileUploadForm = new FormData();
          fileUploadForm.append("avatar", avatarFile);
  
          const response = await api.patch("/users/avatar", fileUploadForm);
          user.avatar = response.data.avatar;
        }
  
        await api.put("/users", user);
  
        localStorage.setItem("@rocketnotes:user", JSON.stringify(user));
  
        setData({
          token: data.token,
          user,
        });
  
        alert("Perfil atualizado!");
      } catch (error) {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possível atualizar o perfil.");
        }
      }
    };
  
    function signOut() {
      localStorage.removeItem("@rocketnotes:token");
      localStorage.removeItem("@rocketnotes:user");
  
      setData({});
    }
<<<<<<< HEAD
  
  
=======

    async function updateProfile({ user, avatarFile, }) {
        try {
            if (avatarFile) {
                const fileUpdateForm = new FormData();
                fileUpdateForm.append('avatar', avatarFile);

                const response = await api.patch("/users/avatar", fileUpdateForm);
                user.avatar = response.data.avatar;
                console.log(response)
            }

            await api.put("/users", user);
            localStorage.setItem("@rocketnotes:user", JSON.stringify(user));

            setData({ user, token: data.token });
            alert("Perfil atualizado!");

        } catch (error) {
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert("Não foi possível atualizar o perfil.")
            }
        }
    };


>>>>>>> 3987cb209ac9d381a2759f351c978a6edf1897e9
    useEffect(() => {
      const token = localStorage.getItem("@rocketnotes:token");
      const user = localStorage.getItem("@rocketnotes:user");
  
      if (token && user) {
        api.defaults.headers.authorization = `Bearer ${token}`;
  
        setData({
          token,
          user: JSON.parse(user)
        });
      }
    }, []);
  
    return (
<<<<<<< HEAD
      <AuthContext.Provider value={{
        signIn,
        signOut,
        updatedProfile,
        user: data.user
      }}>
        {children}
      </AuthContext.Provider>
=======
        <AuthContext.Provider value={{ singIn, user: data.user, singOut, updateProfile, }}>
            {children}
        </AuthContext.Provider>
>>>>>>> 3987cb209ac9d381a2759f351c978a6edf1897e9
    )
  }
  
  function useAuth() {
    const context = useContext(AuthContext);
  
    return context;
  }
  
  export { AuthProvider, useAuth };