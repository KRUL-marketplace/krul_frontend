'use client';

import { HapticFeedbackNotificationType, HapticFeedbackState, HapticFeedbackType } from '@telegram/models';
import { on, postEvent } from '@tma.js/sdk';

export const expandWebApp = () => postEvent('web_app_expand');
export const enableWebAppClosingConfirmation = () =>
	postEvent('web_app_setup_closing_behavior', { need_confirmation: true });

export const showBackButton = () => postEvent('web_app_setup_back_button', { is_visible: true });
export const hideBackButton = () => postEvent('web_app_setup_back_button', { is_visible: false });

export const setHaptic = (
	type: HapticFeedbackType = 'impact',
	state: HapticFeedbackState = 'light',
	notificationType: HapticFeedbackNotificationType,
) => postEvent('web_app_trigger_haptic_feedback', { type, impact_style: state, notification_type: notificationType });

export const handleBackButton = (callback: () => unknown) => on('back_button_pressed', callback);
export const handleMainButton = (callback: () => unknown) => on('main_button_pressed', callback);

export const setHeaderBackground = (color: `#${string}`) => postEvent('web_app_set_header_color', { color });
export const setBackground = (color: `#${string}`) => postEvent('web_app_set_background_color', { color });
