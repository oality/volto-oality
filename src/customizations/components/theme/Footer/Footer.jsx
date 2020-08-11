/**
 * Footer component.
 * @module components/theme/Footer/Footer
 */

import React from 'react';
import ReactGA from 'react-ga';
import { Container, List, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { FormattedMessage, defineMessages, injectIntl } from 'react-intl';

const messages = defineMessages({
  copyright: {
    id: 'Copyright',
    defaultMessage: 'Copyright',
  },
});

/**
 * Component to display the footer.
 * @function Footer
 * @param {Object} intl Intl object
 * @returns {string} Markup of the component
 */
const Footer = ({ intl }) => {
    ReactGA.initialize('UA-171579968-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
    return (
  <Segment
    role="contentinfo"
    vertical
    padded
    inverted
    color="green"
    textAlign="center"
  >
    <Container>
      <Segment basic inverted color="green" className="discreet">
        <FormattedMessage
          id="Oality website {copyright} {current_year}"
          defaultMessage="Oality website {copyright} {current_year}"
          values={{
            copyright: (
              <abbr title={intl.formatMessage(messages.copyright)}>©</abbr>
            ),
            current_year: new Date().getFullYear(),
          }}
        />{' '}
      </Segment>
      <List horizontal inverted>
        {/* wrap in div for a11y reasons: listitem role cannot be on the <a> element directly */}
        <div role="listitem" className="item">
          <Link className="item" to="/sitemap">
            <FormattedMessage id="Site Map" defaultMessage="Site Map" />
          </Link>
        </div>
        <div role="listitem" className="item">
          <Link className="item" to="/accesibility-info">
            <FormattedMessage
              id="Accessibility"
              defaultMessage="Accessibility"
            />
          </Link>
        </div>
        <div role="listitem" className="item">
          <a className="item" href="https://plone.com">
            <FormattedMessage
              id="Powered by Plone & Python"
              defaultMessage="Powered by Plone & Python"
            />
          </a>
        </div>
      </List>
    </Container>
  </Segment>
)};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
Footer.propTypes = {
  /**
   * i18n object
   */
};

export default injectIntl(Footer);
