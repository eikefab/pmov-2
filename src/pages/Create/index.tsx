//Libraries
import React, { useState } from "react";

//Components
import { Alert } from "react-native";

//Styles
import * as S from './styles';

//Api
import api from "../../api";

const Create = ({ navigation }: any) => {
    //States
    const [title, setTitle] = useState<string>();
    const [description, setDescription] = useState<string>();
    const [customer, setCustomer] = useState<string>();

    async function submit() {
        if (!title || !description || !customer) {
            return Alert.alert("Ops!", "Os campos marcados com * são obrigatórios.");
        }

        await api.create(title, description, customer);

        navigation.navigate("Home");
    }

    return (
        <S.Wrapper>
            <S.Container>
                <S.Title>Criar novo serviço</S.Title>
                <S.Input
                    placeholder="Título*"
                    onChangeText={(value) => setTitle(value)}
                    value={title}
                />
                <S.Input
                    placeholder="Descrição*"
                    onChangeText={(value) => setDescription(value)}
                    value={description}
                />
                <S.Input
                    placeholder="Cliente*"
                    onChangeText={(value) => setCustomer(value)}
                    value={customer}
                />

                <S.Button onPress={submit}>
                    <S.TextButton>Criar</S.TextButton>
                </S.Button>                
            </S.Container>
        </S.Wrapper>
    );

}

export default Create;