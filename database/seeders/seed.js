'use strict';



module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('countries', [
      {
        name: 'Chile',
        region: 'Suramerica',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Perú',
        region: 'Suramerica',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Argentina',
        region: 'Suramerica',
        created_at: new Date(),
        updated_at: new Date()
      }

    ], {})

    await queryInterface.bulkInsert('states', [
      {
        name: 'Maule',
        country_id: 1001,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'RM',
        country_id: 1001
      }
    ], {})

    await queryInterface.bulkInsert('cities',[
      {
        name: 'Talca',
        state_id: 1001,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Santiago',
        state_id: 1002,
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {})

    await queryInterface.bulkInsert('categories', [
      {
        name: 'Tecnología',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Hogar',
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {})



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
        profile_id: 1001,
        city_id: 1001,
        category_id: 1001,
        dni: '123456',
        phone: '123456',
        state: 1,
        created_at: new Date(),
        updated_at: new Date()
      }, 
      {
        mail: 'buscador',
        pass: '9898',
        profile_id: 1002,
        city_id: 1001,
        category_id: 1001,
        dni: '123456',
        phone: '123456',
        state: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        mail: 'ofertante',
        pass: '9898',
        profile_id: 1003,
        city_id: 1001,
        category_id: 1001,
        dni: '123456',
        phone: '123456',
        state: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        mail: 'ofertaMatchWorker',
        pass: '9898',
        profile_id: 1004,
        city_id: 1001,
        category_id: 1001,
        dni: '123456',
        phone: '123456',
        state: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        mail: 'ofertante2',
        pass: '9898',
        profile_id: 1003,
        city_id: 1001,
        category_id: 1001,
        dni: '123456',
        phone: '123456',
        state: 1,
        created_at: new Date(),
        updated_at: new Date()
      },

    ], {})


    await queryInterface.bulkInsert('notifications', [
      {
        title: 'Se necesita un trabajador para la construcción',
        description: 'Se necesita un trabajador para la construcción',
        amount: 10000,
        user_id: 1001,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: 'construcción',
        description: 'construcción',
        amount: 10000,
        user_id: 1001,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: 'Nueva buqueda',
        description: 'Busqueda de servicio',
        amount: 10000,
        user_id: 1001,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: 'Se necesita un trabajador para la construcción',
        description: 'Se necesita un trabajador para la construcción',
        amount: 10000,
        user_id: 1001,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: 'construcción',
        description: 'construcción',
        amount: 10000,
        user_id: 1002,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: 'Nueva buqueda',
        description: 'Busqueda de servicio',
        amount: 10000,
        user_id: 1002,
        created_at: new Date(),
        updated_at: new Date()
      }

    ], {})



  },

};
