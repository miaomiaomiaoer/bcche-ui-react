import React from 'react';

import type { LoadingComponentsProps } from '@/types';

import './index.scss';

const Loading: React.FC<LoadingComponentsProps> = ({ className = '' }) => {
	return (
        <div className="loading-modal-two">
            <div className='loading-modal-loading'>
                <img className='loading-modalimg' src='https://pic2.58cdn.com.cn/p1/big/n_v203ba4dd38c3f4ecd8a287001ba30b7e9.jpg'></img>
                <p className='loading-modal-sure'>加载中...</p>
            </div>
        </div>
	);
};

export default Loading;
