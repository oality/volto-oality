/**
 * Add your config changes here.
 * @module config
 * @example
 * export const settings = {
 *   ...defaultSettings,
 *   port: 4300,
 *   listBlockTypes: {
 *     ...defaultSettings.listBlockTypes,
 *     'my-list-item',
 *   }
 * }
 */
import MainSliderViewBlock from '@package/components/Blocks/MainSlider/View';
import MainSliderEditBlock from '@package/components/Blocks/MainSlider/Edit';
import BlogsListingBlockTemplate from '@package/components/Blocks/Listing/BlogsTemplate';
import HomePageListingBlockTemplate from '@package/components/Blocks/Listing/HomePageTemplate';
import sliderSVG from '@plone/volto/icons/slider.svg';
import listBulletSVG from '@plone/volto/icons/list-bullet.svg';
import ViewListingBlock from '@plone/volto/components/manage/Blocks/Listing/View';
import EditListingBlock from '@plone/volto/components/manage/Blocks/Listing/Edit';
import DefaultListingBlockTemplate from '@plone/volto/components/manage/Blocks/Listing/DefaultTemplate';
import ImageGalleryListingBlockTemplate from '@plone/volto/components/manage/Blocks/Listing/ImageGallery';

import {
  settings as defaultSettings,
  views as defaultViews,
  widgets as defaultWidgets,
  blocks as defaultBlocks,
  addonReducers as defaultAddonReducers,
  addonRoutes as defaultAddonRoutes,
} from '@plone/volto/config';

import { BlogView } from './components';

export const settings = {
  ...defaultSettings,
  isMultilingual: true,
  supportedLanguages: ['en', 'fr'],
  defaultLanguage: 'fr',
};

export const views = {
  ...defaultViews,
  layoutViews: {
    ...defaultViews.layoutViews,
    full_view: BlogView,
  },
};

export const widgets = {
  ...defaultWidgets,
};

const customBlocks = {
  mainslider: {
    id: 'mainslider',
    title: 'Main Slider',
    icon: sliderSVG,
    group: 'common',
    view: MainSliderViewBlock,
    edit: MainSliderEditBlock,
    restricted: false,
    mostUsed: true,
    security: {
      addPermission: [],
      view: [],
    },
  },
};

const customListing = {
  listing: {
    id: 'listing',
    title: 'Listing',
    icon: listBulletSVG,
    group: 'common',
    view: ViewListingBlock,
    edit: EditListingBlock,
    restricted: false,
    mostUsed: true,
    sidebarTab: 1,
    security: {
      addPermission: [],
      view: [],
    },
    templates: {
      default: { label: 'Default', template: DefaultListingBlockTemplate },
      imageGallery: {
        label: 'Image gallery',
        template: ImageGalleryListingBlockTemplate,
      },
      homepage: {
        label: 'Homepage',
        template: HomePageListingBlockTemplate,
      },
      blogs: {
        label: 'Blogs',
        template: BlogsListingBlockTemplate,
      },
    },
  },
};
export const blocks = {
  ...defaultBlocks,
  requiredBlocks: [],
  blocksConfig: {
    ...defaultBlocks.blocksConfig,
    ...customBlocks,
    ...customListing,
  },
};

export const addonRoutes = [...defaultAddonRoutes];
export const addonReducers = { ...defaultAddonReducers };
