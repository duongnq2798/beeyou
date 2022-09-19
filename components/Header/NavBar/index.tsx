import { useRouter } from 'next/router';
import styled, { css } from 'styled-components';
import { Images } from '../../../configs/contants/images';
import { IMenuItem, MenuLists } from '../../../configs/data/menu';

interface IBorderBottom {
  isActive: boolean;
}

const Flex = css`
  display: flex;
`;

const Wrapper = styled.section`
  ${Flex}
  justify-content: space-between;
  padding-top: 33px;
  padding-bottom: 33px;
`;

const WrapperLeft = styled.div`
  ${Flex}
  gap: 63px;
`;

const Logo = styled.img`
  width: 56px;
  height: 56px;
`;

const Menu = styled.ul`
  ${Flex}
  gap: 40px;
  list-style-type: none;
`;

const BorderBottom = styled.div<IBorderBottom>`
  position: absolute;
  opacity: ${(props) => (props.isActive ? 1 : 0)};
  bottom: ${(props) => (props.isActive ? '0px' : '-5px')};
  left: 0;
  width: 100%;
  height: 8px;
  background: #ffc800;
  border-radius: 12px;
  z-index: -1;
  transition: 0.25s ease-in-out;
`;

const MenuItem = styled.li`
  font-weight: 700;
  font-size: 16px;
  color: #000000;
  z-index: 2;
  position: relative;
  cursor: pointer;

  :hover ${BorderBottom} {
    bottom: 2px;
    opacity: 1;
  }
`;

const WrapperRight = styled.div`
  ${Flex}
  align-items: center;
  justify-content: center;
  position: relative;
  width: 40px;
  height: 40px;
  background: #ffc800;
  border-radius: 50%;
`;

const CardImage = styled.img`
  width: 22px;
  height: 22px;
`;

const Badge = styled.div`
  position: absolute;
  top: -5px;
  right: -5px;
  width: 20px;
  height: 20px;
  background: #009efe;
  border: 1.1875px solid #f4f4f4;
  text-align: center;
  border-radius: 50%;
  font-weight: 700;
  font-size: 12px;
  color: #ffffff;
`;

const NavBar = () => {
  const router = useRouter();
  return (
    <Wrapper>
      <WrapperLeft>
        <Logo src={Images.icon.beeyou} />
        <Menu>
          {MenuLists.map((menuItem: IMenuItem) => {
            return (
              <MenuItem key={menuItem.id}>
                {menuItem.menuItem}
                <BorderBottom isActive={router.pathname === menuItem.route} />
              </MenuItem>
            );
          })}
        </Menu>
      </WrapperLeft>
      <WrapperRight>
        <CardImage src={Images.icon.cart} />
        <Badge>2</Badge>
      </WrapperRight>
    </Wrapper>
  );
};

export default NavBar;
