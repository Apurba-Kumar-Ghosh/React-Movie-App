import React from 'react'
import {
    Container,
    Group,
    Title,
    SubTitle,
    Text,
    Entities,
    Meta,
    Item,
  Image,
    Button
} from './styles/movieList'




export default function MovieList({ children, ...restProps }) {

  return (
      <Container {...restProps}>{children}</Container>
    );
}

MovieList.Group = function MovieListGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

MovieList.Title = function MovieListTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

MovieList.SubTitle = function MovieListSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

MovieList.Text = function MovieListText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

MovieList.Entities = function MovieListEntities({ children, ...restProps }) {
  return <Entities {...restProps}>{children}</Entities>;
};

MovieList.Meta = function MovieListMeta({ children, ...restProps }) {
  return <Meta {...restProps}>{children}</Meta>;
};

MovieList.Item = function MovieListItem({ item, children, ...restProps }) {
  return (
    <Item {...restProps}>
      {children}
    </Item>
  );
};

MovieList.Image = function MovieListImage({ ...restProps }) {
  return <Image {...restProps} />;
};
MovieList.Button = function MovieListButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};

