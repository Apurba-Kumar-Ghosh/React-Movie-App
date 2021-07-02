import styled from 'styled-components'

export const Container = styled.section`
display : flex;
width : 80vw;
margin : 5em auto;`;
export const Text = styled.p``;
export const Group = styled.div`
display : flex;
flex-direction : column;
align-items : center;
gap : 2em;`;
export const SmallGroup = styled.div`
display : flex;

${Text}{
    padding : 0 10px;
    border-right : 1px solid black;
    &:last-of-type {
        border : none;
    }
}
`;
export const Description = styled.div``;
export const Image = styled.div`
width : 100%;
height : 100%;
img{
    width : 90%;
    height : 90%;
    object-fit : cover;
}`;
export const Title = styled.div`
font-size : 1.5em;
font-weight : 700;`;
