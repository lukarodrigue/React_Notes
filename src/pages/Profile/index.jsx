import { useState } from "react";
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import { Link } from 'react-router-dom';

import { useAuth } from "../../hooks/auth";

import { api } from "../../services/api";

<<<<<<< HEAD
import { Input } from "../../components/Input";
import { Button } from '../../components/Button';
=======
>>>>>>> 3987cb209ac9d381a2759f351c978a6edf1897e9

import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

import { Container, Form, Avatar } from "./styles";

export function Profile() {
<<<<<<< HEAD
  const { user, updatedProfile } = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [passwordOld, setPasswordOld] = useState("");
  const [passwordNew, setPasswordNew] = useState("");
=======
    
    const { user, updateProfile } = useAuth();

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    
    const [passwordOld, setPasswordOld] = useState();
    const [passwordNew, setPasswordNew] = useState();
>>>>>>> 3987cb209ac9d381a2759f351c978a6edf1897e9

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  const [avatar, setAvatar] = useState(avatarUrl);
  const [avatarFile, setAvatarFile] = useState(null);

  async function handleUpdate() {
    const updated = {
      name,
      email,
      password: passwordNew,
      old_password: passwordOld
    };

<<<<<<< HEAD
    const userUpdated = Object.assign(user, updated);
=======
        const imagePreview = URL.createObjectURL(file)
        setAvatar(imagePreview);
>>>>>>> 3987cb209ac9d381a2759f351c978a6edf1897e9

    await updatedProfile({ user: userUpdated, avatarFile });
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  }

  return (
    <Container>
      <header>
        <Link to="/">
          <FiArrowLeft size={24} />
        </Link>
      </header>

      <Form>
        <Avatar>
          <img
            src={avatar}
            alt={user.name}
          />

          <label htmlFor="avatar">
            <FiCamera />

            <input
              id="avatar"
              type="file"
              onChange={handleChangeAvatar}
            />
          </label>
        </Avatar>

        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <Input
          placeholder="Senha atual"
          type="password"
          icon={FiLock}
          onChange={e => setPasswordOld(e.target.value)}
        />

        <Input
          placeholder="Nova senha"
          type="password"
          icon={FiLock}
          onChange={e => setPasswordNew(e.target.value)}
        />

        <Button title="Salvar" onClick={handleUpdate} />
      </Form>
    </Container>
  )
}