import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from "react-native";
import { Service } from "../../@types";

import api from "../../api";

export default () => {

    const [data, setData] = useState<Array<Service>>();

    async function retrieve() {
        const record = await api.index();

        return setData(record);
    }

    useEffect(() => {
        retrieve();
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
                            return <ServiceItem {...item } />
                        })
                    }
                </ScrollView>
            </View>
        );
    }

    return render();

}

const ServiceItem = ({ id, title, description, costumer, state }: Service) => (
    <View>
        <Text>{ title }</Text>
    </View>
);