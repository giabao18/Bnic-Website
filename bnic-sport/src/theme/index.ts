import { ThemeConfig } from 'antd';
import { ButtonConfig, MenuConfig } from 'antd/es/config-provider/context';

export const customColors = {
    colorRedBadge: '#E97171',
    colorGreenBadgeColor: '#2EC1AC',
    colorOverlay: '#3A3A3A',
    lightGrayColor: 'rgb(220 220 220)',
    colorSecondaryText: '#93BA4C',
    colorTertiaryText: '#3A3A3A',
    colorPrimary: '#93BA4C',
    colorQuaternaryText: '#898989',
    colorBgSecondary: '#F9F1E7',
    colorYellow: '#FFC700',
};

export const navBarHeight: string = '67px';

export const textSize = {
    title: '28px',
    content: '18px',
};

export const theme: ThemeConfig = {
    token: {
        colorPrimary: '#93BA4C',
        colorPrimaryText: '#000000',
        // colorPrimaryTextHover: '#9F9F9F',
        colorBgBase: '#000000',
        colorText: '#ffffff',
        colorTextPlaceholder: '#ffffff63',
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
            itemActiveBg: '#FFF3E3',
        },
        Layout: {
            colorBgTrigger: '#BC933A',
        },
        Form: {
        }
    },
};

export const menuConfig: MenuConfig = {};
