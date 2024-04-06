/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"ztest_hello/ztest_hello/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
