import React from 'react';
import PropTypes from 'prop-types';
import { ConditionalLink } from '@plone/volto/components';
import { flattenToAppURL } from '@plone/volto/helpers';
import { settings } from '~/config';
import { FormattedMessage } from 'react-intl';

import Moment from 'moment';
import { Link } from 'react-router-dom';
import { Segment, Container, Image } from 'semantic-ui-react';
import DefaultImageSVG from '@plone/volto/components/manage/Blocks/Listing/default-image.svg';
import { isInternalURL } from '@plone/volto/helpers/Url/Url';

const DefaultTemplate = ({ items, linkMore, isEditMode }) => {
  let link = null;
  let href = linkMore?.href || '';

  if (isInternalURL(href)) {
    link = (
      <ConditionalLink to={flattenToAppURL(href)} condition={!isEditMode}>
        {linkMore?.title || href}
      </ConditionalLink>
    );
  } else if (href) {
    link = <a href={href}>{linkMore?.title || href}</a>;
  }

  return (
    <>
      <div className="items">
        {items.map((item) => (
        <Segment key={item.url}>
            <h2>
              <Link to={item.url} title={item['@type']}>
                {item.title}
              </Link>
            </h2>
            <p>
              <span>
                <FormattedMessage id="by" defaultMessage="by" />
              </span>
              <span> {item.creators} </span>
              <span>-</span>
              <span> {Moment(item.effective).format('D MMM, yyyy')}</span>
            </p>
            {item.image && (
              <Image
                clearing
                floated="right"
                size="small"
                alt={item.image_caption ? item.image_caption : item.title}
                src={item.image.scales.thumb.download}
              />
            )}
            {item.description && <p>{item.description}</p>}
          </Segment>

               ))}
      </div>

      {link && <div className="footer">{link}</div>}
    </>
  );
};

DefaultTemplate.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  linkMore: PropTypes.any,
  isEditMode: PropTypes.bool,
};

export default DefaultTemplate;
