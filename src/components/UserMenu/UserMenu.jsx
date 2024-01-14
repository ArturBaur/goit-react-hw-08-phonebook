import { useDispatch } from 'react-redux';
import {
  LogOutBtn,
  UserAvatar,
  UserEmail,
  UserName,
  UserNavigation,
  UserWrapper,
} from './UserMenu.styled';
import { logOut } from '../../redux/auth/operations';
import { useAuth } from 'hooks/useAuth';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserNavigation>
      <UserWrapper>
        <div>
          <UserName>{user.name}</UserName>
          <UserEmail>{user.email}</UserEmail>
        </div>
        <UserAvatar></UserAvatar>
      </UserWrapper>
      <LogOutBtn type="button" onClick={() => dispatch(logOut())}>
        LogOut
      </LogOutBtn>
    </UserNavigation>
  );
};

export default UserMenu;
