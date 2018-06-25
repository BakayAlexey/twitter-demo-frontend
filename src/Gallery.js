import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import iconGallery from "./icons/icon-gallery.svg";

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

function GalleryLink(props) {
  return (
    <StGalleryLink to={props.to}>
      <Img src={props.img} alt={props.descr} />
    </StGalleryLink>
  );
}

function Gallery() {
  return (
    <StGallery>
      <Head>
        <Icon src={iconGallery} alt="photos and videos" />
        <Title to="/gallery">522 Photos and videos</Title>
      </Head>

      <GalleryList>
        <GalleryLink
          to="/galleryElem"
          img={process.env.PUBLIC_URL + "/img/gallery1.jpg"}
          descr="GalleryElemDescr"
        />
        <GalleryLink
          to="/galleryElem"
          img={process.env.PUBLIC_URL + "/img/gallery2.jpg"}
          descr="GalleryElemDescr"
        />
        <GalleryLink
          to="/galleryElem"
          img={process.env.PUBLIC_URL + "/img/gallery3.jpg"}
          descr="GalleryElemDescr"
        />
        <GalleryLink
          to="/galleryElem"
          img={process.env.PUBLIC_URL + "/img/gallery4.jpg"}
          descr="GalleryElemDescr"
        />
        <GalleryLink
          to="/galleryElem"
          img={process.env.PUBLIC_URL + "/img/gallery5.jpg"}
          descr="GalleryElemDescr"
        />
        <GalleryLink
          to="/galleryElem"
          img={process.env.PUBLIC_URL + "/img/gallery6.jpg"}
          descr="GalleryElemDescr"
        />
      </GalleryList>
    </StGallery>
  );
}

export default Gallery;
