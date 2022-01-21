//Styles
import * as S from './styles'

const CardService = () => {
    return(
        <S.Wrapper>
            <S.Container>
                <S.Info>
                    <S.Title>Computador não liga</S.Title>
                    <S.Client>Filipe Zaidan</S.Client>
                    <S.Date>Criado em 21/01/2022 às 02:05</S.Date>
                </S.Info>
                <S.Status>
                    <S.Title>#1</S.Title>
                    {/* Add Image: Status Check */}
                    {/* <S.Title>#1</S.Title> */}
                </S.Status>
            </S.Container>
        </S.Wrapper>
    )
}

export default CardService;