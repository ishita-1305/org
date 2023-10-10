import React from 'react';
import styled from 'styled-components';
import { hero } from '../../../config';
import "./DevfolioBtn.css"

const Wrapper = styled.div`
  // display: flex;
  // justify-content: left;
  // align-items: center;
  // background-color: #fff;
  // padding: 9px 14px 8px;
  // border-radius: 4px;
  // margin-left: 14px;
  // color: black;

  @media only screen and (max-width: 542px) {
    // display: none;
    // font-size: 20px;

  }
`;

const Image = styled.img`
  height: 25px;
  width: auto;
`;
const discord = styled.div`
  height: 25px;
  width: auto;
  color: black;
`;

function DiscordButton() {
  return (
    // <Wrapper>
    //   <a href={hero.links.discord.link} target='_blank' rel='noreferrer noopener'>
    //     <div className="discord">D</div>
    //   </a>
    // </Wrapper>
    <Wrapper>

    <div className="btn" ontouchstart="">
        <div className="register_btn">
          <button><a href="">D</a></button>
        </div>
      </div>
    </Wrapper>
  );
}

export default DiscordButton;
