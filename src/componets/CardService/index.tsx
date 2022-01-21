//Styles
import * as S from './styles'
import { Service } from '../../@types/index';

import { useNavigation } from '@react-navigation/native';

const CardService = ({ id, title, description, customer, state }: Service) => {
    const navigation: any = useNavigation();

    return (
        <S.Wrapper onPress={() => navigation.navigate('Item', { id, title, description, customer })}>
            <S.Container>
                <S.Info>
                    <S.Title>{ title }</S.Title>
                    <S.Client>{ customer }</S.Client>
                </S.Info>
                <S.Status>
                    <S.Title>#{ id }</S.Title>
                    {/* Add Image: Status Check */}
                </S.Status>
            </S.Container>
        </S.Wrapper>
    )
}

export default CardService;