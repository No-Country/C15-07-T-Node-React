import HeaderBottom from '../../components/Header/Header-bottom';
import Table from '../../components/Table/Table';
import { TemplatePayments } from '../../components/Table/TemplateTable';

function Payments() {
  const columns = TemplatePayments();

  const data = [
    {
      id: '5146846548465',
      name: 'Jane Cooper',
      date: '2/19/21',
      status: 'Paid',
      amount: '500.00',
    },
    {
      id: '5467319467348',
      name: 'Wade Warren',
      date: '5/7/16',
      status: 'Paid',
      amount: '500.00',
    },
    {
      id: '1345705945446',
      name: 'Esther Howard',
      date: '9/18/16',
      status: 'Unpaid',
      amount: '500.00',
    },
    {
      id: '5440754979777',
      name: 'Cancha de futbol',
      date: '2/11/12',
      status: 'Paid',
      amount: '500.00',
    },
    {
      id: '1243467984543',
      name: 'Brooklyn Simmons',
      date: '9/18/16',
      status: 'Unpaid',
      amount: '500.00',
    },
    {
      id: '8454134649707',
      name: 'Leslie Alexander',
      date: '1/28/17',
      status: 'Unpaid',
      amount: '500.00',
    },
    {
      id: '2130164040451',
      name: 'Jenny Wilson',
      date: '5/27/15',
      status: 'Paid',
      amount: '500.00',
    },
    {
      id: '0439104645404',
      name: 'Guy Hawkins',
      date: '8/2/19',
      status: 'Paid',
      amount: '500.00',
    },
  ];
  return (
    <>
      <HeaderBottom />
      <Table columns={columns} data={data} />
    </>
  );
}

export default Payments;
