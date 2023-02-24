import * as S from './style';

const Menu = () => {
    return<S.MenuList>
        <S.ItemList>
            <a href='#'>Sobre Nós</a>
        </S.ItemList>
        <S.ItemList>
            <a href='#'>Nossas Soluções</a>
        </S.ItemList>
        <S.ItemList>
            <a href='#'>Contato</a>
        </S.ItemList>
    </S.MenuList>
}

export default Menu;