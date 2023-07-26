// Import our custom CSS
import '../scss/styles.scss'

import { createPopper } from '@popperjs/core';

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap' 

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));