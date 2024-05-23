'use client';

import { HapticFeedbackNotificationType, HapticFeedbackState, HapticFeedbackType } from '@platform/telegram/models';

import { postEvent } from '@tma.js/sdk';

export const expandWebApp = () => postEvent('web_app_expand');
export const enableWebAppClosingConfirmation = () =>
	postEvent('web_app_setup_closing_behavior', { need_confirmation: true });

export const setHaptic = (
	type: HapticFeedbackType = 'impact',
	state: HapticFeedbackState = 'light',
	notificationType: HapticFeedbackNotificationType,
) => postEvent('web_app_trigger_haptic_feedback', { type, impact_style: state, notification_type: notificationType });

export const setHeaderBackground = (color: `#${string}`) => postEvent('web_app_set_header_color', { color });
export const setBackground = (color: `#${string}`) => postEvent('web_app_set_background_color', { color });

export const openTelegramLink = (link: string) => postEvent('web_app_open_tg_link', { path_full: link });
export const openExternalLink = (link: string, instantView?: boolean) =>
	postEvent('web_app_open_link', { url: link, try_instant_view: instantView });
