import async from '../utils/async';
import CurrentUser from '../utils/CurrentUser';
import {Glyph} from '../utils/glyphs';
import Sort from '../utils/sort';
import svg, {SVGPath} from "../utils/svg.js";
import Truncate from '../utils/truncate';
import urlHelper from '../utils/url';
import window from './__mocks__/window';
import NavigationStore from '../stores/NavigationStore.js';
import renderer from 'react-test-renderer';

describe('utils', () => {
	
  test('async.doWhenReady', () => {
    const readyFunc = () => true;
    const doVoidFunc = jest.fn();
    
    async.doWhenReady(readyFunc, doVoidFunc, 1);
    expect(doVoidFunc).toBeCalled();
  });
  
  test('async.onEvent', () => {
    const eventName = 'testEvent';
    const doVoidFunc = jest.fn();
    
    async.onEvent(eventName, doVoidFunc);
    global.dispatchEvent(new Event(eventName));
    expect(doVoidFunc).toBeCalled();
  });

  test('glyphs', () => {
  	const glyph = Glyph('fa style', ' class2', ' class3');
  	expect(glyph).toEqual('fa style class2 class3');
  });

  test('sort', () => {
  	const collection = [
  		{id:0, type:'thing', name:'pen'}, 
  		{id:1, type:'special', name:'coin'}, 
  		{id:2, type:'thing', name:'straw'},
  		{id:3, type:'favorite', name:'crystal'},
  	];
  	const order = ['favorite', 'special'];
  	const sorted = Sort.byNamedEntries(collection, order, (obj) => obj.type);

  	expect(sorted.map((obj) => obj.id)).toEqual([3, 1, 0, 2]);
  });

  test('truncate', () => {
  	let str = 'someday never comes';
  	let lines = 'one\ntwo\nthree\nfour';
  	let arr = [1, 2, 3, 4];

  	str = Truncate.stringT(str, 10);
  	lines = Truncate.lines(lines, 3);
  	arr = Truncate.arrayT(arr, 3);

  	expect(str).toEqual('someday...');
  	expect(lines.split('\n').length).toEqual(3);
  	expect(arr.length).toEqual(3);
  });

  test('url', () => {
  	expect(urlHelper.appendHttpIfMissingProtocol('testing.us')).toEqual('http://testing.us');
  	expect(urlHelper.beautify('https://testing.us')).toEqual('testing.us');
  	expect(urlHelper.beautify('http://testing.us')).toEqual('testing.us');

    urlHelper.navigateToSection('Login');
    expect(NavigationStore.getSection()).toEqual('Login');

  	let url = urlHelper.section('test', {"next": 1});
  	expect(url).toEqual('?section=test&next=1');

    url = urlHelper.sectionOrLogIn('CreateProject');
    expect(url).toEqual('?section=CreateProject');

  	url = urlHelper.constructWithQueryString('/api/test', {'query': 'test'});
  	expect(url).toEqual('/api/test?query=test');

  	const args = urlHelper.arguments('/api/test?query=test&page=1');
  	expect(args['query']).toEqual('test');
  	expect(args['page']).toEqual('1');
  });

  test('svg', () => {
    const img = svg.path(SVGPath['GITHUB'], 'LogInController-socialIcon');
    const el = renderer.create(img);
    const str = JSON.stringify(el);
    expect(str).toMatch('LogInController-socialIcon');
  });

});
