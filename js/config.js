(function() {
  AIM.extend({
    components: {
      schemas: {
        Workorder: {
          properties: {
            
            // Configuratie Stap 1, Start opdracht naar opdrachtgever
            Opdrachtgever: {
              prompt: 'Start',
              label: 'Basis gegevens',
              description: 'Voer alle basis gegevens in voor het starten van de opdracht',
              title: 'Geef naam opdrachtgever',
            },
            Opdrachtgever_bezoekadres: {
              format: 'address',
            },
            Opdrachtgever_contactpersoon: {
              format: 'text',
            },
            Opdrachtgever_email: {
              format: 'email',
              mailto: true,
              required: true,
              pattern: '[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$',
              title: 'Geef email adres van opdrachtgever',
            },

            // Configuratie Stap 2
            Uitvoerder: {
              prompt: 'Stap 2',
              label: 'Basis gegevens uitvoerder',
              description: 'Voer alle basis gegevens van de uitvoerder in voor het starten van de opdracht',
              title: 'Geef naam opdrachtgever',
            },
            Uitvoerder_bezoekadres: {
              format: 'address',
            },
            Uitvoerder_contactpersoon: {
              format: 'text',
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
