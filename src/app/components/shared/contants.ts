import { AddOn, Plan, SidePanelItem } from './interface';

export const HEADING_1 = 'Personal info';
export const HEADING_2 = 'Select your plan';
export const HEADING_3 = 'Pick add-ons';
export const HEADING_4 = 'Finishing up';

export const SUBHEADING_1 =
  'Please provide your name, email address, and phone number.';
export const SUBHEADING_2 = 'You have the option of monthly or yearly billing.';
export const SUBHEADING_3 = 'Add-ons help enhance your gaming experience.';
export const SUBHEADING_4 =
  'Double-check everything looks OK before confirming.';

export const STEPPER_HEADINGS: Record<number, string> = {
  1: HEADING_1,
  2: HEADING_2,
  3: HEADING_3,
  4: HEADING_4,
};

export const STEPPER_SUBHEADINGS: Record<number, string> = {
  1: SUBHEADING_1,
  2: SUBHEADING_2,
  3: SUBHEADING_3,
  4: SUBHEADING_4,
};

export const SIDE_PANEL_LIST: SidePanelItem[] = [
  {
    id: 1,
    name: 'your info',
    active: true,
  },
  {
    id: 2,
    name: 'select plan',
    active: false,
  },
  {
    id: 3,
    name: 'add-ons',
    active: false,
  },
  {
    id: 4,
    name: 'summary',
    active: false,
  },
];

export const PLAN_LIST: Plan[] = [
  {
    image: 'assets/images/icon-arcade.svg',
    name: 'Arcade',
    price: {
      monthly: 9,
      yearly: 90,
    },
  },
  {
    image: 'assets/images/icon-advanced.svg',
    name: 'Advanced',
    price: {
      monthly: 12,
      yearly: 120,
    },
  },
  {
    image: 'assets/images/icon-pro.svg',
    name: 'Pro',
    price: {
      monthly: 15,
      yearly: 150,
    },
  },
];

export const ADD_ONS_LIST: AddOn[] = [
  {
    id: 1,
    heading: 'Online service',
    subHeading: 'Access to multiplayer games',
    price: {
      monthly: 1,
      yearly: 10,
    },
  },
  {
    id: 2,
    heading: 'Larger storage',
    subHeading: 'Extra 1TB of cloud save',
    price: {
      monthly: 2,
      yearly: 20,
    },
  },
  {
    id: 3,
    heading: 'Customizable Profile',
    subHeading: 'Custom theme on your profile',
    price: {
      monthly: 2,
      yearly: 20,
    },
  },
];
