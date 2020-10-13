(function() {
  AIM.extend({
    components: {
      schemas: {
        Workorder: {
          properties: {


            State: {
              options: {
                New: { },
                Requested: { },
                Accepted: { },
              }
            },

            CreateDateTime: { },
            LastModifiedDateTime: { },
            LastModifiedBy: { },

            FinishDateTime: { },

            // Categorie: { },


            // Configuratie Stap 1, Start opdracht naar opdrachtgever
            Naam_uitvoerder: {

              prompt: 'New',




              description: 'Voer alle basis gegevens in voor het starten van de opdracht',

              label: 'Basis_gegevens',

              title: 'Geef naam uitvoerder',

              // schema: 'Contact',
              // filter: 'Type=uitvoerder',
            },
            StartDateTime: {
            },
            EndDateTime: {
            },
            Station: {
              // schema: 'Station',

              schema: 'System',
              filter: 'Typical=Station',

              options: {
                J2: { },
                C: { },
                H: { },
              }
            },
            Benodigde_uitschakeling: {

              schema: 'System',
              filter: 'Typical eq Energiegroep,TempRegelaar and Master eq @Station',

              type: 'array',
              // max: 3,
            },
            Werkzaamheden_uitvoerder: {
              // format: 'textarea',
              // format: 'div',
              format: 'rich',
            },
            Requested_email: {
              title: 'Geef email adres van opdrachtgever',
              type: 'string',
              format: 'email',
              // pattern: '[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$',
              mailto: true,
              required: true,

              defaultvalue: 'ams@schiphol.nl',

              value: 'ams@schiphol.nl',
              hidden: true,
            },








            xxxxx: {
              prompt: 'Requested',
            },












            Opdrachtgever_bezoekadres: {

              prompt: 'Stap 2',



              format: 'address',
            },
            Opdrachtgever_contactpersoon: {
              format: 'text',
            },
            Opdrachtgever_email: {
              type: 'string',
              format: 'email',
              mailto: true,
              required: true,
              pattern: '[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$',
              title: 'Geef email adres van opdrachtgever',
            },

            // Configuratie Stap 2
            Uitvoerder: {


              label: __('Basis gegevens uitvoerder'),
              description: 'Voer alle basis gegevens van de uitvoerder in voor het starten van de opdracht',
              title: 'Geef naam opdrachtgever',
            },
            Uitvoerder_bezoekadres: {
              format: 'address',
            },
            Uitvoerder_contactpersoon: {
              format: 'text',
            },
            Uitvoerder_signature: {
              type: 'image',
              format: 'signature',
            },
            Uitvoerder_locatie: {
              format: 'location',
            },
            Uitvoerder_image_lock: {
              format: 'cam',
            },
            Uitvoerder_email: {
              format: 'email',
              mailto: true,
              required: true,
              pattern: '[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$',
              title: 'Geef email adres van uitvoerder',
            },
          }
        }
      }
    },
  });
})();
