'use strict';

/**
 * self-assembly service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::self-assembly.self-assembly');
