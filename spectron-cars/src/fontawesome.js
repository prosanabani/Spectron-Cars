import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon as BaseFontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Add the icons to the library so they can be used globally
library.add(fab, fas, far);

// Custom FontAwesomeIcon wrapper to avoid naming conflicts
function FontAwesomeIcon(props) {
    return <BaseFontAwesomeIcon {...props} />;
}

export { FontAwesomeIcon };