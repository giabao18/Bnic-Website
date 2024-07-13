import styled from '@emotion/styled';
import { Menu } from 'antd';

export const CustomMenu = styled(Menu)({
    backgroundColor: 'rgba(8, 8, 8, 0.78)',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(6.4px)',
    webkitBackdropFilter: 'blur(6.4px)',
    color: '#ffffff',
});

export const CustomMenuShopPage = styled(Menu)({
    backgroundColor: 'transparent',
    '&:active': {
        backgroundColor: 'transparent',
    }
})