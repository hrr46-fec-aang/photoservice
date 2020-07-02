import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPinterest,
  faFacebook,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const ShareButton = styled.div`
  margin-top: 5px;
  width: 120px;
  display: flex;
  justify-content: space-evenly;
`;

const Link = styled.a`
  color: inherit;
  text-decoration: none;
`;

var Share = () => {
  return (
    <ShareButton>
      <Link href="https://www.pinterest.com">
        <FontAwesomeIcon icon={faPinterest} />
      </Link>
      <Link href="https://www.facebook.com">
        <FontAwesomeIcon icon={faFacebook} />
      </Link>
      <Link href="https://twitter.com/explore">
        <FontAwesomeIcon icon={faTwitter} />
      </Link>
      <Link>
        <FontAwesomeIcon icon={faLink} />
      </Link>
    </ShareButton>
  );
};

export default Share;
