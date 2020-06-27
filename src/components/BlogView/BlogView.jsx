/**
 * Blog view component.
 */

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Moment from 'moment';
import { Link } from 'react-router-dom';
import { Segment, Container, Image } from 'semantic-ui-react';
import { FormattedMessage } from 'react-intl';

/**
 * Blog view component class.
 * @function BlogView
 * @param {Object} content Content object.
 * @returns {string} Markup of the component.
 */
const BlogView = ({ content }) => (
  <Container className="view-wrapper">
    <Helmet title={content.title} />
    <article id="content">
      <header>
        <h1 className="documentFirstHeading">{content.title}</h1>
        {content.description && (
          <p className="documentDescription">{content.description}</p>
        )}
      </header>
      <section id="content-core">
        {content.items.map((item) => (
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
      </section>
    </article>
  </Container>
);

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
BlogView.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        url: PropTypes.string,
        image: PropTypes.object,
        image_caption: PropTypes.string,
        effective: PropTypes.string,
        creators: PropTypes.string,
        '@type': PropTypes.string,
      }),
    ),
  }).isRequired,
};

export default BlogView;
