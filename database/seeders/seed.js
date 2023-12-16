'use strict';




module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('countries', [

      {
        name: 'Chile',
        region: 'Sudamerica',
        created_at: new Date(),
        updated_at: new Date()
      },
    ], {})

    await queryInterface.bulkInsert('states', [
      {
        name: 'Arica y Parinacota',
        country_id: 1001,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Tarapacá',
        country_id: 1001,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Antofagasta',
        country_id: 1001,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Atacama',
        country_id: 1001,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Coquimbo',
        country_id: 1001,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Valparaíso',
        country_id: 1001,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Metropolitana',
        country_id: 1001,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Libertador General Bernardo O\'Higgins',
        country_id: 1001,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Maule',
        country_id: 1001,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Ñuble',
        country_id: 1001,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Biobío',
        country_id: 1001,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'La Araucanía',
        country_id: 1001,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Los Ríos',
        country_id: 1001,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Los Lagos',
        country_id: 1001,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Aysén',
        country_id: 1001,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Magallanes',
        country_id: 1001,
        created_at: new Date(),
        updated_at: new Date()
      },

    ]),


      //   Arica y Parinacota: 	Arica, Putre, Camarones, General Lagos
      // Tarapacá: 	Iquique, Alto Hospicio, Pozo Almonte, Pica, Huara
      //  Antofagasta: 	Antofagasta, Calama, Tocopilla, Mejillones, Sierra Gorda, Taltal, San Pedro de Atacama
      // Atacama	Copiapó, Vallenar, Caldera, Huasco, Freirina, Diego de Almagro
      // Coquimbo: 	La Serena, Coquimbo, Ovalle, Illapel, Los Vilos, Salamanca, Andacollo
      //     Región de Valparaíso: 	Valparaíso, Viña del Mar, Quilpué, Villa Alemana, San Felipe, Los Andes, Quillota
      //     Región Metropolitana de Santiago	Santiago, Maipú, Providencia, Puente Alto, Las Condes, La Florida, Ñuñoa
      //     Región del Libertador General Bernardo O'Higgins	Rancagua, San Fernando, Santa Cruz, Pichilemu, San Vicente de Tagua Tagua
      //     Región del Maule	Talca, Curicó, Linares, Molina, Constitución, San Javier, Parral
      //     Región de Ñuble	Chillán, Bulnes, Quirihue, San Carlos, Yungay, Coelemu, Cobquecura
      //     Región del Biobío	Concepción, Talcahuano, Chillán, Los Ángeles, Coronel, Lota, Tomé
      //     Región de La Araucanía	Temuco, Angol, Villarrica, Pucón, Victoria, Lautaro, Loncoche
      //     Región de Los Ríos	Valdivia, Los Lagos, La Unión, Panguipulli, Río Bueno, Lanco, Mariquina
      //     Región de Los Lagos	Puerto Montt, Osorno, Castro, Ancud, Quellón, Puerto Varas, Frutillar
      //     Región de Aysén del General Carlos Ibáñez del Campo	Coyhaique, Puerto Aysén, Chile Chico, Cochrane, Puerto Cisnes
      //     Región de Magallanes y de la Antártica Chilena	Punta Arenas, Puerto Natales, Porvenir, Puerto Williams, Cerro Sombrero

      await queryInterface.bulkInsert('cities', [
        {
          name: 'Arica',
          state_id: 1001,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Putre',
          state_id: 1001,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Camarones',
          state_id: 1001,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'General Lagos',
          state_id: 1001,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Iquique',
          state_id: 1002,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Alto Hospicio',
          state_id: 1002,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Pozo Almonte',
          state_id: 1002,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Pica',
          state_id: 1002,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Huara',
          state_id: 1002,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Antofagasta',
          state_id: 1003,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Calama',
          state_id: 1003,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Tocopilla',
          state_id: 1003,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Mejillones',
          state_id: 1003,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Sierra Gorda',
          state_id: 1003,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Taltal',
          state_id: 1003,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'San Pedro de Atacama',
          state_id: 1003,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Copiapó',
          state_id: 1004,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Vallenar',
          state_id: 1004,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Caldera',
          state_id: 1004,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Huasco',
          state_id: 1004,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Freirina',
          state_id: 1004,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Diego de Almagro',
          state_id: 1004,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'La Serena',
          state_id: 1005,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Coquimbo',
          state_id: 1005,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Ovalle',
          state_id: 1005,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Illapel',
          state_id: 1005,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Los Vilos',
          state_id: 1005,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Salamanca',
          state_id: 1005,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Andacollo',
          state_id: 1005,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Valparaíso',
          state_id: 1006,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Viña del Mar',
          state_id: 1006,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Quilpué',
          state_id: 1006,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Villa Alemana',
          state_id: 1006,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'San Felipe',
          state_id: 1006,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Los Andes',
          state_id: 1006,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Quillota',
          state_id: 1006,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Santiago',
          state_id: 1007,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Maipú',
          state_id: 1007,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Providencia',
          state_id: 1007,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Puente Alto',
          state_id: 1007,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Las Condes',
          state_id: 1007,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'La Florida',
          state_id: 1007,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Ñuñoa',
          state_id: 1007,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Rancagua',
          state_id: 1008,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'San Fernando',
          state_id: 1008,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Santa Cruz',
          state_id: 1008,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Pichilemu',
          state_id: 1008,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'San Vicente de Tagua Tagua',
          state_id: 1008,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Talca',
          state_id: 1009,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Curicó',
          state_id: 1009,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Linares',
          state_id: 1009,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Molina',
          state_id: 1009,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Constitución',
          state_id: 1009,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'San Javier',
          state_id: 1009,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Parral',
          state_id: 1009,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Chillán',
          state_id: 1010,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Bulnes',
          state_id: 1010,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Quirihue',
          state_id: 1010,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'San Carlos',
          state_id: 1010,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Yungay',
          state_id: 1010,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Coelemu',
          state_id: 1010,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Cobquecura',
          state_id: 1010,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Concepción',
          state_id: 1011,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Talcahuano',
          state_id: 1011,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Chillán',
          state_id: 1011,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Los Ángeles',
          state_id: 1011,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Coronel',
          state_id: 1011,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Lota',
          state_id: 1011,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Tomé',
          state_id: 1011,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Temuco',
          state_id: 1012,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Angol',
          state_id: 1012,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Villarrica',
          state_id: 1012,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Pucón',
          state_id: 1012,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Victoria',
          state_id: 1012,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Lautaro',
          state_id: 1012,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Loncoche',
          state_id: 1012,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Valdivia',
          state_id: 1013,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Los Lagos',
          state_id: 1013,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'La Unión',
          state_id: 1013,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Panguipulli',
          state_id: 1013,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Río Bueno',
          state_id: 1013,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Lanco',
          state_id: 1013,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Mariquina',
          state_id: 1013,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Puerto Montt',
          state_id: 1014,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Osorno',
          state_id: 1014,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Castro',
          state_id: 1014,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Ancud',
          state_id: 1014,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Quellón',
          state_id: 1014,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Puerto Varas',
          state_id: 1014,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Frutillar',
          state_id: 1014,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Coyhaique',
          state_id: 1015,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Puerto Aysén',
          state_id: 1015,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Chile Chico',
          state_id: 1015,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Cochrane',
          state_id: 1015,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Puerto Cisnes',
          state_id: 1015,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Punta Arenas',
          state_id: 1016,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Puerto Natales',
          state_id: 1016,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Porvenir',
          state_id: 1016,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Puerto Williams',
          state_id: 1016,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Cerro Sombrero',
          state_id: 1016,
          created_at: new Date(),
          updated_at: new Date()
        },

      ]),


      await queryInterface.bulkInsert('profiles', [
        {
          name: 'Administrador', //1001
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Buscador', //1002
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Ofertante',
          created_at: new Date(), //1003
          updated_at: new Date()
        },
        {
          name: 'OfertaMatchWorker', //1004
          created_at: new Date(),
          updated_at: new Date()
        }

      ], {})
      


    await queryInterface.bulkInsert('users', [
      {
        mail: 'admin',
        pass: '9898',
        profile_id: 1001
      },
      {
        mail: 'buscador',
        pass: '9898',
        profile_id: 1002
      },
      {
        mail: 'ofertante',
        pass: '9898',
        profile_id: 1003
      },
      {
        mail: 'ofertante2',
        pass: '9898',
        profile_id: 1003
      },
      {
        mail: 'ofertamatchworker',
        pass: '9898',
        profile_id: 1004
      },
    
     
    
    ], {})

    await queryInterface.bulkInsert('categories', [
      {
        name: 'Dispositivos móviles',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Computadoras y portátiles',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Propiedades',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Accesorios electrónicos',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Moda Mujer',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Lenceria',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Calzado',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Accesorios de moda',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Autos usados',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Autos nuevos',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Arriendo de vehículos',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Materiales de construcción',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Articulos  de ferretería',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Articulos de Gastiteria',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Articulos Electricidad',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Dispositivos electrónicos',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Accesorios tecnológicos',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Equipos de audio y video',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Gadgets',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Ropa para hombres, mujeres y niños',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Calzado',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Accesorios de moda',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Joyería',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Electrodomésticos de cocina',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Electrodomésticos para el hogar',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Productos de cuidado personal',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Cosméticos',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Equipos de ejercicio',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Suplementos nutricionales',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Artículos deportivos',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Ropa deportiva',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Equipos de camping y senderismo',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Libros',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Películas y música',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Juguetes y juegos',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Servicios de consultoría',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Reparación y mantenimiento',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Servicios de tecnología',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Servicios de salud y bienestar',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Servicios de abogados',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Servicios de contadores',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Servicios peluquería',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Servicios Dj',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Plantas y flores',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Herramientas de jardín',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Mobiliario de exterior',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Alimentos para mascotas',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Juguetes para mascotas',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Artículos de cuidado para mascotas',
        created_at: new Date(),
        updated_at: new Date()
      },


    ], {})




  },

};

//restt