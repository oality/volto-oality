import React from 'react';
import PropTypes from 'prop-types';
import { ConditionalLink } from '@plone/volto/components';
import { flattenToAppURL } from '@plone/volto/helpers';
import { settings } from '~/config';

import { Divider, Grid, Image, Segment } from 'semantic-ui-react';
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
        {items.map((item, index) => (
          <Segment placeholder size="big" key={item['@id']}>
            <ConditionalLink
              to={flattenToAppURL(item['@id'])}
              condition={!isEditMode}
            >
              <Grid columns={2} stackable textAlign="center">
                <Divider vertical />
                <Grid.Row verticalAlign="middle">
                  <Grid.Column>
                    <Image
                      size="small"
                      alt={item.image_caption ? item.image_caption : item.title}
                      src={item.image.scales.preview.download}
                    />

                  </Grid.Column>

                  <Grid.Column>
                    <div className="listing-body">
                      <h2>{item.title ? item.title : item.id}</h2>
                      <p>{item.description}</p>
                    </div>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </ConditionalLink>
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
