import {
    Image,
    Menu,
    Col,
    Row,
    Button,
    Flex,
    ConfigProvider,
    theme,
    Badge,
    Dropdown,
    MenuProps,
    Popover,
    Modal,
    Drawer,
} from 'antd';
import React, { Component, useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router';
import { assets } from '../../../assets';
import { icons } from 'antd/es/image/PreviewGroup';
import {
    ShoppingOutlined,
    LogoutOutlined,
    LoginOutlined,
    UserOutlined,
    SearchOutlined,
    ShoppingCartOutlined,
} from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart } from '../shopping-cart';
import './style.scss';
import MenuItem from 'antd/es/menu/MenuItem';
import { useSelector } from 'react-redux';
import { IAppDispatch, IRootState } from 'src/redux/store';
import { useDispatch } from 'react-redux';
import { setSelectedPath } from 'src/redux/navbar';
import { signOut } from 'src/redux/api/authSlice';
import Cookies from 'js-cookie';
import { fetchProducts } from 'src/redux/products/productsSlice';
import { Footer } from '../footer';
import { getUserInfo } from 'src/redux/api/authApi';
import { resetCartItems } from 'src/redux/userApi/cart/cartSlice';
import { CustomMenu } from 'src/theme/customMenu';
import { CustomDrawer } from 'src/theme/customDrawer';
import { CustomButton, CustomButton2 } from 'src/theme/customButton';
import { colorPalette, customColors } from 'src/theme';

