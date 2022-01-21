//Libraries
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

//Componets
import CardService from "../../componets/CardService";

//Styles
import * as S from './styles'

const Home = () => {
    const navigation = useNavigation();
    const [services,setState] = useState();

    //Get services from api
    useEffect(() => {
        //Request...
    },[])

    const newService = () => {
        navigation.navigate("Create");
    }

    return (
        <S.Wrapper>
            <S.Container>
                <S.Title>Serviços</S.Title>
                    
                <CardService />
                <CardService />
                <CardService />
            </S.Container>
            {/* Suggestion: Transform FloatButton in component */}
            <S.FloatButton onPress={newService}>
                <S.Add>+</S.Add>
            </S.FloatButton>
        </S.Wrapper>
    );
}

export default Home;
