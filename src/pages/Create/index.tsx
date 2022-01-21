import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import joi from "joi";

import api from "../../api";

const validator = joi.object({

    title: joi.string(),
    description: joi.string(),
    customer: joi.string(),

});

export default ({ navigation }: any) => {

    const [title, setTitle] = useState<string>();
    const [description, setDescription] = useState<string>();
    const [customer, setCustomer] = useState<string>();

    async function submit() {
        const { error, value } = validator.validate({ title, description, customer });

        // ou avisa o cara, sla
        if (error) return;

        await api.create(value.title, value.description, value.costumer);

        navigation.navigate("Home");
    }

    return (
        <View style={{ flex: 1, }}>
            <View>
                <TextInput
                    placeholder="Título"
                    value={title}
                    onChangeText={setTitle}
                />

                <TextInput
                    placeholder="Descrição do problema"
                    value={description}
                    onChangeText={setDescription}
                />
                
                <TextInput
                    placeholder="Nome do cliente"
                    value={customer}
                    onChangeText={setCustomer}
                />
            </View>

            <Button onPress={submit} title="Criar" />
        </View>
    );

}