import { ComponentMetadata } from '../model';
import { shapeProperties } from './defaults';

export default {
  tagName: 'vaadin-tabsheet',
  displayName: 'TabSheet',
  elements: [
    {
      selector: 'vaadin-tabsheet',
      displayName: 'TabSheet',
      properties: [
        shapeProperties.padding,
        shapeProperties.backgroundColor,
        shapeProperties.borderWidth,
        shapeProperties.borderColor,
        shapeProperties.borderRadius
      ]
    }
  ]
} as ComponentMetadata;
