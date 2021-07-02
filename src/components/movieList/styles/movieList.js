import styled from 'styled-components'

export const Container = styled.div``;
export const Group = styled.div`
display : flex;
flex-direction : column;
align-items : center;
gap : 3em;`;
export const Title = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin-left: 56px;
  margin-right: 56px;
  margin-top: 0;
`;
export const Text = styled.p`
  margin-top: 5px;
  font-size: 10px;
  color: white;
  margin-bottom: 0;
  user-select: none;
  display: none;
  line-height: normal;
`;
export const Image = styled.img`
  border: 0;
  width: 100%;
  max-width: 305px;
  cursor: pointer;
  height: auto;
  padding: 0;
  margin: 0;
`;
export const Entities = styled.div`
margin-left : 100px;
display : flex;
flex-direction : row;
flex-wrap : wrap;`;
export const Meta = styled.div`
  display: none;
  position: absolute;
  bottom: 0;
  padding: 10px;
  background-color: #0000008f;
`;
export const SubTitle = styled.p`
  font-size: 12px;
  color: white;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 0;
  user-select: none;
  display: none;
`;
export const Item = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 5px;
  position: relative;
  cursor: pointer;
  transition: transform 0.2;

  &:hover {
    transform: scale(1.1);
    z-index: 99;
  }
  &:hover ${Meta}, &:hover ${Text}, &:hover ${SubTitle} {
    display: block;
    z-index: 100;
  }
`;
export const Button = styled.div`
  width : fit-content;
  text-align : center;
  margin : 5em auto;
  color : white;
  font-weight : bold;
  border-radius : 5px;
  padding: 1em 2em;
  background: #007645;
  transition: transform 0.5s;
  &:hover {
    transform: scale(1.2);
    cursor: pointer;
  }
`;

