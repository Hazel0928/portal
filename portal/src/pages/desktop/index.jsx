import React from 'react';
import ReactDOM from 'react-dom';
import { getScrollTop, getLink } from '../../../utils';
import { getKvRequest, getServerlessApi } from '../../../utils/request';
import Header from '../../components/header';
import Button from '../../components/button';
import Footer from '../../components/footer';
import Language from '../../components/language';
import Item from './featureItem';
import desktopConfig from '../../../site_config/desktop';

import './index.scss';

class Desktop extends Language {

    constructor(props) {
        super(props);
        this.state = {
            headerType: 'primary',
        };
    }

    componentDidMount = async () => {
        window.addEventListener('scroll', () => {
            const scrollTop = getScrollTop();
            if (scrollTop > 66) {
                this.setState({
                    headerType: 'normal',
                });
            } else {
                this.setState({
                    headerType: 'primary',
                });
            }
        });
        const kvStoreData = await getKvRequest('/user.json'); // 获取kv 的动态数据
        console.log(kvStoreData);

        const serverlessData = await getServerlessRequest('/apis'); // 获取函数接口 的动态数据
        console.log(serverlessData);


    }



    render() {
        const language = this.getLanguage();
        const dataSource = desktopConfig[language];
        const { headerType } = this.state;
        const headerLogo = '/img/sdLogoblack.png';
        return (
            <div className="desktop-page">
                <section className="top-section" style={{ backgroundImage: 'none' }}>
                    <Header
                        currentKey="home"
                        type={headerType}
                        logo={headerLogo}
                        language={language}
                        onLanguageChange={this.onLanguageChange}
                    />
                    <div className="vertical-middle">
                        <div className="product-name">
                            <h2>{dataSource.brand.brandName}</h2>
                        </div>
                        <p className="product-desc">{dataSource.brand.briefIntroduction}</p>
                        <div className="button-area">
                            {
                                dataSource.brand.buttons.map(b => <Button type={b.type} key={b.type} link={b.link} target={b.target}>{b.text}</Button>)
                            }
                        </div>
                    </div>
                </section>
                <section className="introduction-section">
                    <div className="introduction-body">
                        <div className="introduction">
                            <h3>ServerlessDesktop新发布</h3>
                            <p>应用下载进行安全优化，避免破坏已有的文件内容,应用配置部分实现可视化和配置联动</p>
                        </div>
                        <div style={{ height: 500, position: 'relative' }} className="introduction">
                            <img src={'https://img.alicdn.com/imgextra/i4/O1CN01DhnWI328dtnjNBZKw_!!6000000007956-2-tps-2700-1830.png'} className="ab ab-1" />
                            <img src={'https://img.alicdn.com/imgextra/i1/O1CN01iGkko01HgwnmQFW4l_!!6000000000788-2-tps-2700-1830.png'} className="ab ab-2" />
                        </div>
                    </div>
                </section>
                <section className="introduction-section">
                    <div className="introduction-body">
                        <div style={{ height: 500, position: 'relative' }} className="introduction">
                            <img src={'https://img.alicdn.com/imgextra/i4/O1CN01DhnWI328dtnjNBZKw_!!6000000007956-2-tps-2700-1830.png'} className="ab ab-1" />
                            <img src={'https://img.alicdn.com/imgextra/i1/O1CN01iGkko01HgwnmQFW4l_!!6000000000788-2-tps-2700-1830.png'} className="ab ab-2" />
                        </div>
                        <div className="introduction">
                            <h3>ServerlessDesktop新发布</h3>
                            <p>应用下载进行安全优化，避免破坏已有的文件内容,应用配置部分实现可视化和配置联动</p>
                        </div>

                    </div>
                </section>
                <section className="introduction-section">
                    <div className="introduction-body">
                        <div className="introduction">
                            <h3>ServerlessDesktop新发布</h3>
                            <p>应用下载进行安全优化，避免破坏已有的文件内容,应用配置部分实现可视化和配置联动</p>
                        </div>
                        <div style={{ height: 500, position: 'relative' }} className="introduction">
                            <img src={'https://img.alicdn.com/imgextra/i4/O1CN01DhnWI328dtnjNBZKw_!!6000000007956-2-tps-2700-1830.png'} className="ab ab-1" />
                            <img src={'https://img.alicdn.com/imgextra/i1/O1CN01iGkko01HgwnmQFW4l_!!6000000000788-2-tps-2700-1830.png'} className="ab ab-2" />
                        </div>
                    </div>
                </section>

                <Footer logo="/img/dubbo_gray.png" language={language} />
            </div>
        );
    }
}

document.getElementById('root') && ReactDOM.render(<Desktop />, document.getElementById('root'));

export default Desktop;
