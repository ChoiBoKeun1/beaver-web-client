import React from 'react';
import {
  faChevronRight,
  faDownload,
  faExpand,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export function Expandicon() {
  return <FontAwesomeIcon icon={faExpand} />;
}
export function Downloadicon() {
  return <FontAwesomeIcon icon={faDownload} />;
}
export function Nexticon() {
  return <FontAwesomeIcon icon={faChevronRight} />;
}
