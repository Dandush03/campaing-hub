import { Campaign } from '../../store/type';
import campaignsReducer, { fetchCampaigns } from '../campaignsReducer';

test('return the initial state', () => {
  expect(campaignsReducer(undefined, <any>{})).toEqual([]);
});

test('handle adding new attributes or updating existing once', () => {
  const prevState: Campaign[] = [];
  const nextStateUpdated: Campaign = {
    id: 'test',
    name: 'test',
    description: 'test',
    token: 'test',
    labels: ['test', 'test'],
  };
  expect(campaignsReducer(
      prevState, fetchCampaigns([nextStateUpdated])),
  ).toEqual([nextStateUpdated]);
});
