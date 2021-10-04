import { mount } from 'enzyme';
import * as React from 'react';
import Table from '.';
import { CampaignList } from './type';

const campaigns: CampaignList = [
  {
    id: 'some-random-id-1',
    name: 'Camapign Test 1',
    description: 'Description Camapigns Test 1',
    token: 'salkdjk12312dasdasd13',
    labels: [],
  },
  {
    id: 'some-random-id-2',
    name: 'Camapigns Test 2',
    description: 'Description Camapign Test 2',
    token: 'salkdjk12312dasdasd13',
    labels: [],
  },
];


const columnList: Array<string> = [
  'id', 'name', 'description', 'view', 'leads', 'convertion',
];

// Mock i18n
jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: (str: string) => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
}));

describe('render table', () => {
  const table = mount(
      <Table
        campaings={campaigns}
        extended={true}/>,
  );
  test.each(columnList)('renders all row headers', (column) => {
    expect(table.text()).toContain('name');
  });

  test.each(campaigns)('renders all row data', (campaign) => {
    expect(table.text()).toContain(campaign.name);
    expect(table.text()).toContain(campaign.description);
    expect(table.text()).toContain(campaign.id);
    expect(table.text()).not.toContain(campaign.token);
  });
});
