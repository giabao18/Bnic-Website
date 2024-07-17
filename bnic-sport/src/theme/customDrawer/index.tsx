import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { Drawer, Modal } from 'antd';

export const CustomDrawer = styled(Drawer)({
    background: 'rgba(8, 8, 8, 0.78)',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(8px)',
    WebkitBackdropFilter: 'blur(9px)',
});
