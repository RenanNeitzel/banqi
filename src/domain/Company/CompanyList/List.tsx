import React from 'react';
import {ListRenderItem} from 'react-native';
import {FlatList, HStack, Pressable, Text, VStack} from 'native-base';
import {Company} from '@services/companies';
import {VectorIcon} from '@components/common/Icon';
import {Loader} from '@components/common/Loader';
import {cnpjFormat} from '@utils/cnpjFormat';

type ListProps = {
  companies?: Company[];
  loading: boolean;
  onSelect: (cnpj: Company['cnpj']) => void;
};

export const List = ({companies, loading, onSelect}: ListProps) => {
  const Item: ListRenderItem<Company> = ({item}) => (
    <Pressable onPress={() => onSelect(item.cnpj)}>
      <HStack
        justifyContent="space-between"
        alignItems="center"
        padding={3}
        borderBottomWidth={1}
        borderBottomColor="black"
        borderTopColor="black">
        <VStack>
          <Text fontWeight="bold" fontSize="md">
            {item.name}
          </Text>
          <Text>{cnpjFormat(item.cnpj)}</Text>
        </VStack>
        <VectorIcon name="chevron-right" color="black" />
      </HStack>
    </Pressable>
  );

  return (
    <VStack flexGrow={1}>
      {loading ? (
        <Loader description="Estamos buscando as empresas" />
      ) : (
        <FlatList data={companies} renderItem={Item} marginBottom="104" />
      )}
    </VStack>
  );
};
