import styled from 'styled-components/native';


export const Wrapper = styled.TouchableOpacity`
    width: 100%;
    height: 130px;
    background: #E5E5E5;
    border-radius: 5px;
    padding: 20px;
    margin-bottom: 5%;

`
export const Container = styled.View`
    flex: 1; 
    flex-direction: row;
`

export const Info = styled.View`
    width: 80%;
`
export const Status = styled.View`
    width: 20%;
    align-items: flex-end;
    justify-content: space-between;
`
export const Title = styled.Text`
    font-size: 16px;
    text-align: left;
    font-weight: bold;
`
export const Client = styled.Text`
    font-size: 16px;
    text-align: left;
    margin-bottom: 30%;
    /* font-weight: bold; */
`
export const Date = styled.Text`
    font-size: 12px;
    text-align: left;
    /* font-weight: bold; */
`