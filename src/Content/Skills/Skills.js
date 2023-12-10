import Charts from '../../component/Chart/Chart';
import TextTitle from '../../component/TextTitle/TextTitle';
import RedLine from '../../component/RedLine/RedLine';
import LineText from '../../component/LineText/LineText';
import React, { forwardRef } from 'react';

import './Skills.css';

const Skill = forwardRef((props, ref) => {
    return (
        <div className="Skill" ref={ref}>
            <div className="Skill_All">
                <TextTitle>
                    <p>Skill</p>
                </TextTitle>
                <LineText className="Skill_Line" />

                <div className="Education">
                    <div className="Skill_List">
                        <div className="Skill_List_Items">
                            <div className="Skill_Box Skill_Box_Left">
                                <p>2020</p>
                                <p>Pass the university </p>
                                <p>I passed the Hanoi University of Industry major in software design</p>
                            </div>
                            <div className="Skill_Box Skill_Box_Left">
                                <p>2024</p>
                                <p>Pass the university </p>
                                <p>I passed the Hanoi University of Industry major in software design</p>
                            </div>
                        </div>

                        {/* ----Red Line */}
                        <RedLine />
                        {/* ----Red Line */}

                        <div className="Skill_List_Items">
                            <div className="Skill_Box Skill_Box_right">
                                <p>2020</p>
                                <p>Pass the university </p>
                                <p>I passed the Hanoi University of Industry major in software design</p>
                            </div>
                        </div>
                    </div>
                    {/* --Line-- */}

                    {/* --- */}
                    <div className="Skill_List">
                        <div className="Skill_List_Chart">
                            <Charts />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default Skill;
