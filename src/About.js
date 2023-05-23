import React from "react";
import '../src/About.css';
import DownloadAndContact from "./DownloadAndContact";


const About = () => {
    return(
        <section id="aboutme">
            <div className="container">
                <div className="aboutme_header">
                    <h1>关于我</h1>
                    <div className="divider"></div>
                </div>
                <div className="aboutme_content">
                    <div className="aboutme_content_description">
                        <h2>Hi, 我是 Ben. 很高兴认识你</h2>
                        <p>我是 <span>一位前端 Web 开发人员</span> 热衷于构建漂亮的前端网站和 Web 应用程序。
                        我很高兴能够做我喜欢做的事并帮助他人解决他们的问题。可以查看我的一些作品在
                            <span> 项目</span> 部分。
                        </p>
                        <p>每次从事新项目时，我都非常自信，天生好奇，并且一直致力于提高我的 <span>技能</span>。</p>
                        <p>
                            我乐于接受可以贡献、学习和成长的<span>工作</span>机会。 如果您有适合我的技能和经验的好机会，请不要犹豫与我<span>联系</span>。
                        </p>
                        <DownloadAndContact />
                    </div>
                    <div className="aboutme_content_skills">
                        <h2>我的技能</h2>
                        <div className="allSkills">
                            <span className="singleSkill">HTML</span>
                            <span className="singleSkill">CSS</span>
                            <span className="singleSkill">Javascript</span>
                            <span className="singleSkill">React</span>
                            <span className="singleSkill">SASS</span>
                            <span className="singleSkill">GIT</span>
                            <span className="singleSkill">Github</span>
                            <span className="singleSkill">响应式Web设计技</span>
                            <span className="singleSkill">Bootstrap</span>
                            <span className="singleSkill">Figma</span>
                            <span className="singleSkill">Java 基础</span>
                            <span className="singleSkill">SQL 基础</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About;