import React from "react";
import {
    Container,
    Group,
    SmallGroup,
    Text,
    Description,
    Image,
    Title
} from "./styles/MovieInfo";

export default function MovieInfo({ children, ...restProps }){
    return <Container {...restProps}>
        {children}
    </Container>
}

MovieInfo.Group = function MovieInfoGroup({ children, ...restProps }) {
    return <Group {...restProps}>
        {children}
    </Group>
}
MovieInfo.Image = function MovieInfoImage({ children, ...restProps }) {
  return <Image {...restProps}>{children}</Image>;
};
MovieInfo.Title = function MovieInfoTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
MovieInfo.SmallGroup = function MovieInfoSmallGroup({ children, ...restProps }) {
  return <SmallGroup {...restProps}>{children}</SmallGroup>;
};
MovieInfo.Text = function MovieInfoText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
MovieInfo.Description = function MovieInfoDescription({ children, ...restProps }) {
  return <Description {...restProps}>{children}</Description>;
};
