import {MdDashboard} from 'react-icons/md';
import {FaHouseUser, FaUsers} from 'react-icons/fa';
import {IoMdLogOut} from 'react-icons/io';
import {IoIdCardSharp} from 'react-icons/io5';
import {GiSkier} from 'react-icons/gi';
import {FaAddressCard} from 'react-icons/fa';

function DashNav(props) {
  return (
    <ul className="mont navbar-nav me-auto mb-2 mb-md-0">
      <li className="nav-item text-left dash-nav-item mt-4">
        <a className="nav-link" href={`/dashboard/${props.userType}`}>
          <MdDashboard size={30} className="mx-2"></MdDashboard>
          Dashboard <span className="sr-only"></span>
        </a>
      </li>
      {props.userType == 'user' ? (
        <li className="nav-item text-left dash-nav-item">
          <a className="nav-link" href={`/dashboard/${props.userType}/account`}>
            <FaHouseUser size={30} className="mx-2"></FaHouseUser> Mi Mountain
            Pass <span className="sr-only"></span>
          </a>
        </li>
      ) : (
        ''
      )}
      {props.userType == 'user' ? (
        <li className="nav-item text-left dash-nav-item">
          <a
            className="nav-link"
            href={`/dashboard/${props.userType}/subscriptions`}
          >
            <IoIdCardSharp size={30} className="mx-2"></IoIdCardSharp>
            Suscripciones{' '}
          </a>
        </li>
      ) : (
        ''
      )}

      {props.userType == 'admin' ? (
        <li className="nav-item text-left dash-nav-item">
          <a className="nav-link" href={`/dashboard/${props.userType}/users`}>
            <FaHouseUser size={30} className="mx-2"></FaHouseUser> Usuarios{' '}
          </a>
        </li>
      ) : (
        ''
      )}

      {props.userType == 'admin' ? (
        <li className="nav-item text-left dash-nav-item">
          <a className="nav-link" href={`/dashboard/${props.userType}/centers`}>
            <GiSkier size={30} className="mx-2"></GiSkier> Centros{' '}
          </a>
        </li>
      ) : (
        ''
      )}

      {props.userType == 'center' ? (
        <li className="nav-item text-left dash-nav-item">
          <a
            className="nav-link"
            href={`/dashboard/${props.userType}/validate`}
          >
            <FaAddressCard size={30} className="mx-2"></FaAddressCard>
            Validar rut{' '}
          </a>
        </li>
      ) : (
        ''
      )}

      <li className="nav-item text-left dash-nav-item">
        <a className="nav-link" href={`/auth/logout`}>
          {' '}
          <IoMdLogOut size={30} className="mx-2"></IoMdLogOut>
          Cerrar Sesión{' '}
        </a>
      </li>
    </ul>
  );
}
export default DashNav;
