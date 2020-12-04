/**
 * Ghostery Hub App View
 *
 * Ghostery Browser Extension
 * https://www.ghostery.com/
 *
 * Copyright 2020 Ghostery, Inc. All rights reserved.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0
 */

import React from 'react';
import PropTypes from 'prop-types';
import { ToastMessage } from '../../../shared-components';

/**
 * A functional React component that implements the App View for the Ghostery Browser Hub
 * @extends Component
 * @memberof GhosteryHubViews
 */
const AppView = (props) => {
	const { app, children } = props;

	/**
	 * Handle clicking to exit the Toast Message.
	 */
	const exitToast = () => {
		const { actions } = props;
		actions.setToast({
			toastMessage: '',
			toastClass: '',
		});
	};

	return (
		<div className="App full-height full-width flex-container">
			<div className="App__mainContent full-height full-width">
				<ToastMessage toastTest={app.toastMessage} toastClass={app.toastClass} toastExit={exitToast} />
				{children}
			</div>
		</div>
	);
};

AppView.propTypes = {
	actions: PropTypes.shape({
		setToast: PropTypes.func.isRequired,
	}).isRequired,
	app: PropTypes.shape({
		toastMessage: PropTypes.string,
		toastClass: PropTypes.string,
	}),
};

// Default props used in the App
AppView.defaultProps = {
	app: {
		toastMessage: '',
		toastClass: '',
	},
};

export default AppView;