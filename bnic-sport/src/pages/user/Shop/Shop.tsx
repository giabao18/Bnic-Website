import { useEffect, useState } from 'react';
import {
    Flex,
    Row,
    Typography,
    Input,
    Select,
    theme,
    Pagination,
    PaginationProps,
    Col,
    Menu,
    MenuProps,
    Slider,
    InputNumberProps,
    InputNumber,
    Rate,
} from 'antd';
import { Banner } from '../../../components/userComponents/banner';
import { Products } from '../../../components/userComponents/products';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import './style.scss';
import { navBarHeight } from 'src/theme';
import { IRootState } from 'src/redux/store';
import { useSelector } from 'react-redux';
import { IProduct } from 'src/redux/products/productsSlice';
import { CustomMenuShopPage } from 'src/theme/customMenu';
import SubMenu from 'antd/es/menu/SubMenu';
import MenuItem from 'antd/es/menu/MenuItem';

const { Text } = Typography;
type MenuItem = Required<MenuProps>['items'][number];
export const ShopPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(8);
    const [searchValue, setSearchValue] = useState('');
    const productFetch = useSelector((state: IRootState) => state.products.items);
    const [products, setProducts] = useState(productFetch);

    const [inputValue, setInputValue] = useState(1);

    const onChange: InputNumberProps['onChange'] = (newValue) => {
        setInputValue(newValue as number);
    };

    const handlePageChange: PaginationProps['onChange'] = (page: number) => {
        setCurrentPage(page);
        window.scrollTo({ top: 550, behavior: 'smooth' });
    };
    const totalProducts = products.length;
    const paginatedProducts: IProduct[] = products.slice((currentPage - 1) * pageSize, currentPage * pageSize);

    const handleShowBy = (value: string) => {
        let sortProduct = [...products];
        if (value === 'increasing') {
            sortProduct = sortProduct.sort((a, b) => a.price - b.price);
        }
        if (value === 'decreasing') {
            sortProduct = sortProduct.sort((a, b) => b.price - a.price);
        }
        setProducts(sortProduct);
    };

    const handleSelectCategory = (value: string) => {
        let categoryProducts = [...productFetch];
        if (value === 'Dining Room')
            categoryProducts = categoryProducts.filter((product) => product.category === 'Dining Room');
        if (value === 'Bedroom')
            categoryProducts = categoryProducts.filter((product) => product.category === 'Bedroom');
        if (value === 'Kitchen')
            categoryProducts = categoryProducts.filter((product) => product.category === 'Kitchen');
        if (value === 'Office') categoryProducts = categoryProducts.filter((product) => product.category === 'Office');
        if (value === 'Living Room')
            categoryProducts = categoryProducts.filter((product) => product.category === 'Living Room');
        if (value === 'All') categoryProducts;
        setProducts(categoryProducts);
    };

    const handleSearchProduct = (value: string) => {
        let categoryProducts = [...productFetch];
        categoryProducts = categoryProducts.filter((product) =>
            product.name.toLocaleLowerCase().includes(value.toLocaleLowerCase()),
        );
        console.log(categoryProducts);
        setProducts(categoryProducts);
        setSearchValue(value);
    };

    const handleSearchProductReset = () => {
        setSearchValue('');
    };
    // run when products fetch change to update products
    useEffect(() => setProducts(productFetch), [productFetch]);

    return (
        <Flex style={{ flexDirection: 'column', alignItems: 'center', margin: `${navBarHeight} 0 40px 0` }}>
            {/* <Row
                style={{
                    width: '100%',
                    padding: '20px 100px',
                    justifyContent: 'space-between',
                    marginBottom: '50px',
                }}
            >
                <Row style={{ alignItems: 'center', gap: '5px' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                        <path
                            d="M18.6667 22.1667C17.7384 22.1667 16.8482 21.7979 16.1918 21.1416C15.5354 20.4852 15.1667 19.5949 15.1667 18.6667C15.1667 17.7384 15.5354 16.8482 16.1918 16.1918C16.8482 15.5354 17.7384 15.1667 18.6667 15.1667C19.5949 15.1667 20.4852 15.5354 21.1415 16.1918C21.7979 16.8482 22.1667 17.7384 22.1667 18.6667C22.1667 19.5949 21.7979 20.4852 21.1415 21.1416C20.4852 21.7979 19.5949 22.1667 18.6667 22.1667ZM9.33334 22.1667C8.40508 22.1667 7.51484 21.7979 6.85846 21.1416C6.20208 20.4852 5.83334 19.5949 5.83334 18.6667C5.83334 17.7384 6.20208 16.8482 6.85846 16.1918C7.51484 15.5354 8.40508 15.1667 9.33334 15.1667C10.2616 15.1667 11.1518 15.5354 11.8082 16.1918C12.4646 16.8482 12.8333 17.7384 12.8333 18.6667C12.8333 19.5949 12.4646 20.4852 11.8082 21.1416C11.1518 21.7979 10.2616 22.1667 9.33334 22.1667ZM18.6667 12.8333C17.7384 12.8333 16.8482 12.4646 16.1918 11.8082C15.5354 11.1518 15.1667 10.2616 15.1667 9.33334C15.1667 8.40509 15.5354 7.51485 16.1918 6.85847C16.8482 6.20209 17.7384 5.83334 18.6667 5.83334C19.5949 5.83334 20.4852 6.20209 21.1415 6.85847C21.7979 7.51485 22.1667 8.40509 22.1667 9.33334C22.1667 10.2616 21.7979 11.1518 21.1415 11.8082C20.4852 12.4646 19.5949 12.8333 18.6667 12.8333ZM9.33334 12.8333C8.40508 12.8333 7.51484 12.4646 6.85846 11.8082C6.20208 11.1518 5.83334 10.2616 5.83334 9.33334C5.83334 8.40509 6.20208 7.51485 6.85846 6.85847C7.51484 6.20209 8.40508 5.83334 9.33334 5.83334C10.2616 5.83334 11.1518 6.20209 11.8082 6.85847C12.4646 7.51485 12.8333 8.40509 12.8333 9.33334C12.8333 10.2616 12.4646 11.1518 11.8082 11.8082C11.1518 12.4646 10.2616 12.8333 9.33334 12.8333Z"
                            fill="black"
                        />
                    </svg>
                    <Text style={{ fontSize: '18px', fontWeight: '400' }}>Products List</Text>
                </Row>

                <Row style={{ gap: '40px' }}>
                    <Flex style={{ alignItems: 'center', gap: '10px' }}>
                        <Text style={{ fontSize: '18px', fontWeight: '500' }}>Category</Text>
                        <Select
                            onChange={handleSelectCategory}
                            style={{
                                width: '200px',
                                height: '40px',
                                backgroundColor: '#fff',
                                border: 'none',
                                fontSize: '18px',
                            }}
                            defaultValue={'All'}
                            options={[
                                { label: 'All categories', value: 'All' },
                                { label: 'Dining Room', value: 'Dining Room' },
                                { label: 'Bedroom', value: 'Bedroom' },
                                { label: 'Kitchen', value: 'Kitchen' },
                                { label: 'Office', value: 'Office' },
                                { label: 'Living Room', value: 'Living Room' },
                            ]}
                        />
                    </Flex>

                    <Flex style={{ alignItems: 'center', gap: '10px' }}>
                        <Text style={{ fontSize: '18px', fontWeight: '500' }}>Sorted by</Text>
                        <Select
                            onChange={handleShowBy}
                            style={{
                                width: '200px',
                                height: '40px',
                                backgroundColor: '#fff',
                                border: 'none',
                                fontSize: '18px',
                            }}
                            options={[
                                { label: 'Increasing price', value: 'increasing' },
                                { label: 'Decreasing price', value: 'decreasing' },
                            ]}
                        />
                    </Flex>
                    <Flex style={{ alignItems: 'center', gap: '10px' }}>
                        <Text style={{ fontSize: '18px', fontWeight: '500' }}>Search</Text>
                        <Input.Search
                            size="large"
                            placeholder="Enter product"
                            value={searchValue}
                            allowClear
                            style={{ width: '80%' }}
                            onChange={(e) => setSearchValue(e.target.value)}
                            onSearch={handleSearchProduct}
                            onReset={handleSearchProductReset}
                            // enterButton
                        />
                    </Flex>
                </Row>
            </Row> */}
            <Row gutter={16} style={{ width: '100%', marginTop: '24px' }}>
                <Col span={6}>
                    <CustomMenuShopPage
                        // onClick={onClick}
                        // style={{ width: 256 }}
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode="inline"
                        // items={items}
                        style={{ backgroundColor: 'transparent', width: '80%' }}
                    >
                        <SubMenu key="gender" title="Gender">
                            <MenuItem key="man">Man</MenuItem>
                            <MenuItem key="woman">Woman</MenuItem>
                            <MenuItem key="kid">Kid</MenuItem>
                        </SubMenu>

                        <SubMenu key="categories" title="Categories">
                            <MenuItem key="shirt">Shirt</MenuItem>
                            <MenuItem key="tshirt">T-shirt</MenuItem>
                            <MenuItem key="shorts">Shorts</MenuItem>
                            <MenuItem key="pants">Pants</MenuItem>
                            <MenuItem key="bag">Bag | Backpack</MenuItem>
                            <MenuItem key="shoes">Shoes</MenuItem>
                        </SubMenu>

                        <SubMenu key="brand" title="Brand">
                            <MenuItem key="nike">Nike</MenuItem>
                            <MenuItem key="adidas">Adidas</MenuItem>
                            <MenuItem key="fila">Fila</MenuItem>
                            <MenuItem key="head">Head</MenuItem>
                            <MenuItem key="lining">Lining</MenuItem>
                            <MenuItem key="reebok">Reebok</MenuItem>
                            <MenuItem key="yonex">Yonex</MenuItem>
                        </SubMenu>

                        <SubMenu key="rating" title="Rating">
                            <Rate
                                allowHalf
                                style={{
                                    width: '80%',
                                    marginLeft: '38px',
                                    fontSize: '24px',
                                }}
                            />
                        </SubMenu>

                        <SubMenu key="budgetRange" title="Budget">
                            <Row style={{ marginLeft: '32px' }}>
                                <Col span={14}>
                                    <Slider
                                        min={10}
                                        max={500}
                                        onChange={onChange}
                                        value={typeof inputValue === 'number' ? inputValue : 0}
                                    />
                                </Col>
                                <Col span={2}>
                                    <InputNumber
                                        min={10}
                                        max={100}
                                        style={{ margin: '0 16px' }}
                                        value={inputValue}
                                        onChange={onChange}
                                    />
                                </Col>
                            </Row>
                        </SubMenu>

                        <SubMenu key="sortPrice" title="Sort Price">
                            <MenuItem key="increase">Increase</MenuItem>
                            <MenuItem key="decrease">Decrease</MenuItem>
                        </SubMenu>
                    </CustomMenuShopPage>
                </Col>
                <Col span={18}>
                    <Flex vertical justify="center" align="center">
                        <div className="product_list_grid">
                            <Products productsDetailList={paginatedProducts} />
                        </div>
                        <Pagination
                            style={{ marginTop: '40px' }}
                            showSizeChanger={false}
                            onChange={handlePageChange}
                            defaultCurrent={1}
                            current={currentPage}
                            total={totalProducts}
                            pageSize={pageSize}
                        />
                    </Flex>
                </Col>
            </Row>
        </Flex>
    );
};
