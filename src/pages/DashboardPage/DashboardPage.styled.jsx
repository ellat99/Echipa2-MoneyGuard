import { styled, keyframes } from 'styled-components';
import bcg from '../../images/gradient.webp';

export const SectionContainer = styled.section`
  overflow: clip;
  min-height: 100vh;
  background-image: url(${bcg});
  background-position: top;
  top:0px;
	width:100%;
	height:100%;
  min-height: 800px;
	position:absolute;
	left:0%;
  background-size: cover;
}
  
  `;

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;

  @media only screen and (min-width: 768px) {
    gap: 20px;
  }

  @media only screen and (min-width: 1280px) {
    flex-direction: row;
    height: calc(100vh - 80px);
    gap: 0;
  }
`;

export const GradientRightBottom = styled.div`
  z-index: -20;
  position: absolute;
  width: 362.381px;
  height: 362.381px;
  border-radius: 362.381px;
  background: linear-gradient(220deg, #6d54eb 28.31%, #652392 66.76%);
  filter: blur(121.80889129638672px);
  top: 241.62px;
  left: 122.29px;

  @media only screen and (min-width: 768px) {
    width: 893px;
    height: 901px;
    border-radius: 901px;
    background: linear-gradient(
      220deg,
      rgba(109, 84, 235, 0.6) 28.31%,
      rgba(101, 35, 146, 0.6) 66.76%
    );
    filter: blur(200px);
    top: 450px;
    left: 298px;
  }

  @media only screen and (min-width: 1280px) {
    width: 893px;
    height: 901px;
    border-radius: 901px;
    background: linear-gradient(
      220deg,
      rgba(109, 84, 235, 0.6) 28.31%,
      rgba(101, 35, 146, 0.6) 66.76%
    );
    top: 197px;
    left: 682px;
  }
`;

export const GradientRightTop = styled.div`
  z-index: -20;
  position: absolute;
  width: 539px;
  height: 539px;
  border-radius: 539px;
  background: rgba(47, 21, 176, 0.73);
  filter: blur(100px);

  @media only screen and (min-width: 768px) {
    width: 549px;
    height: 554px;
    border-radius: 554px;
    background: linear-gradient(211deg, #652392 39.99%, #341fa0 59.67%);
    filter: blur(150px);
    top: -246px;
    left: 314px;
  }

  @media only screen and (min-width: 1280px) {
    width: 363px;
    height: 366.105px;
    border-radius: 366.105px;
    background: #302e8e;
    top: 71.43px;
    left: 1113px;
  }
`;

export const GradientLeftBottom = styled.div`
  z-index: -20;
  position: absolute;
  width: 454px;
  height: 454px;
  border-radius: 454px;
  background: rgba(47, 21, 176, 0.73);
  filter: blur(100px);
  top: -9px;
  right: -87px;

  @media only screen and (min-width: 768px) {
    width: 819px;
    height: 825px;
    border-radius: 825px;
    background: linear-gradient(
      207deg,
      rgba(52, 31, 160, 0.8) 46.11%,
      rgba(101, 35, 146, 0.8) 63.65%
    );
    filter: blur(200px);
    top: 529px;
    right: 245px;
  }

  @media only screen and (min-width: 1280px) {
    width: 760px;
    height: 766px;
    border-radius: 766px;
    background: linear-gradient(207deg, #341fa0 46.11%, #652392 63.65%);
    top: 189px;
    right: 700px;
  }
`;

export const GradientLeftTop = styled.div`
  z-index: -20;
  position: absolute;
  width: 434.249px;
  height: 434.249px;
  border-radius: 434.249px;
  background: linear-gradient(
    220deg,
    rgba(109, 84, 235, 0.73) 28.31%,
    rgba(101, 35, 146, 0.73) 66.76%
  );
  filter: blur(121.80889129638672px);
  top: -244px;
  right: 166.75px;

  @media only screen and (min-width: 768px) {
    width: 739px;
    height: 745px;
    border-radius: 745px;
    background: linear-gradient(
      220deg,
      rgba(109, 84, 235, 0.6) 28.31%,
      rgba(101, 35, 146, 0.6) 66.76%
    );
    filter: blur(200px);
    top: -46px;
    right: 500px;
  }

  @media only screen and (min-width: 1280px) {
    width: 739px;
    height: 745px;
    border-radius: 745px;
    background: linear-gradient(
      220deg,
      rgba(109, 84, 235, 0.6) 28.31%,
      rgba(101, 35, 146, 0.6) 66.76%
    );
    top: -210.29px;
    right: 748px;
  }
`;

export const NavAndBalanceWrapper = styled.div`
  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    width: calc(50% - 16px);
  }

  @media only screen and (min-width: 1280px) {
    width: 100%;
  }
`;

export const LeftContainer = styled.div`
  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 32px;
  }

  @media only screen and (min-width: 1280px) {
    flex-direction: column;
    width: 464px;
    position: relative;
    height: calc(100vh - 80px);

    &::after {
      content: '';
      width: 1px;
      height: 100%;
      position: absolute;
      right: 0;
      background-color: var(--transparency-60);
    }
  }
`;

const loaderAnimation = keyframes`
  0% {
    width: 80px;
    height: 80px;
    opacity: 0.6;
    transform: translate(0, 0px) rotateZ(0deg);
  }
  75% {
    width: 80px;
    height: 80px;
    opacity: 0.8;
    transform: translate(100px, 600px) rotateZ(270deg);
  }
  100% {
    width: 80px;
    height: 80px;
    opacity:0;
    transform: translate(150px, 800px) rotateZ(360deg);
  }
`;

export const Loader = styled.div`
  text-align: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

export const LoaderSpan = styled.span`
  display: inline-block;
  margin: -280px 40px 54px -34px;
  background: url('https://cdn.theatlantic.com/assets/media/img/posts/Screen%20Shot%202013-10-08%20at%209.13.38%20AM.png');
  background-size: contain;
  animation: ${loaderAnimation} 15s infinite linear forwards;
`;

export const LoaderSpanSpecific = styled(LoaderSpan)`
  &:nth-child(5n + 5) {
    animation-delay: 1.3s;
  }
  &:nth-child(3n + 2) {
    animation-delay: 1.5s;
  }
  &:nth-child(2n + 5) {
    animation-delay: 1.7s;
  }
  &:nth-child(3n + 10) {
    animation-delay: 2.7s;
  }
  &:nth-child(7n + 2) {
    animation-delay: 3.5s;
  }
  &:nth-child(4n + 5) {
    animation-delay: 5.5s;
  }
  &:nth-child(3n + 7) {
    animation-delay: 8s;
  }
  &:nth-child(8n + 4) {
    animation-delay: 10.5s;
  }
  &:nth-child(9n + 3) {
    animation-delay: 13s;
  }
  &:nth-child(10n + 7) {
    animation-delay: 15.5s;
  }
  &:nth-child(11n + 5) {
    animation-delay: 18s;
  }
  &:nth-child(12n + 2) {
    animation-delay: 20.5s;
  }
`;
