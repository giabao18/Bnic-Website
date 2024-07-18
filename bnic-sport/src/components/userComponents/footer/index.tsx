import { Link } from 'react-router-dom';
import { Flex, Row, Typography, Input, Button, Image, theme, Col, Divider } from 'antd';
import { TypeIcon } from 'antd/es/message/PurePanel';
import { CustomTypographyFooter } from 'src/theme/customTypography';
import { CustomInputFooter } from 'src/theme/customInput';
import { CustomButtonFooter } from 'src/theme/customButton';
import { assets } from 'src/assets';
import { customColors } from 'src/theme';
import './styles.scss';

type Props = {};
const { Text } = Typography;

export const Footer = (props: Props) => {
    const { token } = theme.useToken();

    return (
        <Flex style={{ flexDirection: 'column', background: 'rgba(19, 18, 18, 0.72)' }}>
            <Row gutter={16} style={{ width: '100%', padding: '48px 0' }}>
                <Col span={9}>
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
                <Col span={5}>
                    <Flex justify="center" align="flex-start" vertical className="footer_content_container">
                        <Text className="footer_title">Menu</Text>
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
                <Col span={5}>
                    {/* <Flex style={{ flexDirection: 'column', justifyContent: 'space-between', textAlign:'left'}}> */}
                    <Flex vertical justify="space-between" align="flex-start" className="footer_content_container">
                        <Text className="footer_title">Quick Links</Text>
                        <Link to="/" className="link">
                            <CustomTypographyFooter>Sign In</CustomTypographyFooter>
                        </Link>
                        <Link to="/" className="link">
                            <CustomTypographyFooter>Register</CustomTypographyFooter>
                        </Link>
                        <Link to="/" className="link">
                            <CustomTypographyFooter>Privacy Policy</CustomTypographyFooter>
                        </Link>
                        <Link to="/" className="link">
                            <CustomTypographyFooter>Contact Us</CustomTypographyFooter>
                        </Link>
                    </Flex>
                </Col>
                <Col span={5}>
                    <Flex vertical justify="center" align="flex-start">
                        <Text className="footer_title">Newsletter</Text>
                        <Flex style={{ gap: '10px' }}>
                            <CustomInputFooter
                                placeholder="Enter your email address"
                                // style={{ backgroundColor: 'transparent', borderColor: token.colorPrimary }}
                            />
                            <CustomButtonFooter style={{ marginLeft: '10px' }}>Subcribe</CustomButtonFooter>
                        </Flex>
                    </Flex>
                </Col>
            </Row>
            <Flex justify="center" align="center">
                <Text style={{ margin: '20px 0 30px 0', fontSize: '18px' }}>
                    Bnic website ©{new Date().getFullYear()} Created by Jeremy Pham
                </Text>
            </Flex>
        </Flex>
    );
};
