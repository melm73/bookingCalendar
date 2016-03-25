import ajaxUtil from '../ajax-util';

describe('ajaxUtil', () => {
  describe('setUrl/getUrl', () => {
    it('sets the host', () => {
      ajaxUtil.setUrl('melanie:2341');
      expect(ajaxUtil.getUrl('path')).toEqual('http://melanie:2341/path');
    });
  });

  describe('get', () => {
    it('calls make request with get options', () => {
      spyOn(ajaxUtil, 'makeRequest');
      let successSpy = jasmine.createSpy('onSuccess');

      ajaxUtil.get({url: 'myUrl', onSuccess: successSpy});
      expect(ajaxUtil.makeRequest).toHaveBeenCalledWith('myUrl', 'GET', null, null, successSpy);
    });
  });
});
