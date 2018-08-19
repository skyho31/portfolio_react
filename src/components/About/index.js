import React from 'react';
import '../../styles/index.scss';

import '../../styles/about.scss';
import Data from '../../data/about.json';


const About = () => (
	<div className="section about">
		<Profile />
		<hr />
		<History />
		<hr />
		<SkillBox />
	</div>
);

const Profile = () => {
	return (
		<div>
			<div className="works title">
				<img src="./imgs/myPic.jpg" id="myPic" alt="myPic"/>
				</div>
				<div className="works start">
						<p><b>안녕하세요, 김선호입니다 :)</b>
						<br/>자바스크립트를 통한 웹 및 앱 개발을 하고 있으며, 새로운 기술을 배우는 걸 즐겨하는 개발자입니다.</p>
				</div>
		</div>
	)
}

const History = () => {
	return (
		<div className="works history">
			<div className="works title">
					<p>HISTORY</p>
			</div>
			<div className="hisBox"></div>
		</div>
	)
}

const SkillBox = () => {
	return (
		<div>
			<div className="works skillBox">
				<div className="works title">
						<p>AVAILABLE SKILLS</p>
				</div>
				{
					Data.skill.useable ? Data.skill.useable.map((value, index) => (
						<SkillCard {...value} key={index}/>
					)) : ''
				}
			</div>
			<hr />
			<div className="works skillBox">
				<div className="works title">
						<p>STUDYING SKILL</p>
				</div>
				{
					Data.skill.study ? Data.skill.study.map((value, index) => (
						<SkillCard {...value} key={index}/>
					)) : ''
				}
			</div>
		</div>
	)
}

const SkillCard = (props) => {
	const {name, imgPath} = props;
	return (
		<div className="skill">
				<div className="skillWrap">
						<p>{name}</p>
				</div>
				<img src={imgPath} alt={imgPath}/>
		</div>
	)
}
export default About;