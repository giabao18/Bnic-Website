import { ThemeConfig } from 'antd';
import { ButtonConfig, MenuConfig } from 'antd/es/config-provider/context';

export const customColors = {
    colorRedBadge: '#E97171',
    colorPrimary: '#7d9e41',
    colorGreenBadgeColor: '#2EC1AC',
    colorOverlay: '#3A3A3A',
    lightGrayColor: 'rgb(220 220 220)',
    colorSecondaryText: '#93BA4C',
    colorTertiaryText: '#3A3A3A',
    colorQuaternaryText: '#898989',
    colorBgSecondary: '#F9F1E7',
    colorYellow: '#FFC700',
};

export const colorPalette = {
    color1: '#0c1105',
    color2: '#1c250d',
    color3: '#2c3817',
    color4: '#425422',
    color5: '#607931',
    colorPrimary: '#9bb366',
    color7: '#9bb366',
    color8: '#b9c993',
    color9: '#d3d9c2',
    color10: '#e5e8db',
};

export const navBarHeight: string = '67px';
export const marginBottom: string = '80px';

export const textSize = {
    title: '28px',
    content: '18px',
};

export const theme: ThemeConfig = {
    token: {
        colorPrimary: '#7d9e41',
        colorPrimaryText: '#000000',
        // colorPrimaryTextHover: '#9F9F9F',
        colorBgBase: '#000000',
        colorText: '#ffffff',
        colorTextPlaceholder: '#ffffff63',
        colorBgContainer: '#000000',
    },
    components: {
        Menu: {
            // colorBgBase: 'rgba(8, 8, 8, 0.78)',
            itemColor: '#ffffff',
            groupTitleFontSize: 18,
            itemHoverColor: '#93BA4C',
            itemActiveBg: 'transparent',
            itemSelectedBg: 'transparent',
        },
        Pagination: {
            itemSize: 38,
        },
        Layout: {
            colorBgTrigger: '#BC933A',
        },
        Form: {},
        Table: {
            bodySortBg: '#000000',
            borderColor: '#898989',
        },
        Rate: {
            colorText: '#ffffff',
        },
    },
};

export const menuConfig: MenuConfig = {};
