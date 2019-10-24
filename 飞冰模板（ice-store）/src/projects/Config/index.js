import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import stores from '@/stores';
import Container from '@icedesign/container';
import { Input, Button, Icon } from '@alifd/next';
import './Config.scss';
import { callHttp } from '@/common';

function Config() {
    const { data } = stores.useStore('config');

    const { name } = data;
    return (
        <div className="page-container">
            <Container>
                <Button>{name}</Button>
            </Container>
        </div>
    );
}

const rootElement = document.getElementById('ice-container');
ReactDOM.render(<Config />, rootElement);