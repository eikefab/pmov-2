import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, ActivityIndicator, TouchableOpacity } from "react-native";
import { Service } from "../../@types";

import api from "../../api";

export default ({ navigation }: any) => {

    const [data, setData] = useState<Array<Service>>();

    async function retrieve() {
        const record = await api.index();

        return setData(record);
    }

    useEffect(() => {
        retrieve();

        navigation.addListener("focus", async () => await retrieve());
    });

    function render() {
        if (!data) return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
                <ActivityIndicator />
            </View>
        );

        return (
            <View style={{ flex: 1, }}>
                <Text>Serviços</Text>
                <ScrollView style={{ flex: 1, }}>
                    {
                        data.map((item) => {
                            return <ServiceItem {...item } navigation={navigation} />
                        })
                    }
                </ScrollView>

                // Implementar float button ou um botão normal mesmo
            </View>
        );
    }

    return render();

}

const ServiceItem = ({ id, title, description, costumer, state, navigation }: Service & { navigation: any }) => (
    <TouchableOpacity onPress={() => navigation.navigate("Item", { id })}>
        <Text>{ title }</Text>
    </TouchableOpacity>
);