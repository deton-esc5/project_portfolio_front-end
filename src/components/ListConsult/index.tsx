import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { Form, Input, InputNumber, Popconfirm, Table, Typography, Select } from 'antd';

interface Item {
  id: string;
  hour: string;
  name: string;
  phone: string;
  email: string;
  speciality: string;
  doctor: string;
  date: string;
}

interface SpecialistListData {
  id: string;
  speciality: string;
}

const originData: Item[] = [
  {
    id: uuid(),
    hour: '08:00',
    name: '',
    phone: '',
    email: '',
    speciality: '',
    doctor: '',
    date: '',
  },
  {
    id: uuid(),
    hour: '08:30',
    name: '',
    phone: '',
    email: '',
    speciality: '',
    doctor: '',
    date: '',

  },
  {
    id: uuid(),
    hour: '09:00',
    name: '',
    phone: '',
    email: '',
    speciality: '',
    doctor: '',
    date: '',

  },
  {
    id: uuid(),
    hour: '09:30',
    name: '',
    phone: '',
    email: '',
    speciality: '',
    doctor: '',
    date: '',

  },
  {
    id: uuid(),
    hour: '10:00',
    name: '',
    phone: '',
    email: '',
    speciality: '',
    doctor: '',
    date: '',

  },
  {
    id: uuid(),
    hour: '10:30',
    name: '',
    phone: '',
    email: '',
    speciality: '',
    doctor: '',
    date: '',

  },
  {
    id: uuid(),
    hour: '11:00',
    name: '',
    phone: '',
    email: '',
    speciality: '',
    doctor: '',
    date: '',

  },
  {
    id: uuid(),
    hour: '11:30',
    name: '',
    phone: '',
    email: '',
    speciality: '',
    doctor: '',
    date: '',

  },
  {
    id: uuid(),
    hour: '12:00',
    name: '',
    phone: '',
    email: '',
    speciality: '',
    doctor: '',
    date: '',

  },
  {
    id: uuid(),
    hour: '12:30',
    name: '',
    phone: '',
    email: '',
    speciality: '',
    doctor: '',
    date: '',

  },
  {
    id: uuid(),
    hour: '13:00',
    name: '',
    phone: '',
    email: '',
    speciality: '',
    doctor: '',
    date: '',

  },
  {
    id: uuid(),
    hour: '13:30',
    name: '',
    phone: '',
    email: '',
    speciality: '',
    doctor: '',
    date: '',

  },
  {
    id: uuid(),
    hour: '14:00',
    name: '',
    phone: '',
    email: '',
    speciality: '',
    doctor: '',
    date: '',

  },
  {
    id: uuid(),
    hour: '1430',
    name: '',
    phone: '',
    email: '',
    speciality: '',
    doctor: '',
    date: '',

  },
  {
    id: uuid(),
    hour: '15:00',
    name: '',
    phone: '',
    email: '',
    speciality: '',
    doctor: '',
    date: '',

  },
  {
    id: uuid(),
    hour: '15:30',
    name: '',
    phone: '',
    email: '',
    speciality: '',
    doctor: '',
    date: '',

  },
  {
    id: uuid(),
    hour: '16:00',
    name: '',
    phone: '',
    email: '',
    speciality: '',
    doctor: '',
    date: '',

  },
  {
    id: uuid(),
    hour: '16:30',
    name: '',
    phone: '',
    email: '',
    speciality: '',
    doctor: '',
    date: '',

  },
  {
    id: uuid(),
    hour: '17:00',
    name: '',
    phone: '',
    email: '',
    speciality: '',
    doctor: '',
    date: '',

  },
  {
    id: uuid(),
    hour: '17:30',
    name: '',
    phone: '',
    email: '',
    speciality: '',
    doctor: '',
    date: '',

  },
  {
    id: uuid(),
    hour: '18:00',
    name: '',
    phone: '',
    email: '',
    speciality: '',
    doctor: '',
    date: '',

  },
];

interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
  editing: boolean;
  dataIndex: string;
  title: any;
  inputType: 'number' | 'text';
  record: Item;
  index: number;
  children: React.ReactNode;
  specialityList: SpecialistListData;
}

const EditableCell: React.FC<EditableCellProps> = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  specialityList,
  ...restProps
}) => {
  const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;

  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{ margin: 0 }}
          rules={[
            {
              required: false,
              message: `Inserir ${title}.`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

const ListConsult: React.FC = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState(originData);
  const [editingKey, setEditingKey] = useState('');
  const [specialityList, setSpecialityList] = useState<SpecialistListData[]>(
    [
      {id: uuid(), speciality: "Ginecologista"},
      {id: uuid(), speciality: "Clínico Geral"},
      {id: uuid(), speciality: "Geriatra"},
      {id: uuid(), speciality: "Urologista"},
      {id: uuid(), speciality: "Pediatra"},
      {id: uuid(), speciality: "Pscólogo"},
      {id: uuid(), speciality: "Otorrinolaringologista"},
    ]
  );

  const { Option } = Select;

  const isEditing = (record: Item) => record.id === editingKey;

  const edit = (record: Partial<Item> & { id: React.Key }) => {
    console.log(form);
    // form.setFieldValue('speciality', () => {
    //   const children: React.ReactNode[] = [];
    //   specialityList.map(value => {
    //     children.push(<Option key={value.id}>{value.speciality}</Option>)
    //   })
    //   return (
    //     <Select style={{ width: '100%' }} placeholder="Selecione" onChange={() => console.log('Rolou')}>
    //       {children}
    //   </Select>
    //   );
    // })
    form.setFieldsValue({ name: '', phone: '', email: '', speciality: '', doctor: '', ...record });
    setEditingKey(record.id);
  };

  const cancel = () => {
    setEditingKey('');
  };

  const save = async (key: React.Key) => {
    try {
      const row = (await form.validateFields()) as Item;

      const newData = [...data];
      const index = newData.findIndex(item => key === item.id);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        setData(newData);
        setEditingKey('');
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey('');
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };

  const columns = [
    {
      title: 'Horário',
      dataIndex: 'hour',
      width: '7%',
      editable: false,
    },
    {
      title: 'Nome',
      dataIndex: 'name',
      width: '20%',
      editable: true,
    },
    {
      title: 'Telefone',
      dataIndex: 'phone',
      width: '10%',
      editable: true,
    },
    {
      title: 'E-mail',
      dataIndex: 'email',
      width: '15%',
      editable: true,
    },
    {
      title: 'Especialidade',
      dataIndex: 'speciality',
      width: '15%',
      editable: true,
      render: (_: any ) => {
        const children: React.ReactNode[] = [];
        specialityList.map(value => {
          children.push(<Option key={value.id}>{value.speciality}</Option>)
        })
        return (
          <Select style={{ width: '100%' }} placeholder="Selecione" onChange={() => console.log('Rolou')}>
            {children}
        </Select>
        );
      },
    },
    {
      title: 'Médico',
      dataIndex: 'doctor',
      width: '20%',
      editable: true,
    },
    {
      title: 'Agendar Consulta',
      dataIndex: 'operation',
      render: (_: any, record: Item) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Typography.Link onClick={() => save(record.id)} style={{ marginRight: 8 }}>
              Salvar
            </Typography.Link>
            <Popconfirm title="Cancelar Edição?" onConfirm={cancel}>
              <a>Cancelar</a>
            </Popconfirm>
          </span>
        ) : (
          <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
            {record.name.length > 0 ? 'Editar' : 'Agendar'}
          </Typography.Link>
        );
      },
    },
  ];

  const mergedColumns = columns.map(col => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record: Item) => ({
        record,
        inputType: col.dataIndex === 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  return (
    <Form form={form} component={false}>
      <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        dataSource={data}
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination={{
          onChange: cancel,
        }}
      />
    </Form>
  );
};

export default ListConsult;
