import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Image, Button, Flex, Row, Col, Typography, theme, Carousel, Menu } from 'antd';
import { assets } from '../../../assets';
import { customColors, navBarHeight } from '../../../theme';
import { Products } from '../../../components/userComponents/products';
import Marquee from 'react-fast-marquee';
import { useDispatch, useSelector } from 'react-redux';
import { IAppDispatch, IRootState } from 'src/redux/store';
import MenuItem from 'antd/es/menu/MenuItem';
import './styles.scss';
import { CustomButton } from 'src/theme/customButton';

const { Text } = Typography;

export const HomePage = () => {
    const { token } = theme.useToken();
    const productsInStock = useSelector((state: IRootState) => state.products.items);

    const footerImages = [assets.footer2, assets.footer3, assets.footer5, assets.footer6];
    const brandLogo = [
        assets.adidas,
        assets.nike,
        assets.fila,
        assets.head,
        assets.lining,
        assets.reebok,
        assets.wilson,
        assets.yonex,
    ];

    const bannerCarousel = [assets.banner1, assets.banner2, assets.banner3, assets.banner4];

    const [hoveredImages, setHoveredImages] = useState<boolean[]>(Array(brandLogo.length).fill(false));

    const setHoveredImage = (index: number, isHovered: boolean) => {
        setHoveredImages((prev) => prev.map((hovered, i) => (i === index ? isHovered : hovered)));
    };

    //temp data
    const highlightProducts = productsInStock.slice(0, 8);

    return (
        <Flex style={{ flexDirection: 'column', width: '100%', alignItems: 'center' }}>
            <Flex style={{ position: 'relative' }}>
                <div style={{ width: '100vw', margin: '0 auto', height: '800px', overflow: 'hidden' }}>
                    <Carousel dotPosition="top" autoplay={true} infinite={true} autoplaySpeed={2000}>
                        {bannerCarousel.map((banner) => (
                            <div>
                                <Image
                                    style={{
                                        height: 'auto',
                                        width: '100%',
                                        overflow: 'hidden',
                                    }}
                                    preview={false}
                                    src={banner}
                                    alt="Banner"
                                />
                            </div>
                        ))}
                    </Carousel>
                </div>
                <Flex
                    style={{
                        position: 'absolute',
                        flexDirection: 'column',
                        width: '700px',
                        left: '40px',
                        top: '50%',
                        color: '#ffffff',
                        padding: '0 50px',
                    }}
                >
                    <Text
                        style={{
                            fontSize: '52px',
                            fontWeight: '500',
                            lineHeight: '65px',
                            marginTop: '10px',
                            textTransform: 'uppercase',
                        }}
                    >
                        Explore the Next Generation of Racket Technologies
                    </Text>
                    <Text style={{ fontSize: '18px', fontWeight: '500', lineHeight: '24px', marginTop: '10px' }}>
                        Explore cutting-edge racket technologies that redefine the game , offering enhanced performance
                        and precision. Discover innovations that will elevate your tennis experience to new level
                    </Text>
                    <Link to="/shop">
                        <CustomButton
                            // block
                            style={{
                                fontWeight: '700',
                                fontSize: '16px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                padding: '20px 26px',
                                marginTop: '20px',
                                width: '20%',
                            }}
                        >
                            Discover
                        </CustomButton>
                    </Link>
                </Flex>
            </Flex>

            <Marquee autoFill={true}>
                <div style={{ display: 'grid', gap: '16px', gridTemplateColumns: 'repeat(8, 2fr)', margin: '20px' }}>
                    {brandLogo.map((img, index) => (
                        <Image key={index} preview={false} src={img} style={{ width: '100px', margin: '10px 82px' }} />
                    ))}
                </div>
            </Marquee>

            <Flex
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginTop: '20px',
                    width: '80%',
                }}
            >
                <Text
                    style={{
                        fontSize: '32px',
                        fontWeight: '700',
                        margin: '0',
                    }}
                >
                    Best Selling Product
                </Text>

                <Menu
                    style={{
                        fontSize: '18px',
                        fontWeight: '400',
                        background: 'none',
                        paddingTop: '40px',
                    }}
                    mode="horizontal"
                    defaultSelectedKeys={['allProducts']}
                >
                    <MenuItem key="allProducts" style={{ margin: '0 30px', padding: '0 30px', fontSize: '18px' }}>
                        <Link to="/">All Products</Link>
                    </MenuItem>
                    <MenuItem key="wear" style={{ margin: '0 30px', padding: '0 30px', fontSize: '18px' }}>
                        <Link to="/shop">Wear</Link>
                    </MenuItem>
                    <MenuItem key="short" style={{ margin: '0 30px', padding: '0 30px', fontSize: '18px' }}>
                        <Link to="/about">Short</Link>
                    </MenuItem>
                    <MenuItem key="shoes" style={{ margin: '0 30px', padding: '0 30px', fontSize: '18px' }}>
                        <Link to="/contact">Shoes</Link>
                    </MenuItem>
                    <MenuItem key="accessories" style={{ margin: '0 30px', padding: '0 30px', fontSize: '18px' }}>
                        <Link to="/contact">Accessories</Link>
                    </MenuItem>
                </Menu>

                <Flex justify="center" align="center" style={{ width: '100%', marginTop: '56px' }}>
                    <div className="homepage_product_list_grid">
                        <Products productsDetailList={highlightProducts} />
                    </div>
                </Flex>

                <Link to="/shop">
                    <CustomButton
                        style={{
                            fontWeight: '600',
                            backgroundColor: 'transparent',
                            fontSize: '18px',
                            textAlign: 'center',
                            width: '250px',
                            height: '50px',
                            marginTop: '50px',
                        }}
                    >
                        Show more
                    </CustomButton>
                </Link>
            </Flex>
            <Flex style={{ flexDirection: 'column', alignItems: 'center', marginTop: '58px' }}>
                <Text style={{ fontSize: '40px', fontWeight: '700', margin: '0px 0 20px 0' }}>Follow Us</Text>
                <Text
                    style={{
                        fontSize: '20px',
                        fontWeight: '600',
                        margin: '0',
                    }}
                >
                    Find the best lifestyle influence on Instagram to follow
                </Text>
            </Flex>
            <Flex justify="space-between" style={{ width: '100%', marginTop: '58px', padding: '0 20px' }}>
                {footerImages.map((img) => (
                    <Image preview={false} src={img} width={500} />
                ))}
            </Flex>
        </Flex>
    );
};
