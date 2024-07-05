'use strict';

/**
 * self-assembly router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::self-assembly.self-assembly');
