/*
Copyright 2019 Province of British Columbia

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at 

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

Created by Patrick Simonian
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { RESOURCE_TYPES_LIST } from '../../constants/ui';
import { ChevronLink, Link } from '../UI/Link';
import { DecorativeBar, CardTitle, CardDescription } from '../Cards/Card';
import CardHeader from '../Cards/Card/CardHeader';
import CardCarousel from '../CardCarousel/CardCarousel';

const withPadding = css`
  padding: 0 15px;
`;

const TopicDecorativeBar = styled(DecorativeBar)`
  min-height: 15px;
`;

const TopicPreviewContainer = styled.div`
  ${withPadding};
  padding-top: 10px;
  padding-bottom: 20px;
`;

export const TopicTitle = styled(CardTitle)`
  font-weight: 700;
  margin: 10px 0;
  font-size: 26px;
`;

export const TopicDescription = styled(CardDescription)`
  max-width: 500px;
  margin-bottom: 15px;
`;

const TopicLinkWrapper = styled.div`
  text-align: right;
  font-size: 1.15em;
`;

export const TitleLink = styled(Link)`
  color: inherit;
  padding: 0px;
  margin: 0px;
  text-decoration: none;
  :hover {
    color: inherit;
    text-decoration-color: #1a5a96;
  }
`;

export const TEST_IDS = {
  titleLink: 'topic-preview-title-link',
  chevronLink: 'topic-preview-chevron-link'
};

const TopicPreview = ({ title, description, link, resources, ...rest }) => (
  <div
    css={css`
      max-width: 862px;
      margin: 20px 0;
      border: 1px solid #ccc;
      border-top: transparent;
    `}
    {...rest}
  >
    <TopicDecorativeBar type="Topics" />
    <TopicPreviewContainer>
      <CardHeader type="Topics" />
      <TopicTitle clamp={2}>
        <TitleLink to={link.to} data-testid={TEST_IDS.titleLink}>{title}</TitleLink>
      </TopicTitle>
      {description && <TopicDescription clamp={3}>{description}</TopicDescription>}
      <CardCarousel resources={resources} />
      <TopicLinkWrapper>
        <ChevronLink to={link.to} data-testid={TEST_IDS.chevronLink}>{link.text}</ChevronLink>
      </TopicLinkWrapper>
    </TopicPreviewContainer>
  </div>
);

TopicPreview.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  link: PropTypes.shape({ to: PropTypes.string, text: PropTypes.string }).isRequired,
  resources: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(RESOURCE_TYPES_LIST),
      unfurl: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string,
        image: PropTypes.string,
      }),
      resource: PropTypes.shape({
        path: PropTypes.string.isRequired,
        type: PropTypes.oneOf(RESOURCE_TYPES_LIST).isRequired,
      }),
    }),
  ),
};

TopicPreview.defaultProps = {
  description: null,
};

export default TopicPreview;
