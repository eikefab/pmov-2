//Libraries
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

//Componets
import CardService from "../../components/CardService";
import { ActivityIndicator } from "react-native";

//Styles
import * as S from './styles'

//Api
import api from "../../api";
import { Service } from "../../@types";

const Home = () => {
    // Should be any because it's "never" (????)
    const navigation: any = useNavigation();
    const [services, setServices] = useState<Array<Service>>();

    async function retrieve() {
        const record = await api.index();

        setServices(record);
    }

    useEffect(() => {
        retrieve();

        // Avoid update issues
        navigation.addListener("focus", async () => await retrieve());
    }, []);

    const newService = () => {
        navigation.navigate("Create");
    }

    return services ? (
        <S.Wrapper>
            <S.Container>
                <S.Title>Serviços</S.Title>
                
                <S.ScrollContainer showsVerticalScrollIndicator={false}>
                    {
                        services.map((service) => {
                            return <CardService { ...service } />
                        })
                    }
                </S.ScrollContainer>
            </S.Container>
            {/* Suggestion: Transform FloatButton in component */}
            <S.FloatButton onPress={newService}>
                <S.Add>+</S.Add>
            </S.FloatButton>
        </S.Wrapper>
    ) :
    (
        <S.Wrapper>
            <S.CenterContainer>
                <ActivityIndicator size="large" />
            </S.CenterContainer>
        </S.Wrapper>
    )
}

export default Home;
