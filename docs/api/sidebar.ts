import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: 'doc',
      id: 'api/brale-issuance-and-orchestration-api',
    },
    {
      type: 'category',
      label: 'Accounts',
      items: [
        {
          type: 'doc',
          id: 'api/list-accounts',
          label: 'Retrieve all accounts',
          className: 'api-method get',
        },
        {
          type: 'doc',
          id: 'api/create-account',
          label: 'Create a customer account',
          className: 'api-method post',
        },
        {
          type: 'doc',
          id: 'api/get-account',
          label: 'Retrieve a customer account',
          className: 'api-method get',
        },
      ],
    },
    {
      type: 'category',
      label: 'Transfers',
      items: [
        {
          type: 'doc',
          id: 'api/list-transfers',
          label: 'Get all transfers for a given account',
          className: 'api-method get',
        },
        {
          type: 'doc',
          id: 'api/create-transfer',
          label: 'Create a new transfer',
          className: 'api-method post',
        },
        {
          type: 'doc',
          id: 'api/get-transfer',
          label: 'Retrieve a single transfer',
          className: 'api-method get',
        },
      ],
    },
    {
      type: 'category',
      label: 'Addresses',
      items: [
        {
          type: 'doc',
          id: 'api/list-addresses',
          label: 'Fetch all addresses',
          className: 'api-method get',
        },
        {
          type: 'doc',
          id: 'api/create-address',
          label: 'Create a new external address',
          className: 'api-method post',
        },
        {
          type: 'doc',
          id: 'api/get-address-balance',
          label: 'Fetch the balance of an internal (custodial) address for a specific token',
          className: 'api-method get',
        },
      ],
    },
    {
      type: 'category',
      label: 'Financial Institutions',
      items: [
        {
          type: 'doc',
          id: 'api/list-financial-institutions',
          label: 'Fetch all financial institutions',
          className: 'api-method get',
        },
        {
          type: 'doc',
          id: 'api/create-financial-institution',
          label: 'Create a new external financial institution',
          className: 'api-method post',
        },
        {
          type: 'doc',
          id: 'api/get-financial-institution',
          label: 'Fetch a specific financial institution',
          className: 'api-method get',
        },
      ],
    },
    {
      type: 'category',
      label: 'Automations',
      items: [
        {
          type: 'doc',
          id: 'api/create-automations',
          label: 'Create an Automation',
          className: 'api-method post',
        },
        {
          type: 'doc',
          id: 'api/list-automations',
          label: 'Fetch all automations for an account',
          className: 'api-method get',
        },
        {
          type: 'doc',
          id: 'api/get-automations',
          label: 'Retrieve a single automation',
          className: 'api-method get',
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
