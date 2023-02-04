import { GetServerSideProps } from 'next';
import React, { useEffect, useState } from 'react';
import { BadgeProps, Divider, Modal } from 'antd';
import { Badge, Calendar } from 'antd';
import type { Moment } from 'moment';
import { ContainerCalendarSchedule, Events, NotesMonth } from '../../styles/components/CalendarSchedule/styles';
import { getAPIClient } from '../../services/axios';
import { parseCookies } from 'nookies';
import { getScheduledAppointmentRequest } from '../../services/mock/calendar';
import ListConsult from '../ListConsult';

const CalendarSchedule: React.FC = () => {

  const [listScheduledAppointment, setListScheduledAppointment] = useState([]);
  const [listConsultsModal, setListConsultsModal] = useState<boolean>(false);
  const [dateSelected, setDateSelected] = useState<string>();


  const getData = async() => {
    const response = await getScheduledAppointmentRequest();

    if(!response) {
      console.log("Falha ao buscar lista de consultas!")
    }

    setListScheduledAppointment(response);
  }

  const onSelect = (value: Moment) => {
    const date = `${value.day()}/${value.month()}/${value.year()}`;
    setDateSelected(date);
    setListConsultsModal(true);
  }


  const handleSaveConsult = () => {};

  useEffect(() => {
    getData()
  }, [])

  return (
    <ContainerCalendarSchedule>
      <h2>Agenda de consultas médicas</h2>
      <Divider />
      <Calendar onSelect={onSelect} />
      <Modal
        title="Horários das Consultas"
        open={listConsultsModal}
        onOk={handleSaveConsult}
        onCancel={() => setListConsultsModal(false)}
        width={'95%'}
      >
        <ListConsult />
      </Modal>
    </ContainerCalendarSchedule>
  );
};

export default CalendarSchedule;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  //Validar Autenticação de acesso à pagina via server-side do next
  const apiClient = getAPIClient(ctx);

  const { ['projectPortfolio.token']: token } = parseCookies(ctx)

  if (!token) {
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  }

  apiClient.get('/appointment-schedule')

  return {
    props: {}
  }
}

