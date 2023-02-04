import React from 'react';
import { ConfigProvider } from 'antd';
import ptBr from 'antd/es/locale/pt_BR';
import CalendarSchedule from '../components/CalendarSchedule';

const AppointmentSchedule: React.FC = () => {
  return (
    <ConfigProvider locale={ptBr}>
      <CalendarSchedule />
    </ConfigProvider>
  )
}

export default AppointmentSchedule;
