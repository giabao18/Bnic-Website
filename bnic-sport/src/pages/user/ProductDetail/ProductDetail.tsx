import { useState } from 'react';
import { Flex, Row, Typography, Image, Col, theme, Breadcrumb, Rate, Tag } from 'antd';
import { customColors, marginBottom, navBarHeight } from '../../../theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faStar, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { assets } from '../../../assets';
import { Description } from '../../../components/userComponents/description';

import './style.scss';
import { HomeOutlined } from '@ant-design/icons';
import { updateItemQuantity } from 'src/redux/userApi/cart/cartSlice';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IRootState } from 'src/redux/store';
import { useDispatch } from 'react-redux';
import { RatingForm } from 'src/components/userComponents/rating-form';
import { Reviews } from 'src/components/userComponents/reviews';
import { IProduct } from 'src/redux/products/productsSlice';
import { CustomTag } from 'src/theme/customTag';

const { Text } = Typography;

export const ProductDetailsPage = () => {
    const { token } = theme.useToken();
    const [activeSize, setActiveSize] = useState<string>('L');
    const [activeColor, setActiveColor] = useState<string>('#816DFA');
    const [quantity, setQuantity] = useState<number>(1);
    const [tab, setTab] = useState<string>('description');
    const [isRating, setIsRating] = useState(false);
    const { id } = useParams<{ id: string }>();
    const productDetail = useSelector((state: IRootState) => state.products.items).find(
        (productDetail) => productDetail.id === id,
    );
    const dispatch = useDispatch();

    const sizes = ['L', 'XL', 'XS'];
    const colors = ['#816DFA', '#000', '#B88E2F'];

    const handleSizeClick = (size: string) => {
        setActiveSize(size);
    };
    const handleColorClick = (color: string) => {
        setActiveColor(color);
    };

    const handleIncreaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const handleDecreaseQuantity = () => {
        if (quantity <= 0) {
            setQuantity(0);
        } else {
            setQuantity(quantity - 1);
        }
    };

    const handleAddToCart = (product?: IProduct) => {
        dispatch(updateItemQuantity({ product, quantity }));
    };

    return (
        // <Flex
        //     vertical
        //     align="center"
        //     style={{
        //         paddingTop: `${navBarHeight}`,
        //         width: '100%',
        //         overflow: 'none',
        //     }}
        // >
        <Row gutter={16} style={{ margin: `${navBarHeight} 0 ${marginBottom} 0` }}>
            <Col span={12}>
                <Flex style={{ gap: '20px', display: 'flex', justifyContent: 'center', width: '100%' }}>
                    <Image preview={{ mask: null }} src={productDetail?.image_dir} width={500} />
                </Flex>
            </Col>

            <Col span={12}>
                <Flex vertical gap={20}>
                    <Breadcrumb
                        separator="/"
                        items={[
                            {
                                href: '/',
                                title: <HomeOutlined />,
                            },
                            {
                                href: '/shop',
                                title: <Typography>Shop</Typography>,
                            },
                            {
                                title: <Typography>{productDetail?.name}</Typography>,
                            },
                        ]}
                    />

                    <Flex vertical gap={10}>
                        <Text
                            style={{
                                fontSize: '40px',
                                fontWeight: '500',
                            }}
                        >
                            {productDetail?.name}
                        </Text>

                        <Text
                            style={{
                                fontSize: '28px',
                                fontWeight: '500',
                                color: `${customColors.colorPrimary}`,
                            }}
                        >
                            ${productDetail?.price}
                        </Text>

                        <Flex gap={10} align="center">
                            <Rate disabled defaultValue={3} />

                            <Text
                                style={{
                                    fontSize: '18px',
                                    fontWeight: '400',
                                }}
                            >
                                5k Reviews
                            </Text>
                        </Flex>

                        <Flex>
                            <CustomTag>Type</CustomTag>
                            <CustomTag>Type</CustomTag>
                            <CustomTag>Type</CustomTag>
                        </Flex>
                    </Flex>

                    {/* <Flex vertical>
                        <Text className="productDetail__container_title">Product Description</Text>
                        <Text
                            style={{
                                fontSize: '16px',
                                fontWeight: '400',
                                width: '100%',
                                textAlign: 'justify',
                                color: customColors.colorQuaternaryText,
                            }}
                        >
                            {productDetail?.description}
                        </Text>
                    </Flex> */}

                    <Flex vertical>
                        <Text className="productDetail__container_title">Color</Text>
                    </Flex>

                    <Flex vertical>
                        <Text className="productDetail__container_title">Size</Text>
                    </Flex>

                    <Row style={{ alignItems: 'center', gap: '100px' }}>
                        <Col style={{ marginTop: '20px' }}>
                            <Text
                                style={{
                                    fontSize: '18px',
                                    fontWeight: '500',
                                    marginTop: '10px',
                                    color: customColors.colorQuaternaryText,
                                }}
                            >
                                Size
                            </Text>
                            <Row style={{ gap: '15px' }}>
                                {sizes.map((size, index) => (
                                    <Row
                                        key={index}
                                        style={{
                                            fontSize: '14px',
                                            fontWeight: '500',
                                            marginTop: '10px',
                                            color: activeSize === size ? '#fff' : '#000',
                                            width: '30px',
                                            height: '30px',
                                            backgroundColor:
                                                activeSize === size
                                                    ? token.colorPrimary
                                                    : customColors.colorBgSecondary,
                                            borderRadius: '5px',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            cursor: 'pointer',
                                        }}
                                        onClick={() => handleSizeClick(size)}
                                        className="active"
                                    >
                                        {size}
                                    </Row>
                                ))}
                            </Row>
                        </Col>
                        <Col style={{ marginTop: '20px' }}>
                            <Text
                                style={{
                                    fontSize: '18px',
                                    fontWeight: '500',
                                    marginTop: '10px',
                                    color: customColors.colorQuaternaryText,
                                }}
                            >
                                Color
                            </Text>
                            <Row style={{ gap: '15px' }}>
                                {colors.map((color, index) => (
                                    <Row
                                        key={index}
                                        style={{
                                            fontSize: '14px',
                                            fontWeight: '500',
                                            marginTop: '10px',
                                            width: '30px',
                                            height: '30px',
                                            backgroundColor: color,
                                            borderRadius: '50px',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            cursor: 'pointer',
                                        }}
                                        onClick={() => handleColorClick(color)}
                                        className="active"
                                    />
                                ))}
                            </Row>
                        </Col>
                    </Row>
                    <Row style={{ marginTop: '40px', gap: '50px' }}>
                        <Row
                            style={{
                                gap: '20px',
                                border: `2px solid ${customColors.colorQuaternaryText}`,
                                width: '130px',
                                height: '50px',
                                borderRadius: '10px',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <FontAwesomeIcon
                                icon={faMinus}
                                style={{
                                    fontSize: '16px',
                                    fontWeight: '400',
                                    cursor: 'pointer',
                                    padding: '5px',
                                }}
                                onClick={handleDecreaseQuantity}
                            />
                            <Text
                                style={{
                                    fontSize: '18px',
                                    fontWeight: '500',
                                    color: token.colorPrimary,
                                    width: '20px',
                                    textAlign: 'center',
                                }}
                            >
                                {quantity}
                            </Text>
                            <FontAwesomeIcon
                                icon={faPlus}
                                style={{
                                    fontSize: '16px',
                                    fontWeight: '400',
                                    cursor: 'pointer',
                                    padding: '5px',
                                }}
                                onClick={handleIncreaseQuantity}
                            />
                        </Row>
                        <Row
                            style={{
                                alignItems: 'center',
                                backgroundColor: token.colorPrimary,
                                padding: '10px 20px',
                                borderRadius: '10px',
                                fontWeight: '500',
                                fontSize: '18px',
                                color: '#fff',
                                cursor: 'pointer',
                            }}
                            onClick={() => handleAddToCart(productDetail)}
                            className="add-btn"
                        >
                            Add to cart
                        </Row>
                        <Row
                            style={{
                                alignItems: 'center',
                                border: `2px solid ${customColors.colorQuaternaryText}`,
                                padding: '10px 20px',
                                borderRadius: '10px',
                                fontWeight: '500',
                                fontSize: '18px',
                            }}
                            className="rating-btn"
                            onClick={() => setIsRating(true)}
                        >
                            Rating
                        </Row>
                    </Row>
                </Flex>
            </Col>
        </Row>
    );
};