export const Navbar = () => {
    const location = useLocation();
    const dispatch = useDispatch<IAppDispatch>();
    const selectedPath = useSelector((state: IRootState) => state.navbarPath.path);
    const isAuthenticated = Cookies.get('accessToken');
    const products = useSelector((state: IRootState) => state.cart.items) ?? null;
    const userInfoRole = useSelector((state: IRootState) => state.auth.role);
    const [isCartOpen, setIsCartOpen] = useState(false);

    // cart handle events

    const handleShowCart = () => {
        setIsCartOpen(true);
    };

    const handleCloseShoppingCart = () => {
        setIsCartOpen(false);
    };

    const handleCheckoutShoppingCart = () => {
        setIsCartOpen(false);
    };

    // Cart product Total Amount
    const cartProductCount = products.reduce((total, product) => {
        return total + product.quantity;
    }, 0);
    const navigate = useNavigate();

    // fetch Products
    const productsStatus = useSelector((state: IRootState) => state.products.status);

    // get user information
    useEffect(() => {
        if (productsStatus == 'idle') {
            dispatch(fetchProducts());
        }
        if (isAuthenticated) {
            dispatch(getUserInfo());
        }
    });

    // navigate with pathname
    useEffect(() => {
        if (userInfoRole === 'user' || userInfoRole === 'unknown')
            switch (location.pathname) {
                case '/':
                    dispatch(setSelectedPath('home'));
                    break;
                case '/shop':
                    dispatch(setSelectedPath('shop'));
                    break;
                case '/about':
                    dispatch(setSelectedPath('about'));
                    break;
                case '/contact':
                    dispatch(setSelectedPath('contact'));
                    break;
                default:
                    dispatch(setSelectedPath(''));
            }
        if (userInfoRole === 'admin') dispatch(setSelectedPath('admin'));
    }, [location.pathname, dispatch]);

    // reload getUserInfo by token

    const handleUserSignOut = () => {
        dispatch(signOut());
        dispatch(resetCartItems());
        navigate('/');
    };

    return (
        <>
            <Row
                gutter={16}
                style={{
                    padding: '8px 0 0px 0',
                    position: 'fixed',
                    margin: '0',
                    zIndex: '50',
                    width: '100%',
                    top: '0',
                    boxShadow: '0 0 10px rgba(0,0,0,0.2)',
                }}
                className="user_navbar"
            >
                <Col className="navbar_logo" span={6}>
                    <Link to="/">
                        <img src={assets.logo} alt="logo" width={90} style={{ padding: '12px 0 16px 22px' }} />
                    </Link>
                </Col>

                <Col className="navbar_navigation" span={12} style={{ display: 'flex', justifyContent: 'center' }}>
                    <Menu
                        style={{
                            fontSize: '18px',
                            fontWeight: '400',
                            background: 'none',
                            color: '#ffffff',
                        }}
                        mode="horizontal"
                        selectedKeys={[selectedPath]}
                    >
                        <MenuItem key="home" className="user_navbar_menu_item">
                            <Link to="/">Home</Link>
                        </MenuItem>
                        <MenuItem key="shop" className="user_navbar_menu_item">
                            <Link to="/shop">Shop</Link>
                        </MenuItem>
                        <MenuItem key="contact" className="user_navbar_menu_item">
                            <Link to="/contact">Blog</Link>
                        </MenuItem>
                        <MenuItem key="news" className="user_navbar_menu_item">
                            <Link to="/news">News</Link>
                        </MenuItem>
                        <MenuItem key="about" className="user_navbar_menu_item">
                            <Link to="/about">About us</Link>
                        </MenuItem>
                    </Menu>
                </Col>

                <Col
                    className="navbar_button"
                    span={6}
                    style={{ display: 'flex', justifyContent: 'flex-end', paddingRight: '10px' }}
                >
                    <Flex gap="large" wrap="wrap" style={{ paddingTop: '4px' }}>
                        <ConfigProvider theme={{ components: { Button: { textHoverBg: '#ffffff' } } }}>
                            {isAuthenticated && (
                                <Badge>
                                    <Button
                                        icon={<UserOutlined style={{ fontSize: '18px' }} />}
                                        style={{ background: 'transparent', border: 0, boxShadow: 'none' }}
                                        size="large"
                                        onClick={() => navigate('/profile')}
                                    />
                                </Badge>
                            )}

                            {/* <Badge>
                                        <Button
                                            icon={<SearchOutlined style={{ fontSize: '18px' }} />}
                                            style={{ background: 'transparent', border: 0, boxShadow: 'none' }}
                                            size="large"
                                            // onClick={() => handleOnClickButton(ButtonMenu[1].path)}
                                        />
                                    </Badge> */}
                            <Badge>
                                <Button
                                    icon={<SearchOutlined style={{ fontSize: '18px' }} />}
                                    style={{ background: 'transparent', border: 0, boxShadow: 'none' }}
                                    size="large"
                                />
                            </Badge>

                            <Badge>
                                <Button
                                    icon={<ShoppingOutlined style={{ fontSize: '18px' }} />}
                                    style={{ background: 'transparent', border: 0, boxShadow: 'none' }}
                                    size="large"
                                />
                            </Badge>

                            <Badge count={cartProductCount} offset={[-8, 10]} size="small">
                                {/* <Popover
                                    placement="bottomRight"
                                    arrow={{ pointAtCenter: true }}
                                    content={<ShoppingCart />}
                                    open={true}
                                    className='user_navbar_cart_popover'
                                >
                                    <Button
                                        icon={<ShoppingCartOutlined style={{ fontSize: '18px' }} />}
                                        size="large"
                                        style={{ background: 'transparent', border: 0, boxShadow: 'none' }}
                                    />
                                </Popover> */}
                                <Button
                                    icon={<ShoppingCartOutlined style={{ fontSize: '18px' }} />}
                                    size="large"
                                    style={{ background: 'transparent', border: 0, boxShadow: 'none' }}
                                    onClick={handleShowCart}
                                />
                                {/* <CustomModal
                                    title="Shopping Cart"
                                    open={isCartOpen}
                                    onOk={handleCheckoutShoppingCart}
                                    onCancel={handleCloseShoppingCart}
                                    style={{ top: '0', float: 'right', height: '100%', paddingBottom: '0' }}
                                    
                                >
                                    <Flex>
                                        <div>123</div>
                                    </Flex>
                                </CustomModal> */}
                                <CustomDrawer
                                    title="Shopping Cart"
                                    onClose={handleCloseShoppingCart}
                                    open={isCartOpen}
                                    style={{
                                        background: 'rgba(8, 8, 8, 0.78)',
                                        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                                        backdropFilter: 'blur(8px)',
                                        WebkitBackdropFilter: 'blur(9px)',
                                    }}
                                    footer={
                                        // <Flex justify="space-between" align="center" style={{ margin: '20px 10px' }}>
                                        //     <CustomButton size="large" style={{ fontWeight: '600' }}>
                                        //         Cart
                                        //     </CustomButton>
                                        <CustomButton2
                                            size="large"
                                            style={{
                                                fontWeight: '600',
                                                margin: '18px 10px',
                                                float: 'right',
                                            }}
                                            htmlType="submit"
                                        >
                                            Checkout
                                        </CustomButton2>
                                        // </Flex>
                                    }
                                >
                                    <ShoppingCart />
                                </CustomDrawer>
                            </Badge>

                            {!isAuthenticated && (
                                <Badge>
                                    <Button
                                        icon={<LoginOutlined style={{ fontSize: '18px' }} />}
                                        style={{ background: 'transparent', border: 0, boxShadow: 'none' }}
                                        size="large"
                                        onClick={() => navigate('/signIn')}
                                    />
                                </Badge>
                            )}

                            {isAuthenticated && (
                                <Badge>
                                    <Button
                                        icon={<LogoutOutlined style={{ fontSize: '18px' }} />}
                                        style={{ background: 'transparent', border: 0, boxShadow: 'none' }}
                                        size="large"
                                        onClick={() => handleUserSignOut()}
                                    />
                                </Badge>
                            )}
                        </ConfigProvider>
                    </Flex>
                </Col>
            </Row>
            <Outlet />

            <Footer />
        </>
    );
};

export default Navbar;
