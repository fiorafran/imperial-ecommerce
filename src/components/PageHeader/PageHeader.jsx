import React from 'react';
import styled from './styles';

const PageHeader = ({ titleComponent, bodyComponent }) => {
  /*  Conteneedor del Headers, la idea es que este componente Page Header sea reusable para otras paginas, por lo tanto es un contenedor reusable.  */
  return (
    <styled.ContainerHeader>
      {titleComponent}
      {bodyComponent}
    </styled.ContainerHeader>
  );
};

export default PageHeader;
