import { ServiceConfiguration } from 'meteor/service-configuration';

// ==========================
// Reset ServiceConfiguration
// ==========================
ServiceConfiguration.configurations.remove({
	service: 'facebook'
});

// ======================
// Setting Up Credentials
// ======================

// Facebook
ServiceConfiguration.configurations.insert({
	service: 'facebook',
	appId: '370230846752986',
	secret: 'd3c0f07f6d2b1787a9f61d4d497d01a3'
});
