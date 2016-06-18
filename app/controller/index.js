import Controller from 'cerebral';
import Model from 'cerebral-model-baobab';
import DevTools from 'cerebral-module-devtools';
import Router from 'cerebral-module-router';

// instantiate controller and set model layer
const controller = Controller(Model({}));

controller.addModules({
	devtools: DevTools(),
	home: (module, controller) => {
		module.addSignals({
			homeOpened: [
				({ input, state }) => { state.set('input', input) }
			],
			urlParamsOpened: [
				({ input, state }) => { state.set('input', input) }
			]
		})
	},

	router: Router({
		"/": "home.homeOpened",
		"/params/:key": "home.urlParamsOpened"
	},
	{
		mapper: { query: true }
	})
});

export default controller;
