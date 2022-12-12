'use strict';

/**
 * basic-overview service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::basic-overview.basic-overview');
