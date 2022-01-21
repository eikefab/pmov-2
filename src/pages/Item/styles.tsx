import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1; 
    background-color: #fff;
`

export const Header = styled.View`
    flexDirection: row;
    justifyContent: space-between;
    margin-top: 25px;
    padding: 10px 15px;
    background-color: #fff;
`

export const Id = styled.Text`
    font-size: 20px;
`

export const ServiceContainer = styled.View`
    margin-top: 70px;
    padding: 20px 40px;
    background-color: #fff;
`

export const Title = styled.Text`
    font-size: 20px;
    font-weight: bold;
`

export const Description = styled.Text`
    margin-top: 12px;
    font-size: 18px;
    color: #242424;
`

export const Client = styled.Text`
    font-size: 18px;
    color: #757575;
    margin-top: 5px;
    align-self: flex-end;
`

export const DeleteButton = styled.TouchableOpacity`
    height: 60px;
    background-color: #cc0000
    margin: auto 40px 40px 40px;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
`
export const Deletar = styled.Text`
    font-size: 20px;
    color: #fff;
    font-weight: bold;
    
`
