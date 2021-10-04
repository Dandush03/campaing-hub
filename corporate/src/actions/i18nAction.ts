import { apiReq } from './utils';

const setLocale = (locale: string) => {
  const url = '/api/v1/i18n';

  const req = apiReq.create();
  req.patch(url, { lng: locale } );
};

export { setLocale };
