import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Outlet, useNavigate } from 'react-router';
import { Image, Button, Flex, Row, Col, Typography, theme, Card, Tooltip, Badge } from 'antd';
import { assets } from '../../../assets';
import { customColors } from '../../../theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareFromSquare, faCodeCompare } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { addItem } from 'src/redux/userApi/cart/cartSlice';
import { PlusOutlined, ShareAltOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { IProduct } from 'src/redux/products/productsSlice';
import './style.scss';

const { Text } = Typography;

export interface IProductList {
    productsDetailList: IProduct[];
}

export const Products: React.FC<IProductList> = ({ productsDetailList }) => {
    const { token } = theme.useToken();
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleAddProduct = (product: IProduct) => {
        dispatch(addItem(product));
    };

    return (
        <>
            {productsDetailList.map((productDetail, index) => (
                <Badge.Ribbon
                    text={productDetail.status}
                    color={productDetail.status !== 'new' ? 'red' : 'green'}
                    style={{ fontSize: '15px' }}
                >
                    <Card
                        hoverable
                        style={{ width: 300, backgroundColor: '#131212b8', border: 'none' }}
                        cover={<Image alt="img" width={300} preview={false} src={productDetail.image_dir} />}
                        onClick={() => navigate(`/products/${productDetail.id}`)}
                    >
                        <Card.Meta
                            title={productDetail.name}
                            description={<span className="ellipsis">{productDetail.description}</span>}
                        />
                        <Typography.Title level={5} style={{ margin: '8px 0 0 0' }}>
                            ${productDetail.price}
                        </Typography.Title>
                    </Card>
                </Badge.Ribbon>
            ))}
        </>
    );
};
