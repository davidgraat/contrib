import components from './components';
import templates from './templates';
export default {
  components,
  templates,
  options: {
    builder: {
      builder: {
        basic: false,
        advanced: false,
        layout: false,
        data: false,
        premium: false,
        customBasic: {
          title: 'Basic Components',
          default: true,
          weight: 0,
          components: {
            firstname: true
          }
        },
      }
    } 
  }
};
