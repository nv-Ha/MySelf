import './Blog.css';
import TextTitle from '../../component/TextTitle/TextTitle';
import LineText from '../../component/LineText/LineText';
import React, { forwardRef } from 'react';
import LayoutAll from '../../component/LayoutAll/LayoutAll';

const Blog = forwardRef((props, ref) => {
    return (
        <div className="Blog" ref={ref}>
            <LayoutAll>
                <div className="Blog_Title">
                    <TextTitle>
                        <p>Blog</p>
                    </TextTitle>
                    <LineText className="Blog_Line" />
                </div>
                {/* Content */}
                <div className="Blog_List">
                    <div className="Blog_Items">
                        <div className="Blog_contents">
                            {/* Image */}
                            <div className="Blog_img">
                                <img
                                    className="Blog_img_Items Blog_img_Items_children_1"
                                    src="https://topdev.vn/blog/wp-content/uploads/2023/03/front-end-tools.png"
                                    alt=""
                                />
                            </div>
                            {/* Text */}
                            <div className="Blog_Text">
                                <p>Tools</p>
                                <p>Front-End tools full screen</p>
                                <p>08/12/2023</p>
                            </div>
                        </div>
                        <div className="Blog_contents">
                            <div className="Blog_img">
                                <img
                                    className="Blog_img_Items"
                                    src="https://t3.ftcdn.net/jpg/03/18/60/62/360_F_318606217_Hk8jo2MVoI33SQOkYrfOF929J7JgIP0P.jpg"
                                    alt=""
                                />
                            </div>
                            {/* Text */}
                            <div className="Blog_Text">
                                <p>Tools</p>
                                <p>Front-End tools full screen</p>
                                <p>08/12/2023</p>
                            </div>
                        </div>
                        <div className="Blog_contents">
                            <div className="Blog_img">
                                <img
                                    className="Blog_img_Items Blog_img_Items_children_2"
                                    src="https://www.supremetech.vn/wp-content/uploads/2022/04/img-001.png"
                                    alt=""
                                />
                            </div>
                            {/* Text */}
                            <div className="Blog_Text">
                                <p>Tools</p>
                                <p>Front-End tools full screen</p>
                                <p>08/12/2023</p>
                            </div>
                        </div>
                    </div>
                    {/* --- */}
                    <div className="Blog_Items">
                        <div className="Blog_contents">
                            <div className="Blog_img">
                                <img
                                    className="Blog_img_Items"
                                    src="https://vtiacademy.edu.vn/upload/images/front-end-hoc-gi-nhung-ky-nang-can-thiet-cho-lap-trinh-vien-front-end-.png"
                                    alt=""
                                />
                            </div>
                            {/* Text */}
                            <div className="Blog_Text">
                                <p>Tools</p>
                                <p>Front-End tools full screen</p>
                                <p>08/12/2023</p>
                            </div>
                        </div>
                        <div className="Blog_contents">
                            <div className="Blog_img">
                                <img
                                    className="Blog_img_Items"
                                    src="https://lh3.googleusercontent.com/HOGoZyHHVU0ECrfZfjrPJ7rQgI-R7I-I1gFUo2kHUm--9CcUVzgr1CMt-exkSe2zsjdJjkvLwkKfHkaw4kB6_0Ir8Jn-Emal8N8Bp8nh42U0ez9_Etdz8NwLgggpe6qq7OA9Ttalme3guP-Hwg7oQ3y7L9NZwnYPh8035vy4rdOTECN0KsNwjxAdGPdqag"
                                    alt=""
                                />
                            </div>
                            {/* Text */}
                            <div className="Blog_Text">
                                <p>Tools</p>
                                <p>Front-End tools full screen</p>
                                <p>08/12/2023</p>
                            </div>
                        </div>
                        <div className="Blog_contents">
                            <div className="Blog_img">
                                <img
                                    className="Blog_img_Items"
                                    src="https://digitalpress.fra1.cdn.digitaloceanspaces.com/4tg23ij/2019/12/1_mtsk3fQ_BRemFidhkel3dA.png"
                                    alt=""
                                />
                            </div>
                            {/* Text */}
                            <div className="Blog_Text">
                                <p>Tools</p>
                                <p>Front-End tools full screen</p>
                                <p>08/12/2023</p>
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutAll>
        </div>
    );
});

export default Blog;
