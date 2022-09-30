import CreateForm from "./CreateForm";
import CookieStandTable from "./CookieStandTable";
import { useAuth } from '../contexts/auth';
import useResource from '../hooks/useResource';

export default function CookieStandAdmin() {

  const { user } = useAuth();
  const { createResource } = useResource();

  function handleSubmit(event) {
    event.preventDefault();
    const info = {
      location: event.target.location.value,
      minimum_customers_per_hour: parseInt(event.target.minimum.value),
      maximum_customers_per_hour: parseInt(event.target.maximum.value),
      average_cookies_per_sale: parseFloat(event.target.average.value),
      owner: user.id,
    };
    createResource(info);

  }

  return (
    <div>
      <CreateForm handleSubmit={handleSubmit} />
      <CookieStandTable />
    </div>

  );

}