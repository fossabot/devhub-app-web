// all User Interface related constants
import {
  HOME_ROUTE,
  DOCUMENTS_ROUTE,
  REPOS_ROUTE,
  COMPONENTS_ROUTE,
  SELF_SERVICE_ROUTE,
} from './routes';
export const buttonTypes = ['primary', 'secondary', 'link'];
export const LOGIN_BTN_ID = 'dh-login';
export const LOGOUT_BTN_ID = 'dh-logout';
export const BANNER_ID = 'dh-banner';
export const MAIN_NAVIGATION_BTN = 'dh-main-nav';
export const LARGE_SCREEN_LIMIT = 4;
export const SMALL_SCREEN_LIMIT = 1;

export const RESOURCE_TYPES = {
  COMPONENTS: 'Components',
  DOCUMENTATION: 'Documentation',
  SELF_SERVICE_TOOLS: 'Self-Service Tools',
  RESPOSITORIES: 'Repositories',
};

export const RESOURCE_TYPES_CONFIG = {
  COMPONENTS: {
    DISPLAY_NAME: 'Components',
    VALUE: RESOURCE_TYPES.COMPONENTS,
    ROUTE: COMPONENTS_ROUTE,
  },
  DOCUMENTATION: {
    DISPLAY_NAME: 'Documentation',
    VALUE: RESOURCE_TYPES.DOCUMENTATION,
    ROUTE: DOCUMENTS_ROUTE,
  },
  SELF_SERVICE_TOOLS: {
    DISPLAY_NAME: 'Self-Service Tools',
    VALUE: RESOURCE_TYPES.SELF_SERVICE_TOOLS,
    ROUTE: SELF_SERVICE_ROUTE,
  },
  RESPOSITORIES: {
    DISPLAY_NAME: 'Repositories',
    VALUE: RESOURCE_TYPES.RESPOSITORIES,
    ROUTE: REPOS_ROUTE,
  },
};

// the 'dot prop' to get the resource type from a siphon data node
export const SIPHON_RESOURCE_TYPE_PROP = 'resource.type';

export const MAIN_NAV_CONFIG = [
  {
    ROUTE: HOME_ROUTE,
    DISPLAY_NAME: 'All',
    SIPHON_PROP: SIPHON_RESOURCE_TYPE_PROP,
    VALUE: 'All',
  },
  {
    ROUTE: RESOURCE_TYPES_CONFIG.COMPONENTS.ROUTE,
    DISPLAY_NAME: RESOURCE_TYPES_CONFIG.COMPONENTS.DISPLAY_NAME,
    SIPHON_PROP: SIPHON_RESOURCE_TYPE_PROP,
    VALUE: RESOURCE_TYPES_CONFIG.COMPONENTS.VALUE,
  },
  {
    ROUTE: RESOURCE_TYPES_CONFIG.DOCUMENTATION.ROUTE,
    DISPLAY_NAME: RESOURCE_TYPES_CONFIG.DOCUMENTATION.DISPLAY_NAME,
    SIPHON_PROP: SIPHON_RESOURCE_TYPE_PROP,
    VALUE: RESOURCE_TYPES_CONFIG.DOCUMENTATION.VALUE,
  },
  {
    ROUTE: RESOURCE_TYPES_CONFIG.SELF_SERVICE_TOOLS.ROUTE,
    DISPLAY_NAME: RESOURCE_TYPES_CONFIG.SELF_SERVICE_TOOLS.DISPLAY_NAME,
    SIPHON_PROP: SIPHON_RESOURCE_TYPE_PROP,
    VALUE: RESOURCE_TYPES_CONFIG.SELF_SERVICE_TOOLS.VALUE,
  },
  {
    ROUTE: RESOURCE_TYPES_CONFIG.RESPOSITORIES.ROUTE,
    DISPLAY_NAME: RESOURCE_TYPES_CONFIG.RESPOSITORIES.DISPLAY_NAME,
    SIPHON_PROP: SIPHON_RESOURCE_TYPE_PROP,
    VALUE: RESOURCE_TYPES_CONFIG.RESPOSITORIES.VALUE,
  },
];

export const FOOTER_NAVIGATION = [
  {
    to: HOME_ROUTE,
    text: 'home',
  },
];
