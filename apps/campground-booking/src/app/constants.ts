// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

// Success Image element
const successElement = document.createElement('img');
successElement.className = 'status-img';
successElement.src = '/assets/success.svg';

// Error Image element
const errorElement = document.createElement('img');
errorElement.className = 'status-img';
errorElement.src = '/assets/error.svg';

// Endpoint to get report config
const reportUrl = '/api/v1/reports/a9d86d4b-d818-4bc8-a8b7-f77d07150a7a';

const errorClass = 'error';
const successClass = 'success';

// To show / hide the report container
const hidden = 'hidden';

// To position the display message
const position = 'position';

export { errorClass, errorElement, hidden, position, reportUrl, successClass, successElement };