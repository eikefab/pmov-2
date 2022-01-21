import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
    flex: 1;
    padding-top: 60;
    align-items: center;
`
export const Container = styled.View`
    flex: 1; 
    width: 85%; 
`
export const Title = styled.Text`
    font-size: 24px;
    text-align: left;
    font-weight: bold;
    margin-bottom: 45px;
`
export const Input = styled.TextInput`
    width: 100%;
    height: 70px;
    border-radius: 5px;
    font-size: 15px;
    padding: 10px;
    background-color: #E5E5E5
    margin-bottom: 10%;
`
export const Button = styled.TouchableOpacity`
    width: 100%;
    height: 60px;
    margin-top: 80%;
    border-radius: 5px;
    align-items: center;
    justify-content: center
    background-color:  #039900;
`
export const TextButton = styled.Text`
    font-size: 20px
    color: #fff;
`