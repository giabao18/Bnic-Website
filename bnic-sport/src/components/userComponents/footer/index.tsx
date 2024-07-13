import { Link } from 'react-router-dom';
import { Flex, Row, Typography, Input, Button, Image, theme, Col } from 'antd';
import { TypeIcon } from 'antd/es/message/PurePanel';
import { CustomTypographyFooter } from 'src/theme/customTypography';
import { CustomInputFooter } from 'src/theme/customInput';
import { CustomButtonFooter } from 'src/theme/customButton';
import { assets } from 'src/assets';
import { customColors } from 'src/theme';

type Props = {};
const { Text } = Typography;

export const Footer = (props: Props) => {
    const { token } = theme.useToken();

    return (
        <Flex style={{ flexDirection: 'column' }}>
            <Row gutter={16} style={{ width: '100%', padding: '48px 0' }}>
                <Col span={6}>
                    <Flex style={{ flexDirection: 'column', padding: '8px 0 0 30px' }}>
                        <Image src={assets.logo} alt="" preview={false} style={{ width: '80px' }} />
                        <Text
                            style={{
                                fontSize: '16px',
                                fontWeight: '400',
                                color: customColors.colorQuaternaryText,
                                marginTop: '20px',
                            }}
                        >
                            Quarter 6, Thu Duc City, Ho Chi Minh City, Vietnam
                            <br />
                            (+84)0945128653
                            <br />
                            BnicSportWear@gmail.com
                        </Text>
                    </Flex>
                </Col>
                <Col span={6}>
                    <Flex style={{ flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text
                            style={{
                                fontSize: '18px',
                                fontWeight: '500',
                                marginBottom: '10px',
                            }}
                        >
                            Links
                        </Text>
                        <Link to="/" className="link">
                            <CustomTypographyFooter> Home</CustomTypographyFooter>
                        </Link>
                        <Link to="/shop" className="link">
                            <CustomTypographyFooter>Shop</CustomTypographyFooter>
                        </Link>
                        <Link to="/about" className="link">
                            <CustomTypographyFooter>About</CustomTypographyFooter>
                        </Link>
                        <Link to="/contact">
                            <CustomTypographyFooter>Contact</CustomTypographyFooter>
                        </Link>
                    </Flex>
                </Col>
                <Col span={6}>
                    <Flex style={{ flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text
                            style={{
                                fontSize: '18px',
                                fontWeight: '500',
                                marginBottom: '10px',
                            }}
                        >
                            Help
                        </Text>
                        <Link to="/" className="link">
                            <CustomTypographyFooter>Payment options</CustomTypographyFooter>
                        </Link>
                        <Link to="/" className="link">
                            <CustomTypographyFooter>Return</CustomTypographyFooter>
                        </Link>
                        <Link to="/" className="link">
                            <CustomTypographyFooter>Privacy policy</CustomTypographyFooter>
                        </Link>
                        <Link to="/" className="link">
                            <CustomTypographyFooter>Store</CustomTypographyFooter>
                        </Link>
                    </Flex>
                </Col>
                <Col span={6}>
                    <Flex style={{ flexDirection: 'column', alignItems: 'center' }}>
                        <Text
                            style={{
                                fontSize: '18px',
                                fontWeight: '500',
                            }}
                        >
                            Newsletter
                        </Text>
                        <Flex style={{ marginTop: '20px', gap: '10px' }}>
                            <CustomInputFooter
                                placeholder="Enter your email address"
                                // style={{ backgroundColor: 'transparent', borderColor: token.colorPrimary }}
                            />
                            <CustomButtonFooter style={{ marginLeft: '10px' }}>Subcribe</CustomButtonFooter>
                        </Flex>
                    </Flex>
                </Col>
            </Row>
        </Flex>
    );
};
