import { Button, Typography } from 'antd';
import styled from '@emotion/styled';
import { customColors } from '..';

export const CustomTypographyFooter = styled(Typography)({
    margin: '15px 0',
    fontSize: '16px',
    fontWeight: '500',
});

export const CustomTypographyContent = styled(Typography)({
    fontSize: '18px',
    textAlign: 'justify',
    textJustify: 'inter-word',
});

export const CustomTypographyContentTitle = styled(Typography)({
    fontWeight: '500',
    fontSize: '26px',
    textTransform: 'uppercase',
    color: `${customColors.colorSecondaryText}`,
});

export const CustomTypographyCartPrice = styled(Typography)({
    fontSize: '16px',
    fontWeight: '500',
});

export const CustomTypographyCartPayment = styled(Typography)({
    fontSize: '20px',
    fontWeight: '500',
});
