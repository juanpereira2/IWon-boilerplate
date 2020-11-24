import * as S from './styles'

const Main = ({
    title = 'react Avançado',
    description = 'React, Next, typescript and Styled Component'
}) => (
        <S.Wrapper>
            <S.Logo
                src="/img/logo.svg"
                alt="imagem logo e texto do lado react avançado"
            />
            <S.Title>{title}</S.Title>
            <S.Description>{description} </S.Description>
            <S.Ilustration src="/img/hero-illustration.svg" alt="dev em frente ao pc" />
        </S.Wrapper>
    )

export default Main
