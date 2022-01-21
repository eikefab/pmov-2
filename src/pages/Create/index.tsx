//Libraries
import React, { useState } from "react";

//Styles
import * as S from './styles';

const Create = () => {
    //States
    const [title, setTitle] = useState<string>();
    const [description, setDescription] = useState<string>();
    const [customer, setCustomer] = useState<string>();


    return (
        <S.Wrapper>
            <S.Container>
                <S.Title>Criar novo serviço</S.Title>
                <S.Input
                    placeholder="Title*"
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

                <S.Button>
                    <S.TextButton>Criar</S.TextButton>
                </S.Button>                
            </S.Container>
        </S.Wrapper>
    );

}

export default Create;