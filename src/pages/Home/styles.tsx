import styled from 'styled-components/native';


export const Wrapper = styled.SafeAreaView`
    flex: 1;
    padding-top: 60;
    /* background-color: red; */
    align-items: center;
`
export const Container = styled.View`
    flex: 1; 
    width: 85%; 
    /* background-color: blue; */
`
export const Title = styled.Text`
    font-size: 24px;
    text-align: left;
    font-weight: bold;
    margin-bottom: 45px;
`
export const List = styled.FlatList`
    font-size: 24;
    text-align: left;
    font-weight: bold;
`
export const FloatButton = styled.TouchableOpacity`
    position: absolute;
    width: 70px;
    height: 70px;
    align-items: center;
    justify-content: center;
    right: 30px;
    bottom: 30px;
    background-color: #039900;
    border-radius: 35px;
`

export const Add = styled.Text`
    font-size: 24px;
    color: #fff;
`

export const CenterContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`

export const ScrollContainer = styled.ScrollView`
    flex: 1;
`
