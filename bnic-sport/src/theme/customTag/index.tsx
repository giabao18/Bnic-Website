import styled from '@emotion/styled';
import { Tag } from 'antd';
import { customColors } from '..';

export const CustomTag = styled(Tag)({
    background: `${customColors.colorPrimary}`,
    fontSize: '18px',
});
