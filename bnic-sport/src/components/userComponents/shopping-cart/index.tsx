import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Button, Flex, Row, Typography, theme, Divider } from 'antd';
import './style.scss';
import { IRootState } from 'src/redux/store';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeItem } from 'src/redux/userApi/cart/cartSlice';
import { customColors } from 'src/theme';
import { CustomButton2 } from 'src/theme/customButton';
import { CustomDrawer } from 'src/theme/customDrawer';
import { CustomTypographyCartPrice } from 'src/theme/customTypography';
import { CloseOutlined, DeleteOutlined } from '@ant-design/icons';

export interface IShoppingCart {
    isCartOpen: boolean;
    handleCloseShoppingCart: () => void;
}

const { Text } = Typography;

export const ShoppingCart = ({ isCartOpen, handleCloseShoppingCart }: IShoppingCart) => {
    const { token } = theme.useToken();
    const cart = useSelector((state: IRootState) => state.cart);
    const dispatch = useDispatch();

    const handleRemoveItem = (id: string) => {
        dispatch(removeItem(id));
    };

    return (
        <CustomDrawer
            title="Cart"
            onClose={handleCloseShoppingCart}
            open={isCartOpen}
            style={{
                background: 'rgba(8, 8, 8, 0.78)',
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(9px)',
            }}
            footer={
                <Flex vertical justify="flex-end" gap={20}>
                    <Divider style={{ background: '#ffffff', margin: '0' }} />
                    <Flex justify="space-between">
                        <CustomTypographyCartPrice>Subtotal</CustomTypographyCartPrice>
                        <CustomTypographyCartPrice>${cart.totalPrice}</CustomTypographyCartPrice>
                    </Flex>
                    <Flex justify="space-between">
                        <CustomTypographyCartPrice>Tax</CustomTypographyCartPrice>
                        <CustomTypographyCartPrice>$0</CustomTypographyCartPrice>
                    </Flex>
                    <Flex justify="space-between">
                        <CustomTypographyCartPrice>Total</CustomTypographyCartPrice>
                        <CustomTypographyCartPrice>${cart.totalPrice + 0}</CustomTypographyCartPrice>
                    </Flex>
                    <Flex justify="flex-end">
                        <Link to="/bag">
                            <CustomButton2
                                size="large"
                                style={{
                                    fontWeight: '600',
                                    float: 'right',
                                    width: '108px',
                                }}
                                htmlType="submit"
                                onClick={handleCloseShoppingCart}
                            >
                                Checkout
                            </CustomButton2>
                        </Link>
                    </Flex>
                </Flex>
            }
        >
            <Flex vertical align="center">
                <Flex
                    style={{
                        flexDirection: 'column',
                        overflowX: 'hidden',
                        overflowY: 'auto',
                        paddingRight: '12px',
                        boxSizing: 'border-box',
                        width: '100%',
                    }}
                >
                    {cart.items.map((item) => (
                        <Flex vertical style={{ width: '100%' }}>
                            <Text ellipsis style={{ fontSize: '18px', fontWeight: '500', marginBottom: '18px' }}>
                                {item.name}
                            </Text>
                            <Flex
                                key={item.id}
                                style={{
                                    width: '100%',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                }}
                            >
                                <Flex align="center" gap={10}>
                                    <Image
                                        src={item.image_dir}
                                        alt="product image"
                                        preview={{ mask: null }}
                                        style={{ width: '70px', borderRadius: '6px' }}
                                    ></Image>
                                    <Flex gap={5} style={{ flexDirection: 'column' }}>
                                        <Flex
                                            align="center"
                                            gap={10}
                                            style={{
                                                fontSize: '16px',
                                                fontWeight: '600',
                                            }}
                                        >
                                            <Text
                                                style={{
                                                    fontSize: '16px',
                                                    fontWeight: '500',
                                                }}
                                            >
                                                {item.quantity}
                                            </Text>
                                            <CloseOutlined
                                                style={{ marginTop: '3px', color: customColors.colorQuaternaryText }}
                                            />
                                            <Text
                                                style={{
                                                    fontSize: '16px',
                                                    fontWeight: '500',
                                                    color: token.colorPrimary,
                                                }}
                                            >
                                                ${item.price}
                                            </Text>
                                        </Flex>
                                    </Flex>
                                </Flex>
                                <DeleteOutlined
                                    style={{
                                        fontSize: '20px',
                                        color: customColors.colorQuaternaryText,
                                        cursor: 'pointer',
                                    }}
                                    className="close-btn"
                                    onClick={() => handleRemoveItem(item.id)}
                                />
                            </Flex>
                            <Divider style={{ background: 'rgb(89 81 81 / 44%)', margin: '24px 0 22px 0' }} />
                        </Flex>
                    ))}
                </Flex>
            </Flex>
        </CustomDrawer>
    );
};
