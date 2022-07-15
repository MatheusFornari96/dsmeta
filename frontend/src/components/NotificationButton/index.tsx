import axios from 'axios';
import NotifyIcon from '../../assets/img/notification-icon.svg';
import { BASE_URL } from '../../utils/api';
import './styles.css';

type Props = {
  saleId: number;
}

const handleNotification = (id : number) => {
  axios(`${BASE_URL}/sales/${id}/notification`).then(response => {
    console.log('Sucesso');
  })
};


function NotificationButton({saleId}:Props) {
  return (<>
    <div className="dsmeta-red-btn" onClick={() => handleNotification(saleId)}>
      <img src={NotifyIcon} alt="Notificar" />
    </div>
  </>)
}

export default NotificationButton;
