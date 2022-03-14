import * as React from 'react';
import {Single} from '@components/templates/Single';
import {Image, HStack, VStack, Text} from 'native-base';

import RenanProfile from '@assets/images/renan-profile.png';

export const Profile = () => {
  return (
    <Single>
      <VStack>
        <HStack>
          <VStack width="full" alignItems="center">
            <Image
              source={RenanProfile}
              alt="Foto Renan"
              resizeMode="contain"
              borderRadius={100}
              size={150}
            />
            <Text marginTop={4} fontSize="lg" fontWeight="bold">
              Renan Neitzel Vieira
            </Text>
          </VStack>
        </HStack>
        <HStack padding={5}>
          <VStack>
            <Text>
              Me chamo Renan, tenho 32 anos e possuo 4 anos de experiência como
              desenvolvedor Front End.
            </Text>
            <Text mt={2}>
              Esse projeto mostra um pouco sobre os meus conhecimentos e
              capacidade de solução de problemas utilizando as melhores práticas
              e padrões de código.
            </Text>
            <Text mt={2}>
              Atualmente, meu principal objetivo é dar continuidade na busca por
              conhecimento e experiência, ajudar empresas a desenvolverem
              grandes aplicações e de qualidade onde eu tenha orgulho de ter
              participado de todo o progresso.
            </Text>
            <Text mt={2}>
              Espero que gostem! Fico na torcidade pelo sucesso! 🙌🏻 🎉
            </Text>
          </VStack>
        </HStack>
      </VStack>
    </Single>
  );
};
