import React from "react";

import Feed from "../Feed";

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from "./styles";

const ProfilePage = () => (
  <Container>
    <Banner>
      <Avatar />
    </Banner>

    <ProfileData>
      <EditButton outlined>Editar Perfil</EditButton>

      <h1>Anderson Gomes</h1>
      <h2>@mranderson86</h2>

      <p>
        Developer at <a href="http://www.haygostudios">@HayGo Studios</a>
      </p>

      <ul>
        <li>
          <LocationIcon />
          São Paulo, Brasil
        </li>

        <li>
          <CakeIcon />
          Nascido(a) em 11 de Fevereiro de 1986
        </li>
      </ul>

      <Followage>
        <span>
          seguindo <strong>94</strong>
        </span>
        <span>
          <strong>672 </strong> seguidores
        </span>
      </Followage>
    </ProfileData>

    <Feed />
  </Container>
);

export default ProfilePage;
