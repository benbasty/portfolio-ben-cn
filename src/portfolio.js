import {React , useEffect } from 'react';
import './portfolio.css';
import Dealbreaker from '../src/assets/dealbreaker-min.png';
import Patatos from '../src/assets/patatos-min.png';
import WeatherAPP from '../src/assets/weatherapp-min.png';
// import IMG4 from '../src/assets/portfolio4.jpg';
// import IMG5 from '../src/assets/portfolio5.png';
// import IMG6 from '../src/assets/portfolio6.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';

const data = [
    {
        id: 1,
        image: Dealbreaker,
        title: '电子商务网站',
        type: '电子商务网站',
        desc: 'Dealbreaker 是一个电子商务网站，允许用户浏览他们最喜欢的图片、将商品添加到购物车、下订单、阅读博客。 它是使用 React 前端构建的，并部署在 github 页面上。',
        tools: ["HTML", "CSS", "Javascript", "React"],
        toolID: 11,
        github: 'https://github.com/benbasty/ecommercereact',
        livedemo: 'https://benbasty.github.io/ecommercereact/'
    },
    {
        id: 2,
        image: Patatos,
        title: '餐厅网站',
        type: '餐厅网站',
        desc: 'Patatos 是一个网站和餐厅应用程序，让用户可以浏览食物菜单和所有特价菜单项目列表。 该应用程序旨在让客户能够在线预订和预订座位。',
        tools: ["HTML", "CSS", "Javascript", "React"],
        toolID: 22,
        github: 'https://github.com/benbasty/littlelemon',
        livedemo: 'https://benbasty.github.io/littlelemon/'
    },
    {
        id: 3,
        image: WeatherAPP,
        title: '天气应用',
        type: '天气应用',
        desc: '此天气应用程序显示给定位置的实时数据。 它使用两个外部 API 来获取天气数据，并具有搜索、自动完成和位置检测等功能。 这个天气应用程序是完全响应的。',
        tools: ["HTML", "CSS", "React", "Javascript", "Rapid API GoeCities", "OpenWeatherMap API"],
        toolID: 33,
        github: 'https://github.com/benbasty/weatherapp',
        livedemo: 'https://benbasty.github.io/weatherapp/'
    }
]

function Portfolio() {

    useEffect(() => {
        Aos.init(
          {duration: 800}
        );
    }, []);

    return(
        <section id="projects">
            {/* <h5>My Recent Projects</h5> */}
            <h1>作品集</h1>
            <div className="divider"></div>
            <div className='container alt_portfolio'>
                {
                    data.map(({id, image, title, type, desc, tools, toolID, github, livedemo}) => {
                        return(
                            <article key={id} className='alt_portfolio_item'>
                                <div className='alt_portfolio_item_image'>
                                    <img src={image} alt={title} />
                                </div>
                                <div className='alt_portfolio_item_description'>
                                    <div className='alt_portfolio_project'>
                                        <h1 className='alt_portfolio_project_name'>{title}</h1>
                                        <h4 className='alt_portfolio_project_type'>{type}</h4>
                                        <p className='alt_portfolio_project_desc'>{desc}</p>
                                    </div>
                                    <div className="alt_portfolio_project_tools">
                                        <h2>工具</h2>
                                        <div className="allTools">
                                            {
                                                tools.map((tool, toolID) => {
                                                    return(
                                                        <span key={toolID} className="tool">{tool}</span>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                    <div className='alt-portfolio-item-buttons'>
                                        <a href={github} className="btn sourcecode" target='_blank' rel="noreferrer">源代码</a>
                                        <a href={livedemo} className="btn btn-primary livedemo" target='_blank' rel="noreferrer">网站</a>
                                    </div>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Portfolio;