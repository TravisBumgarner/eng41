import styled from 'styled-components';

import Card from '../../containers/Card';

import {
  PRIMARY_COLOR,
  DEFAULT_PAGE_WRAPPER,
  SECONDARY_COLOR,
  FONT_CONTENT,
} from "../../theme";

const ScrollingCardLeft = styled(Card)`
  position: absolute;
  top: 10px;
  width: 100%;
  transition: left 0.5s, display 2s;
  left: ${props => props.isProjectOpen ? '-100vw' : '0'};  
`;

const ScrollingCardRight = ScrollingCardLeft.extend`
  left: 100vw;
  ${props => props.isProjectOpen ? 'left: 0' : 'left: 100vw'};    
`;

const PortfolioWrapper = styled.div`
  position: relative;
  width: 75%;
  max-width: 1024px;
  margin: 20vh auto 0;
  color: ${PRIMARY_COLOR};
  background-color: ${SECONDARY_COLOR};
  font-family: ${FONT_CONTENT};
`;

const ProjectsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const SingleProjectWrapper = styled.div`
  
`;

export {
  ProjectsWrapper,
  PortfolioWrapper,
  SingleProjectWrapper,
  ScrollingCardLeft,
  ScrollingCardRight,
}

