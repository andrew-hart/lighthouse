/**
 * @license Copyright 2017 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */
'use strict';

/* eslint-disable max-len */

module.exports = {
  passes: [{
    passName: 'defaultPass',
    recordTrace: true,
    pauseAfterLoadMs: 5250,
    networkQuietThresholdMs: 5000,
    pauseAfterNetworkQuietMs: 2500,
    useThrottling: true,
    gatherers: [
      'url',
      'chrome-console-messages',
      'dobetterweb/all-event-listeners',
      'dobetterweb/anchors-with-no-rel-noopener',
      'dobetterweb/appcache',
      'dobetterweb/domstats',

      'dobetterweb/password-inputs-with-prevented-paste',
      'dobetterweb/tags-blocking-first-paint',
      'dobetterweb/websql',
    ]
  }],

  audits: [
    'deprecations',
    'dobetterweb/appcache-manifest',
    'dobetterweb/dom-size',
    'dobetterweb/external-anchors-use-rel-noopener',
    'dobetterweb/geolocation-on-start',
    'is-on-https',
    'dobetterweb/link-blocking-first-paint',
    'dobetterweb/no-document-write',
    'dobetterweb/no-mutation-events',
    'dobetterweb/no-websql',
    'dobetterweb/notification-on-start',
    'dobetterweb/password-inputs-can-be-pasted-into',
    'dobetterweb/script-blocking-first-paint',
    'dobetterweb/uses-passive-event-listeners',
    'dobetterweb/uses-http2',
  ],

  /*groups: {
    'perf-metric': {
      title: 'Metrics',
      description: 'These metrics encapsulate your app\'s performance across a number of dimensions.'
    },
    'perf-hint': {
      title: 'Opportunities',
      description: 'These are opportunities to speed up your application by optimizing the following resources.'
    },
    'perf-info': {
      title: 'Diagnostics',
      description: 'More information about the performance of your application.'
    },
    'a11y-color-contrast': {
      title: 'Color Contrast Is Satisfactory',
      description: 'Screen readers and other assistive technologies require annotations to understand otherwise ambiguous content.'
    },
    'a11y-describe-contents': {
      title: 'Elements Describe Contents Well',
      description: 'Screen readers and other assistive technologies require annotations to understand otherwise ambiguous content.'
    },
    'a11y-well-structured': {
      title: 'Elements Are Well Structured',
      description: 'Screen readers and other assistive technologies require annotations to understand otherwise ambiguous content.'
    },
    'a11y-aria': {
      title: 'ARIA Attributes Follow Best Practices',
      description: 'Screen readers and other assistive technologies require annotations to understand otherwise ambiguous content.'
    },
    'a11y-correct-attributes': {
      title: 'Elements Use Attributes Correctly',
      description: 'Screen readers and other assistive technologies require annotations to understand otherwise ambiguous content.'
    },
    'a11y-element-names': {
      title: 'Elements Have Discernable Names',
      description: 'Screen readers and other assistive technologies require annotations to understand otherwise ambiguous content.'
    },
    'a11y-language': {
      title: 'Page Specifies Valid Language',
      description: 'Screen readers and other assistive technologies require annotations to understand otherwise ambiguous content.'
    },
    'a11y-meta': {
      title: 'Meta Tags Used Properly',
      description: 'Screen readers and other assistive technologies require annotations to understand otherwise ambiguous content.'
    },
    'manual-pwa-checks': {
      title: 'Manual checks to verify',
      description: 'These audits are required by the baseline ' +
          '[PWA Checklist](https://developers.google.com/web/progressive-web-apps/checklist) but are ' +
          'not automatically checked by Lighthouse. They do not affect your score but it\'s important that you verify them manually.'
    },
  },
  /*categories: {
    'pwa': {
      name: 'Progressive Web App',
      weight: 1,
      description: 'These audits validate the aspects of a Progressive Web App, as specified by the baseline [PWA Checklist](https://developers.google.com/web/progressive-web-apps/checklist).',
      audits: [
        {id: 'service-worker', weight: 1},
        {id: 'works-offline', weight: 1},
        {id: 'without-javascript', weight: 1},
        {id: 'is-on-https', weight: 1},
        {id: 'redirects-http', weight: 1},
        {id: 'load-fast-enough-for-pwa', weight: 1},
        {id: 'webapp-install-banner', weight: 1},
        {id: 'splash-screen', weight: 1},
        {id: 'themed-omnibox', weight: 1},
        {id: 'viewport', weight: 1},
        {id: 'content-width', weight: 1},
        {id: 'pwa-cross-browser', weight: 0, group: 'manual-pwa-checks'},
        {id: 'pwa-page-transitions', weight: 0, group: 'manual-pwa-checks'},
        {id: 'pwa-each-page-has-url', weight: 0, group: 'manual-pwa-checks'},
      ]
    },
    'performance': {
      name: 'Performance',
      description: 'These encapsulate your app\'s performance.',
      audits: [
        {id: 'first-meaningful-paint', weight: 5, group: 'perf-metric'},
        {id: 'first-interactive', weight: 5, group: 'perf-metric'},
        {id: 'consistently-interactive', weight: 5, group: 'perf-metric'},
        {id: 'speed-index-metric', weight: 1, group: 'perf-metric'},
        {id: 'estimated-input-latency', weight: 1, group: 'perf-metric'},
        {id: 'link-blocking-first-paint', weight: 0, group: 'perf-hint'},
        {id: 'script-blocking-first-paint', weight: 0, group: 'perf-hint'},
        // {id: 'unused-css-rules', weight: 0},
        {id: 'uses-responsive-images', weight: 0, group: 'perf-hint'},
        {id: 'offscreen-images', weight: 0, group: 'perf-hint'},
        {id: 'uses-optimized-images', weight: 0, group: 'perf-hint'},
        {id: 'uses-webp-images', weight: 0, group: 'perf-hint'},
        {id: 'uses-request-compression', weight: 0, group: 'perf-hint'},
        // {id: 'time-to-firstbyte', weight: 0, group: 'perf-hint'},
        {id: 'total-byte-weight', weight: 0, group: 'perf-info'},
        {id: 'dom-size', weight: 0, group: 'perf-info'},
        {id: 'critical-request-chains', weight: 0, group: 'perf-info'},
        {id: 'user-timings', weight: 0, group: 'perf-info'},

        {id: 'screenshot-thumbnails', weight: 0},
      ]
    },
    'accessibility': {
      name: 'Accessibility',
      description: 'These checks highlight opportunities to [improve the accessibility of your app](https://developers.google.com/web/fundamentals/accessibility).',
      audits: [
        {id: 'accesskeys', weight: 1, group: 'a11y-correct-attributes'},
        {id: 'aria-allowed-attr', weight: 1, group: 'a11y-aria'},
        {id: 'aria-required-attr', weight: 1, group: 'a11y-aria'},
        {id: 'aria-required-children', weight: 1, group: 'a11y-aria'},
        {id: 'aria-required-parent', weight: 1, group: 'a11y-aria'},
        {id: 'aria-roles', weight: 1, group: 'a11y-aria'},
        {id: 'aria-valid-attr-value', weight: 1, group: 'a11y-aria'},
        {id: 'aria-valid-attr', weight: 1, group: 'a11y-aria'},
        {id: 'audio-caption', weight: 1, group: 'a11y-correct-attributes'},
        {id: 'button-name', weight: 1, group: 'a11y-element-names'},
        {id: 'bypass', weight: 1, group: 'a11y-describe-contents'},
        {id: 'color-contrast', weight: 1, group: 'a11y-color-contrast'},
        {id: 'definition-list', weight: 1, group: 'a11y-well-structured'},
        {id: 'dlitem', weight: 1, group: 'a11y-well-structured'},
        {id: 'document-title', weight: 1, group: 'a11y-describe-contents'},
        {id: 'duplicate-id', weight: 1, group: 'a11y-well-structured'},
        {id: 'frame-title', weight: 1, group: 'a11y-describe-contents'},
        {id: 'html-has-lang', weight: 1, group: 'a11y-language'},
        {id: 'html-lang-valid', weight: 1, group: 'a11y-language'},
        {id: 'image-alt', weight: 1, group: 'a11y-correct-attributes'},
        {id: 'input-image-alt', weight: 1, group: 'a11y-correct-attributes'},
        {id: 'label', weight: 1, group: 'a11y-describe-contents'},
        {id: 'layout-table', weight: 1, group: 'a11y-describe-contents'},
        {id: 'link-name', weight: 1, group: 'a11y-element-names'},
        {id: 'list', weight: 1, group: 'a11y-well-structured'},
        {id: 'listitem', weight: 1, group: 'a11y-well-structured'},
        {id: 'meta-refresh', weight: 1, group: 'a11y-meta'},
        {id: 'meta-viewport', weight: 1, group: 'a11y-meta'},
        {id: 'object-alt', weight: 1, group: 'a11y-describe-contents'},
        {id: 'tabindex', weight: 1, group: 'a11y-correct-attributes'},
        {id: 'td-headers-attr', weight: 1, group: 'a11y-correct-attributes'},
        {id: 'th-has-data-cells', weight: 1, group: 'a11y-correct-attributes'},
        {id: 'valid-lang', weight: 1, group: 'a11y-language'},
        {id: 'video-caption', weight: 1, group: 'a11y-describe-contents'},
        {id: 'video-description', weight: 1, group: 'a11y-describe-contents'},
      ]
    },
    'best-practices': {
      name: 'Best Practices',
      description: 'We\'ve compiled some recommendations for modernizing your web app and avoiding performance pitfalls. These audits do not affect your score but are worth a look.',
      audits: [
        {id: 'appcache-manifest', weight: 1},
        {id: 'no-websql', weight: 1},
        {id: 'is-on-https', weight: 1},
        {id: 'uses-http2', weight: 1},
        // {id: 'no-old-flexbox', weight: 1},
        {id: 'uses-passive-event-listeners', weight: 1},
        {id: 'no-mutation-events', weight: 1},
        {id: 'no-document-write', weight: 1},
        {id: 'external-anchors-use-rel-noopener', weight: 1},
        {id: 'geolocation-on-start', weight: 1},
        {id: 'notification-on-start', weight: 1},
        {id: 'deprecations', weight: 1},
        {id: 'manifest-short-name-length', weight: 1},
        {id: 'password-inputs-can-be-pasted-into', weight: 1},
      ]
    }
  }*/
};
