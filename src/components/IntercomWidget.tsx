import React, { useEffect } from 'react';

declare global {
  interface Window {
    Intercom: any;
    intercomSettings: any;
    attachEvent?: (event: string, listener: () => void) => void;
  }
}

const IntercomWidget: React.FC = () => {
  useEffect(() => {
    const APP_ID = 'xnexm4yd';

    // Intercom script loader
    (function () {
      var w = window;
      var ic = w.Intercom;
      if (typeof ic === 'function') {
        ic('reattach_activator');
        ic('update', w.intercomSettings);
      } else {
        var d = document;
        var i: any = function () {
          i.c(arguments);
        };
        i.q = [];
        i.c = function (args: any) {
          i.q.push(args);
        };
        w.Intercom = i;
        var l = function () {
          var s = d.createElement('script');
          s.type = 'text/javascript';
          s.async = true;
          s.src = 'https://widget.intercom.io/widget/' + APP_ID;
          var x = d.getElementsByTagName('script')[0];
          x.parentNode.insertBefore(s, x);
        };
        if (document.readyState === 'complete') {
          l();
        } else if (w.attachEvent) {
          w.attachEvent('onload', l);
        } else {
          w.addEventListener('load', l, false);
        }
      }
    })();

    window.Intercom('boot', {
      app_id: APP_ID,
    });

    return () => {
      if (window.Intercom) {
        window.Intercom('shutdown');
      }
    };
  }, []);

  return null;
};

export default IntercomWidget;
