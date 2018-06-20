import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import tick from "./Tick.svg";

// const Wrapper = styled.div`
//   padding: 15px 0;
// `;

// const Head = styled.div`
//   display: flex;
//   align-items: center;
//   margin-bottom: 8px;
// `;

// const Icon = styled.img`
//   display: block;
//   width: 12px;
//   height: 15px;
//   margin-right: 12px;
// `;

// const Title = styled(Link)`
//   font-size: 14px;
//   line-height: 16px;
//   font-weight: normal;
//   text-decoration: none;
//   color: #1da1f2;
//   &:hover {
//     text-decoration: underline;
//   }
// `;

// const FollowersList = styled.div`
//   display: flex;
//   flex-wrap: wrap;
// `;

// const StFollower = styled(Link)`
//   width: calc((100% - 20px) / 5);
//   margin-right: 5px;
//   margin-bottom: 5px;
//   &:nth-child(5n) {
//     margin-right: 0;
//   }
//   img {
//     display: block;
//     width: 100%;
//   }
// `;

function FollowUser(props) {
  return (
    <StFollowUser>
      <Avatar>
        <img src="" alt="" />
      </Avatar>
      <Name>Every Interaction</Name>
      <Verified src={tick} alt="verified" />

      <NameLink>@EveryInteract</NameLink>
    </StFollowUser>
  );
}

function Follows() {
  return (
    <Wrapper>
      <Head>
        <Title to="/followers">6 Followers you know</Title>
        <Button>Refresh</Button>
        <LinkViewAll to="/viewAll">View all</LinkViewAll>
      </Head>

      <FollowsList>
        <FollowUser />
      </FollowsList>
    </Wrapper>
  );
}

export default Followers;
