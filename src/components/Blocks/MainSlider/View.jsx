import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { Button, Image, Segment } from 'semantic-ui-react';
import { Icon } from '@plone/volto/components';
import sliderPNG from './slider-image.png';
//import slider1 from './perenite300x200.png';
//import slider2 from './a-la-pointe300x200.jpg';
//import slider3 from './professionalissme300x200.png';
import slider1 from './open_source.svg';
import slider2 from './cutting_edge.svg';
import slider3 from './pro2.svg';
import rightSVG from '@plone/volto/icons/right-key.svg';
import leftSVG from '@plone/volto/icons/left-key.svg';
import { FormattedMessage } from 'react-intl';

const NextArrow = ({ className, style, onClick }) => (
  <Button
    className={className}
    style={{ ...style, display: 'block' }}
    onClick={onClick}
  >
    <Icon name={rightSVG} size="70px" color="#fff" />
  </Button>
);

const PrevArrow = ({ className, style, onClick }) => (
  <Button
    className={className}
    style={{ ...style, display: 'block' }}
    onClick={onClick}
  >
    <Icon name={leftSVG} size="70px" color="#fff" />
  </Button>
);

const View = (props) => {
  return (
    <div className="tile view mainslider">

      <Slider
        dots={true}
        fade
        lazyLoad
        dotsClass="slick-dots slick-thumb"
        infinite
        autoplay={true}
        autoplaySpeed={5000}
        speed={600}
        slidesToShow={1}
        slidesToScroll={1}
        nextArrow={<NextArrow />}
        prevArrow={<PrevArrow />}
      >
        <div>
          <Segment className="slide slide1" inverted>
            <Image
              verticalAlign="middle"
              alt={
                <FormattedMessage
                  id="sustainability"
                  defaultMessage="Sustainability"
                />
              }
              src={slider1}
            />
            <Segment inverted>
              <h1>
                <FormattedMessage
                  id="sustainability"
                  defaultMessage="Sustainability"
                />
              </h1>
              <div>
                <FormattedMessage
                  id="sustainability_text"
                  defaultMessage="With the use of open source software, we guarantee the sustainability of your projects."
                />
              </div>
            </Segment>
          </Segment>
        </div>
        <div>
          <Segment className="slide slide2" inverted>
            <Image
              verticalAlign="middle"
              alt={
                <FormattedMessage
                  id="cutting-edge"
                  defaultMessage="Cutting-edge"
                />
              }
              src={slider2}
            />

            <Segment inverted>
              <h1>
                <FormattedMessage
                  id="cutting-edge"
                  defaultMessage="Cutting-edge"
                />
              </h1>
              <div>
                <FormattedMessage
                  id="cutting_edge_text"
                  defaultMessage="We use cutting-edge technology to have best service. Our dev are mobile friendly"
                />
              </div>
            </Segment>
          </Segment>
        </div>
        <div>
          <Segment className="slide slide3" inverted>
            <Image
              verticalAlign="middle"
              alt={
                <FormattedMessage
                  id="professionalism"
                  defaultMessage="Professionalism"
                />
              }
              src={slider3}
            />

            <Segment inverted>
              <h1>
                <FormattedMessage
                  id="professionalism"
                  defaultMessage="Professionalism"
                />
              </h1>
              <div>
                <FormattedMessage
                  id="professionalism_text"
                  defaultMessage="We only create custom applications, built with you, that meet your needs."
                />
              </div>
            </Segment>
          </Segment>
        </div>
      </Slider>
    </div>
  );
};

export default View;
