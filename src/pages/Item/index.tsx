import React from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";

import Icon from 'react-native-vector-icons/Feather';

import * as S from './styles'

import api from "../../api";

export default ({ navigation, route }: any) => {

    const { id, title, description, customer } = route.params;

    async function handleDelete() {
        await api.delete(id);
        
        navigation.navigate("Home");
    }

    return (
        <S.Container>
            <S.Header>
                <Icon name="arrow-left" size={24} color="#121212" onPress={() => navigation.goBack()} />
                <S.Id>#{ id }</S.Id>
            </S.Header>
            <S.ServiceContainer>
                <S.Title>{ title }</S.Title>
                <S.Description>{ description }</S.Description>
                <S.Client>~ { customer }</S.Client>
            </S.ServiceContainer>

            <S.DeleteButton onPress={handleDelete}>
                <S.Deletar>Deletar</S.Deletar>
            </S.DeleteButton>
        </S.Container>
    );

}