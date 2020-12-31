import React, { useEffect, useState } from 'react';
import { Card } from '@shopify/polaris';
import { List, Avatar, Button, Skeleton } from 'antd';
import axios from 'axios';
const ProductList = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get(`https://congbackend.omegatheme.com/product-faqs/admin/functions/faqs.php?action=getProducts&shop=haonm.myshopify.com&page=1&flag=0&since_id=0`)
            .then(data => {
                setData(data.data.products)
            })
            .catch(error => console.log(error));
    }, []);
    return (
        <div>
            <Card sectioned>
                <List
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={<Avatar src={item.imageUrl} />}
                                title={<a href={item.productUrl}>{item.title}</a>}

                            />
                        </List.Item>
                    )}
                />,
            </Card>
        </div>
    );
}

export default ProductList;
