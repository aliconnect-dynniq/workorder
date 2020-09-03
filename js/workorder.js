(function() {
  AIM.extend({
    prompt: {
      init() {
        return colpanel.createElement('FORM', 'col', {
          title: 'Aanmaken opdracht',
          description: 'Wilt u een opdracht aanmaken? klik dan op verder.',
          properties: {

          },
          operations: {
            next: {type: 'submit'},
          },
          client: AIM.config.aim,
          action: `/Workorder`,
          onload(event) {
            console.log(event.body);
            AIM.get.id = event.body.UID;
            AIM.get.id = event.body.ID;
            AIM.request('?prompt=Start&id=' + AIM.get.id);
            // AIM.request('?prompt=' + event.submitter.value);
          },
        });
      },
    },
    on: {
      load() {

      },
      init() {
        // console.log('aaa',document.cookies);
        if (!AIM.get.prompt) AIM.request('?prompt=init');
        // AIM.prompt('Stap 1');
      }
    }
  });
  let step = {};
  // let label = 'Start';
  let config = null;
  Panel = function (config) {
    // console.log(config.label, config);
    return () => {
      // console.log(config.label);
      return colpanel.createElement('FORM', 'col', {

        // label: config.label ,
        // pos:'m',
        client: AIM.config.aim,
        // action: `/Workorder(${AIM.get.id})?uri=` + encodeURIComponent(document.location.href.replace(/prompt=([^\&]+)/, 'prompt=' + config.next)) + (config.mailto ? '&mailto=' + config.mailto: ''),
        action: `/Workorder(${AIM.get.id})?uri=` + encodeURIComponent(document.location.href) + (config.mailto ? '&mailto=' + config.mailto: ''),
        title: config.prompt,
        description: config.description,
        onshow: true,
        properties: config.properties,
        operations: {
          prior: config.prior ? {type: 'button', onclick() {
            console.log(config.prior);
            AIM.request('?prompt=' + config.prior);
            // return false;
          }} : null,
          next: {type: 'submit'},
        },
        onload(event) {
          // if (event) return console.log(event.target.responseText);
          AIM.request('?prompt=' + (config.next || 'init&id='));
        },
      });
    }
  }
  for (let [propertyName, property] of Object.entries(AIM.components.schemas.Workorder.properties)) {
    if (property.prompt) {
      if (config) {
        config.next = property.prompt;
      }
      config = Object.assign({
        // label: property.label,
        prior: config ? config.prompt : null,
        properties: {},
        operations: {},
      }, property);
      AIM.prompt[config.prompt] = new Panel(config);
    }
    console.log(propertyName, config);
    config.properties[propertyName] = property;
    if (property.mailto) config.mailto = propertyName;
  }
  // console.log(AIM.prompt.Step_1, AIM.prompt.Step_2);
})();
