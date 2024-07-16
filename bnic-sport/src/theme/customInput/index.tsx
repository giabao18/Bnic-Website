import styled from '@emotion/styled';
import { Input } from 'antd';
import { customColors } from '..';

export const CustomInputFooter = styled(Input)({
    border: 'none',
    borderBottom: '1px solid',
    borderRadius: 0,
    backgroundColor: 'transparent',
    '&:focus': {
        backgroundColor: 'transparent',
    },
    '&:hover': {
        backgroundColor: 'transparent',
    },
});

export const CustomInputWithoutBG = styled(Input)({
    backgroundColor: 'transparent',
});

export const CustomInputSignInAndSignUp = styled(Input)({
    '::placeholder': {
        color: 'red',
    },
});
