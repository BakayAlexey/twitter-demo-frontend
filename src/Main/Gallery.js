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
`;

const StGalleryElem = styled(Link)`
  width: calc((100% - 10px) / 3);
  margin-right: 5px;
  margin-bottom: 5px;
  border-radius: 2px;
  overflow: hidden;
  &:nth-child(3n) {
    margin-right: 0;
  }
`;

const Img = styled.img`
  display: block;
  width: 100%;
`;

function GalleryElem(props) {
  return (
    <StGalleryElem to={props.to}>
      <Img src={props.img} alt={props.descr} />
    </StGalleryElem>
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
        <GalleryElem
          to="/galleryElem"
          img={process.env.PUBLIC_URL + "/img/Gallery1.jpg"}
          descr="GalleryElemDescr"
        />
        <GalleryElem
          to="/galleryElem"
          img={process.env.PUBLIC_URL + "/img/Gallery2.jpg"}
          descr="GalleryElemDescr"
        />
        <GalleryElem
          to="/galleryElem"
          img={process.env.PUBLIC_URL + "/img/Gallery3.jpg"}
          descr="GalleryElemDescr"
        />
        <GalleryElem
          to="/galleryElem"
          img={process.env.PUBLIC_URL + "/img/Gallery4.jpg"}
          descr="GalleryElemDescr"
        />
        <GalleryElem
          to="/galleryElem"
          img={process.env.PUBLIC_URL + "/img/Gallery5.jpg"}
          descr="GalleryElemDescr"
        />
        <GalleryElem
          to="/galleryElem"
          img={process.env.PUBLIC_URL + "/img/Gallery6.jpg"}
          descr="GalleryElemDescr"
        />
      </GalleryList>
    </StGallery>
  );
}

export default Gallery;
