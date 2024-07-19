import { useState } from 'react';
import { Flex, Typography, Image, theme, Divider } from 'antd';
import { customColors } from '../../../theme';
import { Link } from 'react-router-dom';
import './styles.scss';
import { decreaseItemQuantity, increaseItemQuantity, removeItem } from 'src/redux/userApi/cart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from 'src/redux/store';
import { DeleteOutlined, HeartOutlined, PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { CustomButton } from 'src/theme/customButton';
import { CustomTypographyCartPayment } from 'src/theme/customTypography';

export const BagPage = () => {
    const { token } = theme.useToken();
    const [shippingFee, setShippingFee] = useState(0);
    const dispatch = useDispatch();
    const cart = useSelector((state: IRootState) => state.cart);
    const handleIncreaseItems = (id: string) => {
        dispatch(increaseItemQuantity(id));
    };

    const handleDecreaseItems = (id: string) => {
        dispatch(decreaseItemQuantity(id));
    };

    const handleRemoveItem = (id: string) => {
        dispatch(removeItem(id));
    };

    const Price = (props: { price: number; quantity: number }) => {
        const { price, quantity } = props;
        return;
    };

    return (
        <Flex
            style={{
                flexDirection: 'column',
                alignItems: 'center',
                width: '100vw',
                position: 'relative',
                padding: '50px 0',
            }}
        >
            <Flex style={{ width: '60%', gap: '30px', marginTop: '50px' }}>
                <Flex vertical style={{ width: '60%' }}>
                    <Typography
                        style={{
                            fontSize: '32px',
                            fontWeight: '600',
                            color: `${customColors.colorPrimary}`,
                            marginBottom: '28px',
                        }}
                    >
                        Bag
                    </Typography>
                    {cart.items.length === 0 ? (
                        <CustomTypographyCartPayment>There are no item in your bag</CustomTypographyCartPayment>
                    ) : (
                        cart.items.map((item) => (
                            <Flex vertical>
                                <Flex gap={20} style={{ width: '100%' }}>
                                    <Image
                                        preview={{ mask: null }}
                                        src={item.image_dir}
                                        style={{ width: '160px', borderRadius: '6px' }}
                                    />

                                    <Flex justify="space-between" style={{ width: '100%' }}>
                                        <Flex gap={20} vertical justify="space-between">
                                            <Flex vertical gap={10}>
                                                <Typography className="cart_product_typography_1">
                                                    {item.name}
                                                </Typography>
                                                <Typography className="cart_product_typography_2">
                                                    {item.category}
                                                </Typography>
                                                <Typography className="cart_product_typography_2">Size 42u</Typography>
                                                <Flex gap={14} style={{ fontSize: '18px' }}>
                                                    <MinusOutlined
                                                        className="cart__table__product_icon_quantity"
                                                        style={{ fontSize: '14px' }}
                                                        onClick={() => handleDecreaseItems(item.id)}
                                                    />
                                                    <Typography className="cart_product_typography_1">
                                                        {item.quantity}
                                                    </Typography>
                                                    <PlusOutlined
                                                        className="cart__table__product_icon_quantity"
                                                        style={{ fontSize: '14px' }}
                                                        onClick={() => handleIncreaseItems(item.id)}
                                                    />
                                                </Flex>
                                            </Flex>
                                            <Flex gap={20}>
                                                <HeartOutlined className="cart__table__product_icon" />
                                                <DeleteOutlined
                                                    className="cart__table__product_icon"
                                                    onClick={() => handleRemoveItem(item.id)}
                                                />
                                            </Flex>
                                        </Flex>
                                        <Flex gap={20} vertical>
                                            <Typography
                                                className="cart_product_typography_1"
                                                style={{ color: `${customColors.colorPrimary}` }}
                                            >
                                                ${item.price * item.quantity}.00
                                            </Typography>
                                        </Flex>
                                    </Flex>
                                </Flex>
                                <Divider style={{ background: `${customColors.colorPrimary}` }} />
                            </Flex>
                        ))
                    )}
                </Flex>

                <Flex
                    vertical
                    style={{
                        width: '40%',
                        padding: '0 30px',
                        borderRadius: '10px',
                    }}
                >
                    <Typography
                        style={{
                            fontSize: '32px',
                            fontWeight: '600',
                            color: `${customColors.colorPrimary}`,
                            marginBottom: '28px',
                        }}
                    >
                        Summary
                    </Typography>
                    <Flex vertical gap={20}>
                        <Flex
                            justify="space-between"
                            align="center"
                            style={{
                                width: '100%',
                                gap: '10px',
                            }}
                        >
                            <CustomTypographyCartPayment>Subtotal</CustomTypographyCartPayment>

                            <CustomTypographyCartPayment
                                style={{
                                    fontSize: '18px',
                                    fontWeight: '500',
                                    color: customColors.colorQuaternaryText,
                                }}
                            >
                                ${cart.totalPrice}.00
                            </CustomTypographyCartPayment>
                        </Flex>
                        <Flex
                            justify="space-between"
                            align="center"
                            style={{
                                width: '100%',
                            }}
                        >
                            <Typography
                                style={{
                                    fontSize: '18px',
                                    fontWeight: '500',
                                }}
                            >
                                Shipping fee
                            </Typography>

                            <Typography
                                style={{
                                    fontSize: '18px',
                                    fontWeight: '500',
                                    color: customColors.colorQuaternaryText,
                                }}
                            >
                                {/* ${shippingFee}.00 */}
                                Free
                            </Typography>
                        </Flex>
                    </Flex>
                    <Divider className="cart_divider" />
                    <Flex
                        justify="space-between"
                        align="center"
                        gap={10}
                        style={{
                            width: '100%',
                        }}
                    >
                        <CustomTypographyCartPayment>Total</CustomTypographyCartPayment>

                        <Typography
                            style={{
                                fontSize: '20px',
                                fontWeight: '500',
                                color: token.colorPrimary,
                            }}
                        >
                            ${cart.totalPrice + shippingFee}.00
                        </Typography>
                    </Flex>
                    <Divider className="cart_divider" />
                    <Link to="/checkout" style={{ marginTop: '28px' }}>
                        <CustomButton
                            style={{
                                float: 'right',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                fontSize: '24px',
                                fontWeight: '600',
                                padding: '20px 25px',
                                width: '100%',
                                borderRadius: '10px',
                            }}
                        >
                            Checkout
                        </CustomButton>
                    </Link>
                </Flex>
            </Flex>
        </Flex>
    );
};
