import React from 'react';
import "../../vender/glyphicons.css";
import '../../styles/works.scss';

import Data from '../../data/work.json';

class Work extends React.Component {
  render() {
    return (
      <div className="section work">
        <div className="container">
          {Data.items.map((value, index) => {
            return <Card {...value} key={index}/>
          })}
        </div>
      </div>
    )
  }
}

const Card = (value) => {
  const {
    title,
    description,
    skill,
    git,
    imgPath
  } = value;

  const cardStyle = imgPath ? {
    backgroundImage: `url(${imgPath})`
  } : {
    height:'80px', border:'none'
  }

  return (
    <div>
      <div className="works title">
        <p>
          <b>{title}</b>
          <br/>{description}</p>
          <ul className="git">
            {git ? git.map((value, index) => {
              return <li key={index}><a className="github" href={value}>{value}</a></li>
            }): ''}
          </ul>
          
        <ul className="skillBox">
          {skill.map((value, index) => {
            return <li key={index}>{value}</li>
          })}
        </ul>
      </div>
      <div className="works piece" style={cardStyle}>
        <div className="pieceWrap"></div>
      </div>
    </div>
  )
}

export default Work;