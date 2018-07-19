// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import iconGallery from './icons/icon-gallery.svg';

const StGallery = styled.div`
  padding: 15px 0;
`;

const Head = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const Icon = styled.img`
  display: block;
  width: 15px;
  height: 15px;
  margin-right: 12px;
`;

const Title = styled(Link)`
  font-size: 14px;
  line-height: 16px;
  font-weight: normal;
  text-decoration: none;
  color: #1da1f2;
  &:hover {
    text-decoration: underline;
  }
`;

const GalleryList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -2px;
`;

const StGalleryLink = styled(Link)`
  box-sizing: border-box;
  width: 33.33%;
  margin-bottom: 4px;
  padding: 0 2px;
  overflow: hidden;
`;

const Img = styled.img`
  display: block;
  width: 100%;
`;

type Props= {
  to: string,
  img: string,
  description: string,
};

function GalleryLink(props: Props) {
  const { to, img, description } = props;
  return (
    <StGalleryLink to={to}>
      <Img src={img} alt={description} />
    </StGalleryLink>
  );
}

function Galleries() {
  const publicUrl = process.env.PUBLIC_URL;
  if (!publicUrl && publicUrl !== '') throw new Error('Missing PUBLIC_URL');
  const galleriesData: Array<Object> = [
    {
      to: '/galleryElem',
      img: `${publicUrl}/img/gallery1.jpg`,
      description: 'GalleryElemDescr',
    },
    {
      to: '/galleryElem',
      img: `${publicUrl}/img/gallery2.jpg`,
      description: 'GalleryElemDescr',
    },
    {
      to: '/galleryElem',
      img: `${publicUrl}/img/gallery3.jpg`,
      description: 'GalleryElemDescr',
    },
    {
      to: '/galleryElem',
      img: `${publicUrl}/img/gallery4.jpg`,
      description: 'GalleryElemDescr',
    },
    {
      to: '/galleryElem',
      img: `${publicUrl}/img/gallery5.jpg`,
      description: 'GalleryElemDescr',
    },
    {
      to: '/galleryElem',
      img: `${publicUrl}/img/gallery6.jpg`,
      description: 'GalleryElemDescr',
    },
  ];

  const galleriesList = galleriesData.map(gallery => (
    <GalleryLink
      key={Math.random()}
      to={gallery.to}
      img={gallery.img}
      description={gallery.description}
    />
  ));

  return (
    <StGallery>
      <Head>
        <Icon src={iconGallery} alt="photos and videos" />
        <Title to="/gallery">
          522 Photos and videos
        </Title>
      </Head>

      <GalleryList>
        {galleriesList}
      </GalleryList>
    </StGallery>
  );
}

export default Galleries;
