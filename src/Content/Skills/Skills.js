import Charts from '../../component/Chart/Chart';
import TextTitle from '../../component/TextTitle/TextTitle';
import RedLine from '../../component/RedLine/RedLine';
import './Skills.css';

function Skill() {
    return (
        <div className="Skill">
            <TextTitle>
                <p>Skill</p>
            </TextTitle>

            <div className="Education">
                <div className="Skill_List">
                    <div className="Skill_List_RedLine">
                        <RedLine />
                    </div>
                </div>
                {/* --- */}
                <div className="Skill_List">
                    <div className="Skill_List_Chart">
                        <Charts />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skill;
