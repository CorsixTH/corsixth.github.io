// SPDX-FileCopyrightText: 2021 Romain Vigier <contact AT romainvigier.fr>
//
// SPDX-License-Identifier: GPL-3.0-or-later

const watch = require('node-watch');

const build = require('./build');


const assets_watcher = watch(build.ASSETS_DIR, { recursive: true });
assets_watcher.on('change', (e, name) => build.copyAssets());

const templates_watcher = watch(build.TEMPLATES_DIR, { recursive: true });
templates_watcher.on('change', (e, name) => build.renderPages());
