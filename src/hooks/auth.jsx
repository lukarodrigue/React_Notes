import { createContext, useContext, useState, useEffect } from "react";

import { api } from '../services/api';
import { json } from "react-router-dom";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [data, setData] = useState({});

    async function singIn({ email, password }) {
        try {
            const response = await api.post("/sessions", { email, password });
            const { token, user } = response.data;


            localStorage.setItem("@rocketnotes:user", JSON.stringify(user));
            localStorage.setItem("@rocketnotes:token", token)

            api.defaults.headers.common['authorization'] = `Bearer ${token}`;

            setData({ user, token });


        } catch (error) {
            if (error.response) {
                alert(error.response.data.message)
            } else {
                alert("Não foi possivel entrar. ")
            }
        }

    };

    function singOut() {
        localStorage.removeItem("@rocketnotes:token");
        localStorage.removeItem("@rocketnotes:user");

        setData({});
    }

    async function updateProfile({ user, avatarFile }) {
        try {
            if (avatarFile) {
                const fileUpdateForm = new FormData();
                fileUpdateForm.append("avatar", avatarFile);

                const response = await api.patch("/users/avatar", fileUpdateForm);
                user.avatar = response.data.avatar;
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


    useEffect(() => {
        const token = localStorage.getItem("@rocketnotes:token");
        const user = localStorage.getItem("@rocketnotes:user");

        if (token && user) {
            api.defaults.headers.common['authorization'] = `Bearer ${token}`;

            setData({
                token,
                user: JSON.parse(user)
            })
        }
    }, [])

    return (
        <AuthContext.Provider value={{ singIn, user: data.user, singOut, updateProfile }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext);

    return context;
}


export { AuthProvider, useAuth };