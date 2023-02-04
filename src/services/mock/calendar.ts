import { v4 as uuid } from 'uuid'

const deley = (amount = 750) => new Promise(resolve => setTimeout(resolve, amount))

export async  function getScheduledAppointmentRequest () {

  await deley()

  return (
    [
      {
        id: uuid(),
        name: 'Everton Luis da Silva',
        phone: '(11)98654-8974',
        email: 'dmeverton@gmail.com',
        speciality: 'Clínico Geral',
        doctor: 'José dos Santos',
        CRM: '256.012',
        date: '2022-10-24',
        hour: '08:30',
      },
      {
        id: uuid(),
        name: 'Marouane Pondikpa',
        phone: '(11)99925-5785',
        email: 'marouane.pondikpa@gmail.com',
        speciality: 'Urologista',
        doctor: 'Roberto Ben Galla',
        CRM: '242.740',
        date: '2022-10-08',
        hour: '10:00',
      },
      {
        id: uuid(),
        name: 'Eduardo Silva',
        phone: '(11)98775-2045',
        email: 'eduardo.silva@hotmail.com',
        speciality: 'Otorrinolaringologista',
        doctor: 'Maria da Conceição',
        CRM: '236.788',
        date: '2022-10-08',
        hour: '16:30',
      },
      {
        id: uuid(),
        name: 'Priscilla Pereira da Silva',
        phone: '(11)98799-9820',
        email: 'priscilla_22sp@hotmail.com',
        speciality: 'Ginecologista',
        doctor: 'Suzana Yamato',
        CRM: '207.574',
        date: '2022-10-13',
        hour: '13:00',
      },
      {
        id: uuid(),
        name: 'Helio da Silva',
        phone: '(11)95748-1320',
        email: 'helio.silva@gmail.com',
        speciality: 'Geriatra',
        doctor: 'Nelson Chavier',
        CRM: '193.145',
        date: '2022-10-25',
        hour: '15:30',
      },
      {
        id: uuid(),
        name: 'Elaine Cristina da Silva',
        phone: '(11)98095-1556',
        email: 'elaine.silva@gmail.com',
        speciality: 'Psquiatra',
        doctor: 'João Marrateda',
        CRM: '187.009',
        date: '2022-11-03',
        hour: '16:30',
      },
    ]
  );
}
