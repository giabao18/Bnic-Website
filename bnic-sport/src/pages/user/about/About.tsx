import React from 'react';
import { Flex, Row, Image, Typography, theme, Col, Avatar, Tooltip } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Banner } from '../../../components/userComponents/banner';
import { assets } from '../../../assets';
import { customColors, navBarHeight } from 'src/theme';
import './styles.scss';
import {
    CustomTypographyContent,
    CustomTypographyContentTitle,
    CustomTypographyFooter,
} from 'src/theme/customTypography';
import { CustomAvatarAboutPage } from 'src/theme/customAvatar';

type Props = {};

export const AboutPage = (props: Props) => {
    const { token } = theme.useToken();

    const members = [
        {
            middleName: 'Gia',
            firstName: 'Bao',
            image: assets.GiaBao,
        },
        {
            middleName: 'Cong',
            firstName: 'Bang',
            image: assets.CongBang,
        },
        {
            middleName: 'Minh',
            firstName: 'Vu',
            image: assets.MinhVu,
        },
        {
            middleName: 'Minh',
            firstName: 'Huy',
            image: assets.MinhHuy,
        },
    ];

    return (
        <Flex style={{ flexDirection: 'column', alignItems: 'center' }}>
            <Flex style={{ position: 'relative' }}>
                <div style={{ width: '100vw', margin: '0 auto', height: '800px', overflow: 'hidden' }}>
                    <div>
                        <Image
                            style={{
                                height: 'auto',
                                width: '100%',
                                overflow: 'hidden',
                            }}
                            preview={{ mask: null }}
                            src={assets.apPic6}
                            alt="Banner"
                        />
                    </div>
                </div>
                <Flex
                    style={{
                        position: 'absolute',
                        flexDirection: 'column',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                        textAlign: 'center',
                        top: '45%',
                        color: '#ffffff',
                    }}
                >
                    <Typography
                        style={{
                            fontSize: '62px',
                            fontWeight: '700',
                            lineHeight: '65px',
                        }}
                    >
                        WHERE{' '}
                        <span
                            style={{
                                color: `${customColors.colorSecondaryText}`,
                            }}
                        >
                            COMFORT
                        </span>{' '}
                        MEETS{' '}
                        <span
                            style={{
                                color: `${customColors.colorSecondaryText}`,
                            }}
                        >
                            PERFORMANCE
                        </span>
                    </Typography>
                </Flex>
            </Flex>

            <Flex justify="center" align="center" style={{ flexDirection: 'column', width: '100%' }}>
                <div className="blur_background about_page_content_container ">
                    <Row gutter={46} style={{ padding: '20px' }}>
                        <Col span={8}>
                            <CustomTypographyContentTitle>Our Story</CustomTypographyContentTitle>
                            <CustomTypographyContent>
                                Welcome to Bnic, where innovation meets athletic excellence. At Bnic Performance, we are
                                dedicated to providing high-quality sportswear that empowers athletes to push their
                                limits and achieve their personal best. Whether you're a professional athlete or a
                                fitness enthusiast, our mission is to fuel your passion and elevate your performance
                                with gear designed for both comfort and functionality.
                            </CustomTypographyContent>
                            <Avatar.Group style={{ marginTop: '14px' }}>
                                <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
                                <a href="https://ant.design">
                                    <CustomAvatarAboutPage>K</CustomAvatarAboutPage>
                                </a>
                                <Tooltip title="Ant User" placement="top">
                                    <CustomAvatarAboutPage>B</CustomAvatarAboutPage>
                                </Tooltip>
                                <CustomAvatarAboutPage>B</CustomAvatarAboutPage>
                            </Avatar.Group>
                        </Col>
                        <Col span={8}>
                            <CustomTypographyContentTitle>Our Team</CustomTypographyContentTitle>
                            <CustomTypographyContent>
                                Behind Bnic is a dynamic team of sports enthusiasts, designers, and engineers, all
                                driven by a shared passion for athletics and innovation. Our designers craft each piece
                                with precision, ensuring that our apparel not only meets but exceeds the demands of
                                rigorous training and competition.
                                <br />
                                Our engineers are constantly exploring new materials and technologies to enhance your
                                athletic experience. Together, we are committed to delivering sportswear that supports
                                your journey and helps you reach new heights.
                                <br />
                                Together, we are committed to delivering sportswear that supports your journey and helps
                                you reach new heights.
                            </CustomTypographyContent>
                        </Col>
                        <Col span={8}>
                            <Image preview={false} src={assets.apPic7} />
                        </Col>
                    </Row>
                </div>

                <Flex className="about_page_content_container" vertical>
                    <Flex
                        style={{padding: '26px',width:'100%', backgroundColor: `${customColors.colorPrimary}` }}
                        justify="center"
                        align="center"
                        vertical
                    >
                        <CustomTypographyContentTitle style={{ color: '#000000' }}>
                            Our Value
                        </CustomTypographyContentTitle>
                        <CustomTypographyContent
                            style={{
                                width: '40%',
                                fontSize: '28px',
                                textAlign: 'center',
                                fontWeight: '700',
                                color: '#000000',
                                textTransform: 'uppercase',
                            }}
                        >
                            Behind Bnic is a dynamic team of sports enthusiasts, designers, and engineers, all driven by
                            a shared passion for athletics and innovation.
                        </CustomTypographyContent>
                    </Flex>
                    <Flex style={{width: '100%'}}>
                        <Row gutter={26}>
                            <Col className="about_page_content_ourValue" span={8}>
                                123
                            </Col>
                            <Col className="about_page_content_ourValue" span={8}>
                                123
                            </Col>
                            <Col className="about_page_content_ourValue" span={8}>
                                123
                            </Col>
                        </Row>
                    </Flex>
                </Flex>

                {/* <Flex style={{ justifyContent: 'space-between', alignItems: 'center', padding: '0 100px' }}>
                    <Flex style={{ flexDirection: 'column', gap: '20px', width: '45%' }}>
                        <Text style={{ fontSize: '24px', fontWeight: '500' }}>Our Products and Services</Text>
                        <Text style={{ fontSize: '18px', fontWeight: '400', textAlign: 'justify' }}>
                            FurniScape boasts a diverse selection of furniture that encompasses everything needed to
                            furnish a home or office, from plush sofas and ergonomic office chairs to luxurious beds and
                            stylish dining sets. Each product is designed with the utmost attention to aesthetics and
                            practical functionality. Beyond just selling furniture, we offer comprehensive interior
                            design services that guide customers through the process of envisioning and realizing the
                            layout and decoration of their spaces. Our team works closely with clients to ensure their
                            decor reflects their personal style and meets their functional needs.
                        </Text>
                    </Flex>
                    <Flex style={{ gap: '20px' }}>
                        <Image
                            src={assets.image14}
                            preview={{ mask: null }}
                            style={{ width: '200px', borderRadius: '10px' }}
                        />
                        <Image
                            src={assets.image12}
                            preview={{ mask: null }}
                            style={{ width: '200px', borderRadius: '10px' }}
                        />
                        <Image
                            src={assets.image16}
                            preview={{ mask: null }}
                            style={{ width: '200px', borderRadius: '10px' }}
                        />
                    </Flex>
                </Flex>
                <Flex style={{ justifyContent: 'space-between', alignItems: 'center', padding: '0 100px' }}>
                    <Image
                        src={assets.commitment}
                        preview={false}
                        style={{ width: '600px', height: '350px', borderRadius: '10px' }}
                    />
                    <Flex style={{ flexDirection: 'column', gap: '20px', width: '50%' }}>
                        <Text style={{ fontSize: '24px', fontWeight: '500' }}>
                            Commitment to Quality and Sustainability
                        </Text>
                        <Text style={{ fontSize: '18px', fontWeight: '400', textAlign: 'justify' }}>
                            Sustainability is at the core of our manufacturing processes at FurniScape. We are dedicated
                            to reducing our environmental footprint by utilizing responsibly sourced materials and
                            implementing eco-friendly manufacturing techniques. Our commitment extends beyond the
                            materials we use to the methods of our craftsmanship, ensuring that every piece of furniture
                            is not only durable and safe but also environmentally conscious. We engage in continuous
                            dialogue with sustainability experts to improve our practices and contribute positively to
                            the global community. By choosing FurniScape, customers not only invest in superior quality
                            furniture but also support sustainable practices that benefit the environment.
                        </Text>
                    </Flex>
                </Flex>
                <Flex style={{ justifyContent: 'space-between', alignItems: 'center', padding: '0 100px' }}>
                    <Flex style={{ flexDirection: 'column', gap: '20px', width: '45%' }}>
                        <Text style={{ fontSize: '24px', fontWeight: '500' }}>Our Founding and Management Team</Text>
                        <Text style={{ fontSize: '18px', fontWeight: '400', textAlign: 'justify' }}>
                            The foundation of FurniScape was laid by a group of visionaries who are seasoned in both the
                            art of furniture craftsmanship and the intricacies of business management. Our founders
                            bring over two decades of combined experience in interior design and a robust understanding
                            of global market dynamics. This rich background has been pivotal in shaping FurniScape’s
                            ethos and in steering its journey towards becoming a leader in the furniture industry.
                            Today, our management team continues to drive innovation, overseeing a talented crew that’s
                            dedicated to upholding the highest standards of furniture production and customer
                            satisfaction.
                        </Text>
                    </Flex>
                    <Flex
                        style={{
                            backgroundColor: token.colorPrimary,
                            padding: '20px',
                            borderRadius: '10px',
                            gap: '20px',
                        }}
                    >
                        <Text
                            style={{
                                writingMode: 'vertical-lr',
                                transform: 'rotate(180deg)',
                                fontSize: '24px',
                                fontWeight: '500',
                                color: '#fff',
                                textAlign: 'center',
                            }}
                        >
                            MEMBERS
                        </Text>

                        <Flex
                            style={{
                                display: 'grid',
                                gridTemplateColumns: 'auto auto',
                                gap: '20px',
                                backgroundColor: '#fff',
                                borderRadius: '10px',
                                padding: '15px',
                            }}
                        >
                            {members.map((member, index) => (
                                <Row
                                    key={index}
                                    style={{
                                        alignItems: 'center',
                                        gap: '20px',
                                        padding: '20px',
                                        borderRadius: '10px',
                                        boxShadow: `0 0 10px ${token.colorPrimary}`,
                                    }}
                                >
                                    <Image
                                        src={member.image}
                                        preview={false}
                                        style={{
                                            width: '150px',
                                            aspectRatio: '1/1',
                                            objectFit: 'cover',
                                            borderRadius: '10px',
                                        }}
                                    />
                                    <Text style={{ fontSize: '24px', fontWeight: '500' }}>
                                        {member.middleName} <br />
                                        {member.firstName}
                                    </Text>
                                </Row>
                            ))}
                        </Flex>
                    </Flex>
                </Flex> */}
            </Flex>
        </Flex>
    );
};
